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

const ChatBox = ({ chat, currentDoctor, onBack, setSendMessage, receiveMessage, checkOnlineStatus }) => {
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

    const handleSend = async (e) => {
        e.preventDefault();
        const message = {
            senderId: currentDoctor,
            text: newMessage,
            chatId: chat._id
        }

        // send message to database
        try {
            const {data} = await addMessage(message);
            setMessages([...messages, data])
            setNewMessage("")

        } catch (error) {
            console.log(error)
        }

        // send message to socket server
        const receiverId = chat.members.find((id) => id !== currentDoctor);
        setSendMessage({...message, receiverId})
    }

    // Always scroll to the last message
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <div className='lg:h-[73vh] xs:h-[62vh]'>
            {chat ? (
                <>
                    <div className='flex items-center justify-between shadow-lg py-3 lg:px-5 xs:px-2'>
                        <div className='flex items-center gap-[10px]'>
                            <FaArrowLeft className='text-[18px] text-[#22D1EE] font-bold font-Nunito lg:hidden xs:block' onClick={onBack} />
                            <img src={avatar} />
                            <div>
                                <h2 className='text-[14px] font-Nunito font-bold'>{doctor?.firstname} {doctor?.lastname}</h2>
                                <h2 className='text-[#65676B] text-[12px] leading-[16px] font-normal font-Nunito'>{checkOnlineStatus? "Online": "Offline"}</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-[1.5rem] text-[#22D1EE] text-[20px]'>
                            <FaPhoneAlt />
                            <BsCameraVideoFill />
                            <LiaSearchSolid />
                        </div>
                    </div>

                    {/* MESSAGES */}
                    <div className="flex flex-col h-full bg-[var(--cardColor)] rounded-2xl">
                        <div className="flex-1 flex flex-col gap-2 p-6 overflow-auto">
                            {messages.map((message) => (
                                <div ref={scroll} className={`bg-[var(--buttonBg)] text-white p-3.5 rounded-2xl w-fit max-w-xs flex flex-col gap-2 ${message.senderId === currentDoctor ? "self-end rounded-br-none bg-gradient-to-r from-[#24e4f0] to-[#358ff9]" : "rounded-bl-none"}`}>
                                    <span>{message.text}</span>
                                    <span className="text-xs text-[var(--textColor)] self-end">{format(message.createdAt)}</span>
                                </div>
                                ))}
                        </div>

                        <div className="flex items-center gap-4 p-4 w-full rounded-2xl self-end">
                            <InputEmoji
                                value={newMessage}
                                onChange={handleChange}
                                placeholder="Message"
                                className="flex-1 px-4 py-2 rounded-md border-none outline-none font-Nunito font-bold text-sm"
                            />
                            <button onClick={handleSend}>Send</button>
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