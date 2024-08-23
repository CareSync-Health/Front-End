import React, { useEffect } from 'react';
import ContactsContainer from './Components/contacts-container/ContactsContainer';
import EmptyChatContainer from './Components/empty-chat-container/EmptyChatContainer';
import ChatContainer from './Components/chat-container/ChatContainer';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { useTheme } from '../Components/ThemeContext';
import { useSelector } from 'react-redux';
import VideoCall from './Components/call/VideoCall';
import VoiceCall from './Components/call/VoiceCall';
import IncomingVideoCall from './Components/call/IncomingVideoCall';
import IncomingVoiceCall from './Components/call/IncomingVoiceCall';

const Chat = () => {
    const { theme, appearance } = useTheme();
    const { selectedChatType, videoCall, voiceCall, incomingVideoCall, incomingVoiceCall } = useSelector((state) => state.createChat);

    return (
        <>
            {
                videoCall && (
                    <div className={`h-screen w-screen max-h-full overflow-hidden z-[1000] ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        <VideoCall />
                    </div>
                )
            }
            {
                voiceCall && (
                    <div className={`h-screen w-screen max-h-full overflow-hidden z-[1000] ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        <VoiceCall />
                    </div>
                )
            }

            {incomingVideoCall && ( <IncomingVideoCall /> )}
            {incomingVoiceCall && ( <IncomingVoiceCall /> )}


            {!videoCall && !voiceCall && (
                <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    <Sidebar />
                    <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                        {/* <Navbar messageCount={5} notificationCount={12} /> */}
                        <div className='mt-1 lg:ms-1'>
                            <div className='flex h-screen items-start overflow-hidden'>
                                {/* ContactsContainer should be visible on large screens or when no chat is selected on small screens */}
                                <div className={`${selectedChatType !== undefined ? 'lg:block xs:hidden' : 'flex'} xs:w-full md:w-1/3 lg:w-[31.4%]`}>
                                    <ContactsContainer />
                                </div>

                                {/* ChatContainer should be visible only when a chat is selected */}
                                <div className={`${selectedChatType !== undefined ? 'flex' : 'lg:block xs:hidden'} w-full md:flex-1`}>
                                    {selectedChatType === undefined ? (
                                        <EmptyChatContainer />
                                    ) : (
                                        <ChatContainer />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chat;
