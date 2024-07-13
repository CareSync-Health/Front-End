import React, { useEffect, useState } from 'react'
import { useTheme } from '../Components/ThemeContext'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import MessageSide from './MessageSide';
import { useSelector } from 'react-redux';
import { userChats } from '../../Redux/DoctorApi/ChatRequest';

const DoctorChat = () => {
 const { theme, appearance } = useTheme();

 const { doctorDetail } = useSelector(state => state.doctorAuth);
 console.log(doctorDetail);
 
 const [chats, setChats] = useState([]);

 useEffect(() => {
    const getChats = async() =>{
        try {
           const {data} = await userChats(doctorDetail._id) 
           setChats(data)
           console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    getChats()
 }, [doctorDetail])

  return (
    <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        <Sidebar />
        <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <Navbar messageCount={5} notificationCount={12} />
            <div>
                {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 - i get coconut head 💀*/}
                <div className='flex items-start mt-3'>
                    <MessageSide/>
                    <div className='py-3 px-5 bg-[#E2F3F5] shadow-lg fixed right-0 w-[797px] h-[799px]'>
                        helo
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorChat