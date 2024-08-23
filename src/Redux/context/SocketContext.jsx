import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { config } from "../Config";
import { addMessage, addNotification, updateContactStatus } from "../Actions/DoctorActions";
import * as types from '../Types'

const SocketContext = createContext(null);

const URL = config.socketUrl;

export const useSocket = () => {
    return useContext(SocketContext);
}

export const SocketProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const doctor = useSelector(state => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);
    const selectedChatData = useSelector((state) => state.createChat.selectedChatData);
    const selectedChatType = useSelector((state) => state.createChat.selectedChatType);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (doctor) {
            const newSocket = io(URL, {
                withCredentials: true,
                query: { userId: doctor?._id }
            });
    
            setSocket(newSocket);
    
            newSocket.on("connect", () => {
                console.log("Connected to socket server");
            });
    
            newSocket.on("receiveMessage", (message) => {
                if (
                    selectedChatType !== undefined && 
                    (selectedChatData._id === message.sender._id || selectedChatData._id === message.recipient._id)
                ) {
                    console.log("Message received:", message);
                    dispatch(addMessage(message));
                }
            });

            const showNotification = (title, body) => {
                // Example implementation using react-toastify
                toast(`${title}: ${body}`);
            };

            newSocket.on("receiveNotification", (notification) => {
                console.log("Notification received:", notification);
                // Dispatch action or update state here
                dispatch(addNotification(notification));
            });
    
            // Listen for user status changes
            newSocket.on("userStatus", ({ userId, status }) => {
                dispatch(updateContactStatus(userId, status));
            });

            newSocket.on("incoming-voice-call", ({ from, roomId, callType }) => {
                // Handle incoming voice call
                dispatch({
                    type: types.SET_INCOMING_VOICE_CALL,
                    incomingVoiceCall: { ...from, roomId, callType}
                });
            });

            newSocket.on("incoming-video-call", ({ from, roomId, callType }) => {
                // Handle incoming video call
                dispatch({
                    type: types.SET_INCOMING_VIDEO_CALL,
                    incomingVideoCall: { ...from, roomId, callType },
                });
            });

            newSocket.on("accept-incoming-call", () => {
                setCallAccepted(true);
            });
    
            newSocket.on("voice-call-rejected", () => {
                // Handle voice call rejection
                dispatch({ type: types.END_CALL });
            });
    
            newSocket.on("video-call-rejected", () => {
                // Handle video call rejection
                dispatch({ type: types.END_CALL });
            });
    
            return () => {
                if (newSocket) {
                    newSocket.disconnect();
                }
            };
        }
    }, [doctor, selectedChatData, selectedChatType, dispatch]);    

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};