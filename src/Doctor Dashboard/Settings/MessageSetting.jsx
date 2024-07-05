import React from 'react'
import { useTheme } from '../Components/ThemeContext'
import { FaToggleOn } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const MessageSetting = () => {
  const { theme, appearance } = useTheme();

  return (
    <div>
         <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <div >
              <h1 className='text-black text-2xl pt-6 pl-4 '>
                Archive all Chats
              </h1>
              <h4 className=' pt-6 pl-4 flex'>
                Allows you to hide an individual or group chat from your chat list to better organise your conversation. 
                You can view or archive chat by navigating from the buttom of the chat list. 
                <div className='flex pl-6 pt-6 justify-center'>
                  On/Off<FaToggleOn className='fill-sky-400 w-[120px] h-[40px] justify-center pl-none' />
                </div>
              </h4>
            </div>
            <div>
              <h1 className='text-black text-2xl pt-6 pl-4 '>
                Message Templates
              </h1>
              <h4 className='flex center pt-6 pl-4 text-lg'>
                <GoDotFill className='pt-2 text-xl'/>Use our prefound template message for common scenerios, such as appointment remiders, prescription request, or test results.
              </h4>
              <h4 className='flex center pt-6 pl-4 pr-4 text-lg'>
                <GoDotFill className='pt-2 text-xl'/>Use our prefound template message for common scenerios, such as appointment remiders, prescription request, or test results.
              </h4>
            </div>
            <div className='flex pt-6'>
              <div className='pr-52'>
                <h1 className='text-black text-2xl pt-6 pl-4'>Appointment Reminder</h1>
              </div>
              <div className='pl-52'>
                <h1 className='text-black text-2xl pt-6 pl-4'>Appointment Reminder</h1>
              </div>
            </div>
            <div className='flex justify-center mt-32'>
              <h2 className='border border-sky-400 p-4 rounded-lg text-white fill-sky-500'>Save Changes</h2>
              <h2 className='border-2 p-4 border-current rounded-lg text-white ml-8  pr-8 pl-8 '>Cancel</h2>
            </div>
        </div>
    </div>
  )
}

export default MessageSetting