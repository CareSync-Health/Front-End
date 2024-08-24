import React, { useEffect, useRef, useState } from 'react';
import { MdMic, MdMicOff, MdOutlineCallEnd, MdVideocam, MdVideocamOff } from 'react-icons/md';
import * as types from '../../../../Redux/Types';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../../../assets/avatar.png';
import { useSocket } from '@/Redux/context/SocketContext';
import axios from 'axios';
import { config } from '@/Redux/Config';
import { v4 as uuidv4 } from 'uuid';

const Container = ({ data }) => {
    const [callAccepted, setCallAccepted] = useState(false);
    const [videoCallFailed, setVideoCallFailed] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const dispatch = useDispatch();
    const socket = useSocket();
    const url = config.liveUrl;
    const doctor = useSelector(state => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);

    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);

    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);

    useEffect(() => {
        const initializeWebRTC = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: isVideoOn,
                    audio: !isMuted
                });
                setLocalStream(stream);

                if (localVideoRef.current) {
                    localVideoRef.current.srcObject = stream;
                }
                // Set up peer connection
                const peerConnection = new RTCPeerConnection();
                peerConnection.addStream(stream);

                peerConnection.ontrack = (event) => {
                    if (remoteVideoRef.current) {
                        remoteVideoRef.current.srcObject = event.streams[0];
                        setRemoteStream(event.streams[0]);
                    }
                };

                 peerConnection.onicecandidate = (event) => {
                    if (event.candidate) {
                        socket.emit('ice-candidate', { candidate: event.candidate });
                    }
                };

                socket.on('offer', async (offer) => {
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
                    const answer = await peerConnection.createAnswer();
                    await peerConnection.setLocalDescription(answer);
                    socket.emit('answer', { answer });
                });

                socket.on('answer', async (answer) => {
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
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
        };
    }, [isVideoOn, isMuted]);



    useEffect(() => {
        if (videoCallFailed) {
            // Handle video call failure: switch to voice call
            socket.emit("reject-video-call", { from: data.id });
            // dispatch({ type: types.END_CALL });
            setVideoCallFailed(true);
            // Initiate voice call
            socket.emit("start-voice-call", { to: data.id, from: doctor._id });
        }
    }, [videoCallFailed]);

    const endCall = () => {
        if (data.callType === "voice") {
            socket.emit("reject-voice-call", { from: data.id });
        } else {
            socket.emit("reject-video-call", { from: data.id });
        }

        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
        }
        if (remoteStream) {
            remoteStream.getTracks().forEach(track => track.stop());
        }

        dispatch({ type: types.END_CALL });
        socket.emit("end-call", { id: data.to, roomId: data.roomId });
    };

    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    const toggleVideo = () => {
        setIsVideoOn(prev => !prev);
    };

    socket.on("offer", async (offer) => {
        setCallAccepted(true);
        await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        socket.emit('answer', { answer });
    });
    
    // useEffect(() => {
    //     if (socket) {

    //         return () => {
    //             socket.off("answer");
    //         };
    //     }
    // }, [socket]);

    return (
        <div className='flex lg:h-[100vh] items-center justify-center'>
            <div className=' text-white'>
            {videoCallFailed && (
                <div className="text-red-500 mb-4">Failed to start video call. Switching to voice call.</div>
            )}
            {(callAccepted || data.callType === "video") ? (
                <div className='mb-4 flex items-center justify-center lg:mt-[20rem] xs:mt-[3rem]'>
                    <img src={data.profilePic || avatar} alt='avatar' className='rounded-full w-[80px] h-[80px] object-cover' />
                </div>
            ) : null}
            <div className='flex gap-3 items-center justify-center'>
                <span className='text-3xl'>{`${data.firstName} ${data.lastName}`}</span>
                <span className='text-lg'>
                    {callAccepted ? "On going call Calling" : ""}
                </span>
            </div>
            {(callAccepted || data.callType === "audio") ? (
                <div className='my-12'>
                    <img src={data.profilePic || avatar} alt='avatar' className='rounded-full w-[300px] h-[300px] object-cover' />
                </div>
            ) : null}
            {(callAccepted || data.callType === "video") ? (
                <div className='flex items-center justify-center mt-[2rem]'>
                    <video ref={localVideoRef} className='lg:w-[80%] xs:w-full lg:h-[60%]' autoPlay playsInline />
                </div>
            ) : null}
             {(callAccepted || data.callType === "video") ? (
                <div className='flex items-center justify-center mt-[2rem]'>
                    <video ref={remoteVideoRef} className='lg:w-[80%] xs:w-full lg:h-[60%]' autoPlay playsInline />
                </div>
            ) : null}

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
                    <MdOutlineCallEnd  />
                </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Container;