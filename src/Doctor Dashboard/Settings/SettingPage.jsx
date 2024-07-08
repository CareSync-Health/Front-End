import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Navbar2 from './Navbar';
import AccountSetting from './AccountSetting';
import GeneralSetting from './GeneralSetting';
import MessageSetting from './MessageSetting';
import NotificationSetting from './NotificationSetting';
import SecuritySetting from './SecuritySetting';
import { useTheme } from '../Components/ThemeContext';

const SettingPage = () => {
    const { theme, appearance } = useTheme();

    return (
        <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <Sidebar />
            <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <Navbar messageCount={5} notificationCount={12} />
                <div>
                    {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 - i get coconut head 💀*/}
                    <div className='md:px-[30px] lg:px-3 xs:px-2 mb-5 select-none'>
                        <div>
                            <h2 className='text-[32px] font-bold font-Inter mt-[1rem]'>Settings</h2>
                            <hr className='w-full h-[2px] bg-[#C7C7C7] mt-4' />
                            <Navbar2 />
                        </div>
                        <Routes>
                            <Route path='general_setting' element={<GeneralSetting />} />
                            <Route path='account_setting' element={<AccountSetting />} />
                            <Route path='message_setting' element={<MessageSetting />} />
                            <Route path='notification_setting' element={<NotificationSetting />} />
                            <Route path='security_setting' element={<SecuritySetting />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingPage;