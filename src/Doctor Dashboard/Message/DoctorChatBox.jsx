import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDoctor } from '../../Redux/Actions/DoctorActions';
import avatar from '../../assets/avatar.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsCameraVideoFill } from 'react-icons/bs';
import { LiaSearchSolid } from 'react-icons/lia';
import { format } from 'timeago.js';
import { addMessage, getMessages } from './../../Redux/DoctorApi/MessageRequest';
import InputEmoji from 'react-input-emoji';
import { FaArrowLeft } from 'react-icons/fa6';
import { useTheme } from '../Components/ThemeContext';

const ChatBox = ({ chat, currentDoctor, onBack, setSendMessage, receiveMessage, checkOnlineStatus, handleSendMessage }) => {
    const { theme, appearance } = useTheme();

    const dispatch = useDispatch();
    const [doctor, setDoctor] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const scroll = useRef()

    useEffect(() => {
        if(receiveMessage !== null && receiveMessage?.chatId === chat?._id) {
            setMessages([...messages, receiveMessage]);
        }
    }, [receiveMessage])

// fetching data for header
    useEffect(() => {
        if (chat) {
            const userId = chat?.members?.find((id) => id !== currentDoctor);
            const getDoctorData = async () => {
                try {
                    const response = await dispatch(loadDoctor(userId));
                    setDoctor(response.data);
                } catch (error) {
                    console.log(error);
                }
            };

            getDoctorData();
        }
    }, [chat, currentDoctor, dispatch]);

    useEffect(() => {
        if (chat) {
            const fetchMessages = async () => {
                try {
                    const { data } = await getMessages(chat._id);
                    setMessages(data);
                } catch (error) {
                    console.log(error);
                }
            };

            fetchMessages();
        }
    }, [chat]);

    const handleChange = (newMessage) => {
        setNewMessage(newMessage);
    };
 // Handle send message
 const handleSend = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
        const message = {
            senderId: currentDoctor,
            text: newMessage,
            chatId: chat._id
        };

        // Send message to the database
        try {
            const { data } = await addMessage(message);
            setMessages([...messages, data]);
            setNewMessage("");
        } catch (error) {
            console.log(error);
        }

        // Send message to the socket server
        const receiverId = chat.members.find((id) => id !== currentDoctor);
        setSendMessage({...message, receiverId});
    }
};

// Handle key press event
const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleSend(e);
    }
};

const { status } = checkOnlineStatus(chat);

    // Always scroll to the last message
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <div className={`lg:h-[73vh] xs:h-[68vh] ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            {chat ? (
                <>
                    <div className='flex items-center justify-between shadow-lg py-3 lg:px-5 xs:px-2'>
                        <div className='flex items-center gap-[10px]'>
                            <FaArrowLeft className='text-[18px] text-[#22D1EE] font-bold font-Nunito lg:hidden xs:block' onClick={onBack} />
                            <img src={avatar} />
                            <div>
                                <h2 className='text-[14px] font-Nunito font-bold'>{doctor?.firstname} {doctor?.lastname}</h2>
                                <h2 className='text-[#65676B] text-[12px] leading-[16px] font-normal font-Nunito'>{status}</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-[1.5rem] text-[#22D1EE] text-[20px]'>
                            <FaPhoneAlt />
                            <BsCameraVideoFill />
                            <LiaSearchSolid />
                        </div>
                    </div>

                    {/* MESSAGES */}
                    <div className="flex flex-col h-full bg-[var(--cardColor)] rounded-2xl overflow-y-auto" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                        <div className="flex-1 flex flex-col gap-2 lg:p-6 xs:p-2 overflow-auto"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                            {messages.map((message) => (
                               <>
                                <div
                               key={message.id}
                               className={`items-start w-full rounded-[18px] px-3 py-2 max-w-xs flex flex-col gap-2
                                 ${message.senderId === currentDoctor 
                                   ? "self-end"
                                   : ""
                                 }`}
                             >
                              <div className={`items-start w-full rounded-[18px] px-3 py-2 max-w-xs flex flex-col gap-2
                                 ${message.senderId === currentDoctor 
                                   ? "self-end bg-[#22D1EE] rounded-br-none text-white"
                                   : "rounded-bl-none bg-[#E4E6EB] text-black"
                                 }`}>
                                <span className='lg:text-[15px] xs:text-[13px] font-Nunito font-medium'>{message.text}</span>
                              </div>
                               <span className={`text-xs font-Nunito font-normal ${message.senderId === currentDoctor 
                                   ? "self-end"
                                   : "self-start"
                                 }`}>
                                 {format(message.createdAt)}
                               </span>
                             </div>
                               </>
                                ))}
                        </div>

                        <div className={`flex items-center lg:gap-4 lg:p-4 xs:p-4 w-full rounded-2xl self-end z-50 ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            <InputEmoji
                                value={newMessage}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown} 
                                placeholder="Message"
                                className="flex-1 lg:px-4 lg:py-2 rounded-md border-none outline-none font-Nunito font-bold text-sm"
                            />
                            <button onClick={handleSend} className='bg-[#22D1EE] p-2 rounded-[10px]'>Send</button>
                        </div>
                    </div>
                </>
            ) : (
                <div className='flex items-center justify-center h-full'>
                    <p className='text-center text-lg font-Nunito'>Tap on a conversation to start chatting</p>
                </div>
            )}
        </div>
    );
};

export default ChatBox;
