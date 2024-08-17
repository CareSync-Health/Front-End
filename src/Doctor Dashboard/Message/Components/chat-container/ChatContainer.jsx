import React, { useEffect, useRef, useState } from 'react';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaArrowLeft, FaPhoneAlt } from 'react-icons/fa';
import avatar from '../../../../assets/avatar.png';
import { LiaSearchSolid } from 'react-icons/lia';
import { useTheme } from '../../../Components/ThemeContext';
import { GrFormAttachment } from "react-icons/gr";
import { LuCamera } from "react-icons/lu";
import { RiEmojiStickerLine } from "react-icons/ri";
import { AiFillAudio } from "react-icons/ai";
import { IoCloseSharp, IoSend } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import { closeChat, setSelectedChatMessages } from '../../../../Redux/Actions/DoctorActions';
import { useSocket } from '@/Redux/context/SocketContext';
import moment from 'moment';
import axios from 'axios';
import { config } from '@/Redux/Config';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundDown } from 'react-icons/io';
import { FiDownload } from 'react-icons/fi';

const ChatContainer = () => {
    const emojiRef = useRef();
    const fileInputRef = useRef();
    const scrollRef = useRef();
    const socket = useSocket();
    const searchRef = useRef(null);
    const [showSearch, setShowSearch] = useState(true);
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const { theme, appearance } = useTheme();
    const [message, setMessage] = useState("");
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
    const [typing, setTyping] = useState(false);
    const dispatch = useDispatch();
    const { selectedChatData, selectedChatType } = useSelector((state) => state.createChat);
    const { selectedChatMessages } = useSelector((state) => state.createChat);
    const doctor = useSelector(state => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);
    const [isSocketConnected, setIsSocketConnected] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);


    const handleCloseChat = () => {
        dispatch(closeChat());
    };


    const handleToggleSearch = () => {
        setShowSearch((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setShowSearch(true);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update search query state
    };

    const filterMessages = (messages, query) => {
        if (!query) {
            return messages; // If no query, return all messages
        }
        return messages.filter(
            (message) =>
                message.content?.toLowerCase().includes(query.toLowerCase())
        );
    };

    const filteredMessages = filterMessages(selectedChatMessages, searchQuery); // Filter messages

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearch(true);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (emojiRef.current && !emojiRef.current.contains(event.target)) {
                setEmojiPickerOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [emojiRef]);

    useEffect(() => {
        if (socket) {
            socket.on('connect', () => {
                setIsSocketConnected(true);
            });

            socket.on('disconnect', () => {
                setIsSocketConnected(false);
            });

            socket.on('receiveMessage', (message) => {
                dispatch(setSelectedChatMessages([...selectedChatMessages, message]));
            });

            return () => {
                socket.off('connect');
                socket.off('disconnect');
                socket.off('receiveMessage');
            };
        }
    }, [socket, selectedChatMessages, dispatch]);

    const fetchMessages = async (senderId, recipientId) => {
        try {
            const { data } = await axios.get(`${config.liveUrl}/messages/${senderId}/${recipientId}`);
            if (data.status === 'Ok') {
                dispatch(setSelectedChatMessages(data.data));
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (selectedChatData && doctor) {
            fetchMessages(doctor?._id, selectedChatData._id);
        }
    }, [selectedChatData, doctor]);

    const handleSendMessage = async () => {
        if (isSocketConnected && message.trim() !== "") {
            socket.emit("sendMessage", {
                sender: doctor?._id,
                content: message.trim(),
                recipient: selectedChatData._id,
                messageType: "text",
                fileUrl: undefined,
            });
            setMessage("");
            setTyping(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleAttachmentClick = () => {
        fileInputRef.current?.click();
    };

    const formDataToObject = (formData) => {
        const obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        return obj;
    };

    const url = config.liveUrl;

    const handleAttachmentChange = async (event) => {
        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem('token');
            const file = event.target.files[0];

            if (file) {
                // Create a FileReader to convert the file to base64
                const reader = new FileReader();

                reader.onloadend = async () => {
                    const base64String = reader.result.split(',')[1]; // Extract base64 data

                    // Create FormData and append base64 string
                    const formData = new FormData();
                    formData.append('file', base64String); // Append file directly
                    formData.append('senderId', doctor?._id);
                    formData.append('recipientId', selectedChatData._id);
                    formData.append('messageType', 'file');

                    // Log the FormData content for debugging
                    console.log("FormData to be sent:", formDataToObject(formData));

                    // Make the POST request to upload the file
                    const { data } = await axios.post(`${url}/messages/upload-file`, formData, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    // Log the response from the server
                    console.log("File upload response:", data);

                    if (data.status === 'Ok') {
                        // if (selectedChatType === 'contact') {
                        socket.emit('sendMessage', {
                            sender: doctor?._id,  // Make sure this is set to the correct sender ID
                            content: undefined,
                            recipient: selectedChatData._id,  // Make sure this is set to the correct recipient ID
                            messageType: 'file',
                            fileUrl: data.data.fileUrl,
                        });

                        // // Emit the message through socket
                        // socket.emit('sendMessage', newMessage);

                        // // Update the local state directly
                        // dispatch(setSelectedChatMessages([...selectedChatMessages, newMessage]));
                        // }
                    } else {
                        throw new Error(data.error);
                    }
                };

                // Start reading the file as a data URL
                reader.readAsDataURL(file);
            }
        } catch (error) {
            console.error('Error handling attachment change:', error);
        }
    };

    const checkIfImage = (filePath) => {
        const imageRegex = /\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg|ico|heic|heif)$/i;
        return imageRegex.test(filePath);
    };

    const downloadFile = async (fileUrl) => {
        const response = await axios.get(fileUrl, { responseType: "blob" });
    
        const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = urlBlob;
        
        // Extract file name from the URL or set a default name
        const fileName = fileUrl.split('/').pop() || 'downloaded-file';
        link.setAttribute("download", fileName);
        
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(urlBlob);
    };

    useEffect(() => {
        if (message.trim() !== "") {
            setTyping(true);
        } else {
            setTyping(false);
        }
    }, [message]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedChatMessages]);

    const groupMessagesByDate = (messages) => {
        const groups = {};
        messages.forEach((message) => {
            const date = moment(message.timestamp || message.createdAt).startOf('day').format('YYYY-MM-DD');
            if (!groups[date]) groups[date] = [];
            groups[date].push(message);
        });
        return groups;
    };

    const getDisplayTimestamp = (messageDate) => {
        const now = moment();
        const date = moment(messageDate);

        if (date.isSame(now, 'day')) return 'Today';
        if (date.isSame(now.subtract(1, 'day'), 'day')) return 'Yesterday';
        return date.format('MMMM D, YYYY');
    };

    const groupedMessages = groupMessagesByDate(selectedChatMessages || []);

    return (
        <div className='h-screen w-full flex flex-col'>
            <div className='flex items-center justify-between shadow-2xl border-b-2 py-3 lg:px-3 xs:px-2'>
                {/* HEADER */}
                {showSearch ? (
                    <div className='flex items-center gap-[1rem]'>
                        <FaArrowLeft className='text-[18px] text-[#22D1EE] font-bold font-Nunito xs:block cursor-pointer' onClick={handleCloseChat} />
                        <Link to={selectedChatType === "contact" && `/view_doctor_profile/${selectedChatData._id}`}>
                            <div className='flex items-center gap-[10px]'>
                                <img src={selectedChatData?.avatar || avatar} alt={`${selectedChatData?.firstName} ${selectedChatData?.lastName}`} className='w-[40px] rounded-full' />
                                <div>
                                    <h2 className='text-[14px] font-Nunito font-bold capitalize'>
                                        {selectedChatType === "contact" && `${selectedChatData?.firstName} ${selectedChatData?.lastName}`}
                                    </h2>
                                    <h2 className='text-[#65676B] text-[12px] leading-[16px] font-normal font-Nunito'>
                                        {selectedChatType === "contact" && `${selectedChatData?.profession}`}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                ) : (
                    <div className='bg-white rounded-full w-[50%]' ref={searchRef}>
                        <input
                            type="text"
                            className='bg-transparent text-[14px] py-1.5 px-2 outline-none rounded-full w-[380px] font-Nunito font-normal text-black'
                            placeholder='Search Message'
                            value={searchQuery} // Set the input value to the search query
                            onChange={handleSearchChange} // Update the search query state
                        />
                    </div>
                )
                }

                <div className='flex items-center gap-[1.5rem] text-[#22D1EE] text-[20px]'>
                    <FaPhoneAlt />
                    <BsCameraVideoFill />
                    <LiaSearchSolid onClick={handleToggleSearch} className='cursor-pointer' />
                </div>
            </div>

            {/* MESSAGES */}
            <div className={`flex flex-col h-full overflow-y-auto z-50 px-[10px] ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : 'text-gray-800'}`}>
                <div className="flex-1 flex flex-col gap-2 py-6 px-2 overflow-y-auto" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                    {Object.keys(groupMessagesByDate(filteredMessages)).map((date) => (
                        <div key={date} className="flex flex-col gap-2">
                            <div className='text-center text-gray-400 text-xs font-nunito py-1'>
                                {getDisplayTimestamp(date)}
                            </div>
                            {groupMessagesByDate(filteredMessages)[date].map((message) => (
                                <>
                                    <div key={message._id} ref={scrollRef} className={`max-w-xs flex ${message.sender._id === doctor?._id ? 'self-end' : ''}`}>
                                        <div className={`rounded-[18px] ${message.sender._id === doctor?._id ? 'bg-[#22D1EE] rounded-br-none text-white' : 'self-end rounded-bl-none bg-[#E4E6EB] text-black'}`}>
                                            {message.messageType === "file" ? (
                                                checkIfImage(message.fileUrl) ? (
                                                    <>
                                                        <div className='p-2' onClick={() => { setShowImage(true); setImageUrl(message.fileUrl) }}>
                                                            <img src={message.fileUrl} alt="Sent file" className="rounded-lg" height={200} width={200} />
                                                        </div>
                                                    </>
                                                ) : (
                                                    <a href={message.fileUrl} target="_blank" rel="noopener noreferrer" className="text-[#f1f1f1] underline">
                                                        Open File
                                                    </a>
                                                )
                                            ) : (
                                                <div className='p-3'>
                                                    <p>{message.content}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <span className={`text-xs font-Nunito font-medium text-gray-500 ${message.sender._id === doctor?._id ? "text-right" : ""}`}>
                                        {moment(message.timestamp || message.createdAt).format('LT')}
                                    </span>
                                </>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {
                showImage && (
                    <div className='fixed z-[1000] top-0 left-0 h-[100vh] w-[100vw] flex items-center justify-center backdrop-blur-lg flex-col'>
                        <div>
                           <div className='flex items-center justify-center'>
                           <img src={imageUrl} className='lg:h-[80vh] lg:w-full xs:w-[95%] xs:h-[60vh] bg-cover' />
                           </div>
                            <div className='flex gap-5 fixed top-0 right-0 mt-5 px-5'>
                                <button className='bg-black/20 p-3 text-2xl rounded-full hover:bg-black/50 cursor-pointer transition-all duration-300' onClick={() => downloadFile(imageUrl)}>
                                    <FiDownload />
                                </button>
                                <button className='bg-black/20 p-3 text-2xl rounded-full hover:bg-black/50 cursor-pointer transition-all duration-300' onClick={() => { setShowImage(false); setImageUrl(null) }}>
                                    <IoCloseSharp />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
            {/* INPUT */}
            <div className='w-full py-3 xs:px-[20px] flex items-center gap-[15px]'>
                <LuCamera onClick={handleAttachmentClick} className="cursor-pointer text-[25px]" />
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff,.webp,.svg,.ico,.heic,.heif"
                    ref={fileInputRef}
                    onChange={handleAttachmentChange}
                    style={{ display: 'none' }}
                />
                <RiEmojiStickerLine onClick={() => setEmojiPickerOpen(!emojiPickerOpen)} className='cursor-pointer text-[25px]' />
                <AiFillAudio className='cursor-pointer text-[25px]' />
                {emojiPickerOpen && (
                    <div ref={emojiRef} className="absolute bottom-[60px] z-50">
                        <EmojiPicker
                            onEmojiClick={(event, emojiObject) => setMessage(message + emojiObject.emoji)}
                            theme={theme === 'dark' ? 'dark' : 'light'}
                        />
                    </div>
                )}
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#22D1EE] text-[#000] font-Nunito font-normal text-[16px]"
                    placeholder="Type a message..."
                />
                <IoSend onClick={handleSendMessage} className='cursor-pointer text-[25px]' />
            </div>

        </div>
    );
};

export default ChatContainer;
