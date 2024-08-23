import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineCallEnd } from 'react-icons/md';
import * as types from '../../../../Redux/Types';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../../../assets/avatar.png';
import { useSocket } from '@/Redux/context/SocketContext';
import axios from 'axios';
import { config } from '@/Redux/Config';
// import phoneCalling from '../../../../assets/phone-calling.mp3'


const Container = ({ data }) => {
    const [callAccepted, setCallAccepted] = useState(false);
    const [deviceError, setDeviceError] = useState(null);
    const [videoCallFailed, setVideoCallFailed] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);
    const dispatch = useDispatch();
    const socket = useSocket();
    const url = config.liveUrl;
    const doctor = useSelector(state => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);
    const [token, setToken] = useState(undefined);
    const [zgVar, setZgVar] = useState(undefined);
    const [localStream, setLocalStream] = useState(undefined);
    const [publishStream, setPublishStream] = useState(undefined);

    const localAudioRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const audioRef = useRef(null); // Reference for the audio element


    useEffect(() => {
        const getToken = async () => {
            try {
                const { data: { token: returnedToken } } = await axios.get(`${url}/doctor/generate-token/${doctor._id}`);
                setToken(returnedToken);
            } catch (error) {
                console.log("Error fetching token:", error);
            }
        };
        getToken();
    }, [callAccepted]);

    useEffect(() => {
        const checkDeviceAvailability = async () => {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const hasVideo = devices.some(device => device.kind === 'videoinput');
                const hasAudio = devices.some(device => device.kind === 'audioinput');
                if (!hasVideo || !hasAudio) {
                    throw new Error("Required media devices are not available.");
                }
            } catch (error) {
                setDeviceError("Your device does not have the required media devices.");
            }
        };

        checkDeviceAvailability();
    }, []);

    useEffect(() => {
        const startCall = async () => {
            if (deviceError) return;

            import("zego-express-engine-webrtc").then(async ({ ZegoExpressEngine }) => {
                const zg = new ZegoExpressEngine(
                    parseInt("1786986022"), // Your appId
                    "c72d4e60a810f1922345a17b9044f399" // Your serverSecret or server URL
                );

                setZgVar(zg);

                zg.on("roomStateUpdate", async (roomId, updateType, streamList, extendedData) => {
                    if (updateType === "ADD") {
                        if (remoteVideoRef.current) {
                            const vd = document.createElement(data.callType === "video" ? "video" : "audio");
                            vd.id = streamList[0].streamID;
                            vd.autoplay = true;
                            vd.playsInline = true;
                            vd.muted = false;

                            remoteVideoRef.current.appendChild(vd);

                            try {
                                const stream = await zg.startPlayingStream(streamList[0].streamID, {
                                    audio: true,
                                    video: data.callType === "video",
                                });
                                vd.srcObject = stream;
                            } catch (error) {
                                console.error("Error starting stream:", error);
                                setDeviceError("Failed to start video stream. Your device might be in use elsewhere.");
                                setVideoCallFailed(true); // Mark video call as failed
                            }
                        } else {
                            console.error("Element with ref 'remoteVideoRef' not found.");
                        }
                    } else if (updateType === "DELETE" && zg && localStream && streamList[0].streamID) {
                        zg.destroyStream(localStream);
                        zg.stopPublishingStream(streamList[0].streamID);
                        zg.logoutRoom(data.roomId.toString());
                        dispatch({ type: types.END_CALL });
                        clearInterval(timerInterval); // Stop the timer when the call ends
                    }
                });

                try {
                    await zg.loginRoom(data.roomId.toString(),
                        token,
                        { userID: doctor._id.toString(), userName: `${doctor?.firstName} ${doctor?.lastName}` },
                        { userUpdate: true }
                    );

                    const localStream = await zg.createStream({
                        camera: {
                            audio: true,
                            video: data.callType === "video",
                        },
                    });

                    if (localAudioRef.current) {
                        const videoElement = document.createElement(data.callType === "video" ? "video" : "audio");
                        videoElement.id = "video-local-zego";
                        videoElement.className = "h-28 w-32";
                        videoElement.autoplay = true;
                        videoElement.muted = false;
                        videoElement.playsInline = true;

                        localAudioRef.current.appendChild(videoElement);
                        videoElement.srcObject = localStream;
                    } else {
                        console.error("Element with ref 'localAudioRef' not found.");
                    }

                    const streamID = '555' + Date.now();
                    setPublishStream(streamID);
                    setLocalStream(localStream);
                    await zg.startPublishingStream(streamID, localStream);
                } catch (error) {
                    console.error("Error starting call:", error);
                    setDeviceError("Failed to access media devices. Your device might be in use elsewhere.");
                    setVideoCallFailed(true); // Mark video call as failed
                }
            });
        };

        if (token) {
            startCall();
        }
    }, [token, deviceError]);

    useEffect(() => {
        if (videoCallFailed) {
            // Handle video call failure: switch to voice call
            socket.emit("reject-video-call", { from: data.id });
            dispatch({ type: types.END_CALL });
            setVideoCallFailed(false);
            // Initiate voice call
            socket.emit("start-voice-call", { to: data.id, from: doctor._id });
        }
    }, [videoCallFailed]);

    useEffect(() => {
        if (callAccepted) {
            const interval = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
            }, 1000);
            setTimerInterval(interval);
        }

        // Stop the audio when the call is accepted
    }, [callAccepted]);

    const endCall = () => {
        if (zgVar && localStream && publishStream) {
            zgVar.destroyStream(localStream);
            zgVar.stopPublishingStream(publishStream);
            zgVar.logoutRoom(data.roomId.toString());
        }
        if (data.callType === "voice") {
            socket.emit("reject-voice-call", { from: data.id });
        } else {
            socket.emit("reject-video-call", { from: data.id });
        }
        dispatch({ type: types.END_CALL });
        socket.emit("end-call", { id: data.to });
        clearInterval(timerInterval); // Stop the timer when the call ends
    };

    useEffect(() => {
        if (socket) {
            socket.on("accept-call", () => {
                setCallAccepted(true);
            });

            return () => {
                socket.off("accept-call");
            };
        }
    }, [socket]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className='border-tremor-content-emphasis border-l w-full flex flex-col h-[100vh] overflow-hidden items-center justify-center text-white'>
            {deviceError && (
                <div className="text-red-500 mb-4">{deviceError}</div>
            )}
            <div className='flex flex-col gap-3 items-center'>
                <span className='text-3xl'>{`${data.firstName} ${data.lastName}`}</span>
                <span className='text-lg'>
                    {callAccepted && data.callType !== "video" ? `On going call - ${formatTime(elapsedTime)}` : "Calling"}
                </span>
            </div>
            {/* {callAccepted ? (
                <></>
            ) : (<>
                <audio src={phoneCalling} autoPlay loop />
            </>)} */}

            {(callAccepted || data.callType === "audio") ? (
                <div className='my-12'>
                    <img src={data.profilePic || avatar} alt='avatar' className='rounded-full w-[300px] h-[300px] object-cover' />
                </div>
            ) : null}
           <div className='my-5 z-10' ref={remoteVideoRef}></div>
           <div className="" width={1000} height={1000} ref={localAudioRef}></div>
           <div className="h-16 w-16 bg-red-600 flex items-center justify-center rounded-full z-20">
                <MdOutlineCallEnd className='text-3xl cursor-pointer' onClick={endCall} />
            </div>
        </div>
    );
};

export default Container;