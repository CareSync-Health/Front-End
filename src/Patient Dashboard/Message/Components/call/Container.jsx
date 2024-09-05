import React, { useEffect, useRef, useState } from 'react';
import { MdMic, MdMicOff, MdOutlineCallEnd, MdVideocam, MdVideocamOff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSocket } from '@/Redux/context/SocketContext';
import { config } from '@/Redux/Config';
import * as types from "@/Redux/Types";

const Container = ({ data }) => {
    const [callAccepted, setCallAccepted] = useState(false);
    const [videoCallFailed, setVideoCallFailed] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const dispatch = useDispatch();
    const socket = useSocket();
    const url = config.liveUrl;

    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);

    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerConnectionRef = useRef(null);

    useEffect(() => {
        const initializeWebRTC = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: isVideoOn,
                    audio: !isMuted,
                });
                setLocalStream(stream);

                if (localVideoRef.current) {
                    localVideoRef.current.srcObject = stream;
                }

                const peerConnection = new RTCPeerConnection();
                peerConnectionRef.current = peerConnection;

                // Add local stream tracks to the peer connection
                stream.getTracks().forEach(track => {
                    peerConnection.addTrack(track, stream);
                });

                // Handle incoming remote stream
                peerConnection.ontrack = (event) => {
                    if (remoteVideoRef.current) {
                        remoteVideoRef.current.srcObject = event.streams[0];
                        setRemoteStream(event.streams[0]);
                    }
                };

                // Handle ICE candidates
                peerConnection.onicecandidate = (event) => {
                    if (event.candidate) {
                        socket.emit('ice-candidate', { candidate: event.candidate });
                    }
                };

                // Listen for offer and answer
                socket.on('offer', async (offer) => {
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
                    const answer = await peerConnection.createAnswer();
                    await peerConnection.setLocalDescription(answer);
                    socket.emit('answer', { answer });
                    setCallAccepted(true);
                });

                socket.on('answer', async (answer) => {
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
                    setCallAccepted(true);
                });

                socket.on('ice-candidate', async (candidate) => {
                    await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
                });

                socket.emit('join-room', { roomId: data.roomId });
            } catch (error) {
                console.error("Error initializing WebRTC:", error);
                setVideoCallFailed(true);
            }
        };

        initializeWebRTC();

        return () => {
            if (localStream) {
                localStream.getTracks().forEach(track => track.stop());
            }
            if (peerConnectionRef.current) {
                peerConnectionRef.current.close();
            }
        };
    }, [isVideoOn, isMuted]);

    const endCall = () => {
        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
        }
        if (remoteStream) {
            remoteStream.getTracks().forEach(track => track.stop());
        }
        if (data.callType === "voice") {
            socket.emit("reject-voice-call", { from: data.id });
        } else {
            socket.emit("reject-video-call", { from: data.id });
        }

        socket.emit("end-call", { id: data.to, roomId: data.roomId });

        dispatch({ type: types.END_CALL });

        if (peerConnectionRef.current) {
            peerConnectionRef.current.close();
        }
    };

    const toggleMute = () => {
        setIsMuted(prev => !prev);
        localStream.getAudioTracks().forEach(track => {
            track.enabled = !isMuted;
        });
    };

    const toggleVideo = () => {
        setIsVideoOn(prev => !prev);
        localStream.getVideoTracks().forEach(track => {
            track.enabled = !isVideoOn;
        });
    };

    return (
        <div className='flex lg:h-[100vh] items-center justify-center'>
            <div className='text-white'>
                {videoCallFailed && (
                    <div className="text-red-500 mb-4">Failed to start video call. Switching to voice call.</div>
                )}
                {(callAccepted || data.callType === "video") ? (
                <div className='mb-4 flex items-center justify-center'>
                    <img src={data.profilePic || avatar} alt='avatar' className='rounded-full w-[80px] h-[80px] object-cover' />
                </div>
            ) : null}
                <div className='flex gap-3 items-center justify-center'>
                    <span className='text-3xl'>{`${data.firstName} ${data.lastName}`}</span>
                    <span className='text-lg'>
                        {callAccepted ? "On going call" : "Calling"}
                    </span>
                </div>
                {(callAccepted || data.callType === "audio") ? (
                <div className='my-12'>
                    <img src={data.profilePic || avatar} alt='avatar' className='rounded-full w-[300px] h-[300px] object-cover' />
                </div>
            ) : null}
                <div className='flex items-center justify-center mt-[1rem]'>
                    {callAccepted && data.callType === "video" && (
                        <>
                            <video ref={remoteVideoRef} className='lg:w-[80%] xs:w-full lg:h-[60%]' autoPlay playsInline />
                            <video ref={localVideoRef} className='lg:w-[20%] xs:w-full lg:h-[20%] absolute bottom-0 right-0' autoPlay playsInline muted />
                        </>
                    )}
                </div>
                {!callAccepted && data.callType === "video" && (
                    <div className='flex items-center justify-center mt-[1rem]'>
                        <video ref={localVideoRef} className='lg:w-[80%] xs:w-full lg:h-[60%]' autoPlay playsInline muted />
                    </div>
                )}
                <div className="flex items-center justify-center fixed left-[50%] right-[50%] bottom-[3rem]">
                    <div className='flex items-center gap-[2rem]'>
                        <button
                            onClick={toggleMute}
                            className={`p-2 lg:text-2xl xs:text-[25px] ${isMuted ? 'bg-red-600' : 'bg-green-600'} rounded-full hover:bg-red-800 transition`}
                        >
                            {isMuted ? <MdMicOff className='text-white' /> : <MdMic className='text-white' />}
                        </button>
                        <button
                            onClick={toggleVideo}
                            className={`p-2 lg:text-2xl xs:text-[25px] ${isVideoOn ? 'bg-green-600' : 'bg-red-800'} rounded-full hover:bg-red-800 transition`}
                            disabled={data.callType === "audio"}
                        >
                            {isVideoOn ? <MdVideocam className='text-white' /> : <MdVideocamOff className='text-white' />}
                        </button>
                        <button className='lg:text-2xl xs:text-[25px] p-2 bg-red-600 hover:bg-red-800 transition rounded-full' onClick={endCall}>
                            <MdOutlineCallEnd />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;