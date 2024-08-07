import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../Components/ThemeContext';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Conversation from './DoctorConversation';
import { useSelector } from 'react-redux';
import { userChats } from '../../Redux/DoctorApi/ChatRequest';
import ChatBox from './DoctorChatBox';
import { io } from 'socket.io-client';

const DoctorChat = () => {
  const { theme, appearance } = useTheme();
  const doctor = useSelector((state) => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineDoctors, setOnlineDoctors] = useState([])
  const [sendMessage, setSendMessage] = useState(null)
  const [receiveMessage, setReceiveMessage] = useState(null)
  const [messages, setMessages] = useState([])
  const socket = useRef();

//   send message to the socket server
  useEffect(() => {
    if(sendMessage !== null) {
        socket.current.emit('send-message', sendMessage)
    }
  }, [sendMessage])

  
  useEffect(() => {
      socket.current = io('https://socket-xey1.onrender.com');
    //   socket.current = io('http://localhost:8800');
      socket.current.emit("new-doctor-add", doctor.id)
      socket.current.on("get-doctors", (doctors) => {
          setOnlineDoctors(doctors)
        })
  }, [doctor])
  
  //   receiver message from the socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
        setReceiveMessage(data);
    })
  }, [])
  
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(doctor.id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (doctor?.id) {
      getChats();
    }
  }, [doctor]);

  const checkOnlineStatus = (chat) => {
    if (!chat || !chat.members || !Array.isArray(chat.members)) {
      return { status: 'Offline' };
    }
  
    const chatMember = chat.members.find((member) => member !== doctor.id);
  
    if (!chatMember) {
      return { status: 'Offline' };
    }
  
    const onlineDoctor = onlineDoctors.find((doc) => doc.doctorId === chatMember);
  
    if (!onlineDoctor) {
      return { status: 'Offline' };
    }
  
    // Validate `lastOnline` is defined and a valid date
    if (!onlineDoctor.lastOnline) {
      return { status: 'Offline' };
    }
  
    const lastOnline = new Date(onlineDoctor.lastOnline);
  
    // Ensure lastOnline is a valid date
    if (isNaN(lastOnline.getTime())) {
      return { status: 'Offline' };
    }
  
    const now = new Date();
    const diff = (now - lastOnline) / (1000 * 60); // Difference in minutes
  
    if (diff < 30) {
      return { status: 'Online' };
    } else {
      return { status: `Last seen ${Math.floor(diff)} minutes ago` };
    }
  };  
  
  
  

  const handleSendMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleBack = () => {
    setCurrentChat(null)
  }

  return (
    <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <Sidebar />
      <div className={`flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12} />
        <div className='flex items-start mt-2'>
          <div className={`flex-1 lg:block ${currentChat ? 'hidden' : 'block'}`}>
            {chats.map((chat) => (
              <div key={chat.id} onClick={() => setCurrentChat(chat)}>
                <Conversation data={chat} currentDoctorId={doctor.id} online={checkOnlineStatus(chat)} messages={messages} />
              </div>
            ))}
          </div>
          <div className={`fixed right-0 w-full lg:w-[797px] h-full lg:h-[799px] z-50 visible-section animate-gb-popup-slide-zoom-left ${currentChat && currentChat.members ? 'block' : 'hidden '}`}>
            <ChatBox chat={currentChat} currentDoctor={doctor.id} onBack={handleBack} setSendMessage={setSendMessage} receiveMessage={receiveMessage} checkOnlineStatus={checkOnlineStatus} handleSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorChat;
