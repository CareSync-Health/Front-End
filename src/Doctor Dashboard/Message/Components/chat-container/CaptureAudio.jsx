import { config } from '@/Redux/Config';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { FaMicrophone, FaPauseCircle, FaPlay, FaStop, FaTrash } from 'react-icons/fa'
import { FaPause } from "react-icons/fa6";
import { MdSend } from 'react-icons/md'
import { useSelector } from 'react-redux';
import WaveSurfer from 'wavesurfer.js'

const CaptureAudio = ({ hide }) => {

    const doctor = useSelector(state => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);
    const { selectedChatData, selectedChatType } = useSelector((state) => state.createChat);
    const { selectedChatMessages } = useSelector((state) => state.createChat);

    const [isRecording, setIsRecording] = useState(false)
    const [recordedAudio, setRecordedAudio] = useState(null)
    const [waveForm, setWaveForm] = useState(null)
    const [recordingDuration, setRecordingDuration] = useState(0)
    const [currentPlayBackTime, setCurrentPlayBackTime] = useState(0)
    const [totalDuration, setTotalDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [renderedAudio, setRenderedAudio] = useState(null)

    const audioRef = useRef(null)
    const mediaRecorderRef = useRef(null)
    const waveFormRef = useRef(null)

    useEffect(() => {
        let interval;
        if (isRecording) {
            interval = setInterval(() => {
                setRecordingDuration((prevDuration) => {
                    setTotalDuration(prevDuration + 1);
                    return prevDuration + 1;
                });
            }, 1000)
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRecording]);

    useEffect(() => {
        const waveSurfer = WaveSurfer.create({
            container: waveFormRef.current,
            waveColor: '#63c2de',
            progressColor: '#3490dc',
            cursorColor: '#7ae3c3',
            barWidth: 2,
            height: 30,
            responsive: true
        });
        setWaveForm(waveSurfer);

        waveSurfer.on("finish", () => {
            setIsPlaying(false)
        })

        return () => {
            waveSurfer.destroy();
        }
    }, []);

    useEffect(() => {
        if (waveForm) handleStartRecording();
    }, [waveForm])

    // Modified handleStartRecording function
    const handleStartRecording = () => {
        setRecordingDuration(0);
        setCurrentPlayBackTime(0);
        setTotalDuration(0);
        setIsRecording(true);
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioRef.current.srcObject = stream;

            const chunks = [];
            mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
                const audioURL = URL.createObjectURL(blob);
                const audio = new Audio(audioURL);
                setRecordedAudio(audio);

                waveForm.load(audioURL);
            };

            mediaRecorder.start();

        }).catch(error => {
            console.log("Error accessing microphone: ", error);
        });
    }

    const handleStopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            waveForm.stop();

            const audioChunks = [];
            mediaRecorderRef.current.addEventListener("dataavailable", (event) => {
                audioChunks.push(event.data);
            });

            mediaRecorderRef.current.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
                const audioFile = new File([audioBlob], "recording.mp3");
                setRenderedAudio(audioFile);
            })
        }
    }

    useEffect(() => {
        if (recordedAudio) {
            const updatePlayBackTime = () => {
                setCurrentPlayBackTime(recordedAudio.currentTime);
            };
            recordedAudio.addEventListener('timeupdate', updatePlayBackTime);

            return () => {
                recordedAudio.removeEventListener('timeupdate', updatePlayBackTime);
            };
        };
    }, [recordedAudio]);


    const handlePlayRecording = () => {
        if (recordedAudio) {
            waveForm.stop();
            waveForm.play();
            recordedAudio.play();
            setIsPlaying(true);
        }
    }

    // Modified handlePauseRecording function
    const handlePauseRecording = () => {
        waveForm.stop();
        recordedAudio.pause();
        setIsPlaying(false);
    };

    const url = config.liveUrl

    const sendRecording = async () => {
        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem('token');

            const formData = new FormData();
            formData.append('audio', renderedAudio);
            formData.append('senderId', doctor?._id);
            formData.append('recipientId', selectedChatData._id);
            formData.append('messageType', 'file');

            // Make the POST request to upload the file
            const { data } = await axios.post(`${url}/messages/upload-audio`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (data.status === 'Ok') {
                const newMessage = {
                    sender: doctor?._id,
                    content: undefined,
                    recipient: selectedChatData._id,
                    messageType: 'file',
                    fileUrl: data.data.fileUrl,
                };

                // Emit the message via socket
                socket.emit('sendMessage', newMessage);

                // Update the Redux state with the new message
                dispatch(addMessage(newMessage));
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Error handling attachment change:', error);
        }
    }


    const formatTime = (time) => {
        if (isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }


    return (
        <div className='w-full lg:ms-0 xs:ms-[-0.5rem] rounded-full py-1 px-4 focus:outline-none focus:ring-2 bg-[#fff] focus:ring-[#22D1EE] text-[#000] font-Nunito font-normal text-[16px] flex text-2xl justify-between items-center'>
            <div className=''>
                <FaTrash className='text-[#000] cursor-pointer' onClick={() => hide()} />
            </div>
            <div className='text-black flex gap-3 justify-start items-center'>
                {isRecording ? (
                    // <div className='text-red-500 animate-pulse w-60 text-center'>Recording <span>{recordingDuration}s</span></div>
                    <div></div>
                ) : (
                    <div>
                        {recordedAudio && (
                            <>
                                {!isPlaying ? (
                                    <FaPlay onClick={handlePlayRecording} className='cursor-pointer text-[#000]' />
                                ) : (
                                    <FaPause onClick={handlePauseRecording} className='cursor-pointer text-[#000]' />
                                )}
                            </>
                        )}
                    </div>
                )}
                <div className='lg:w-60 xs:w-32' ref={waveFormRef} hidden={isRecording} />
                {recordedAudio && isPlaying && (
                    <span className='text-[16px] font-Nunito font-medium'>{formatTime(currentPlayBackTime)}</span>
                )}
                {recordedAudio && !isPlaying && (
                    <span className='text-[16px] font-Nunito font-medium'>{formatTime(totalDuration)}</span>
                )}
                {!recordedAudio && !isPlaying && (
                    <div className='flex items-center gap-[8px]'>
                        <div class="w-2 h-2 bg-red-400 rounded-full animate-blink"></div>
                        <span className='text-[16px] font-Nunito font-medium'>{formatTime(totalDuration)}</span>
                    </div>
                )}
                <audio ref={audioRef} hidden />
                <div className="">
                    {!isRecording ? (
                        <FaMicrophone className='text-red-500' onClick={handleStartRecording} />
                    ) : (
                        <FaPause className='text-red-500 cursor-pointer' onClick={handleStopRecording} />
                    )}
                </div>
                <div>
                    <MdSend className='text-[#000] cursor-pointer text-[20px]' title='Send' onClick={sendRecording} />
                </div>
            </div>

        </div>
    )
}

export default CaptureAudio