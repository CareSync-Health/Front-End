import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { config } from "../Config";
import { addMessage, updateContactStatus } from "../Actions/DoctorActions";

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
    
            // Listen for user status changes
            newSocket.on("userStatus", ({ userId, status }) => {
                dispatch(updateContactStatus(userId, status));
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