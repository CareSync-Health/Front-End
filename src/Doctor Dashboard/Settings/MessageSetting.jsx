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
              <h1 className='text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito'>
                Archive all Chats
              </h1>
              <h4 className='pt-6 flex text-[18px] font-normal leading-[46px] font-Nunito'>
                Allows you to hide an individual or group chat from your chat list to better organise your conversation. You can view or archive chat by navigating from the buttom of the chat list. 
                <div className='flex pt-[3rem] justify-center'>
                  On/Off<FaToggleOn className='fill-sky-400 w-[120px] h-[40px] justify-center pl-none' />
                </div>
              </h4>
            </div>
            <div>
              <h1 className='text-[25px] pt-6 font-[700] leading-[46px] font-Nunito'>
                Message Templates
              </h1>
              <h4 className='flex items-start gap-[5px] pt-3 w-[980px]'>
                <GoDotFill className='mt-2.5 text-[22px]'/>
                <p className='text-[18px] font-normal leading-[46px] font-Nunito'>Use our prefound template message for common scenerios, such as appointment remiders, prescription request, or test results.</p>
              </h4>
              <h4 className='flex items-start gap-[5px] pt-3 w-[980px]'>
                <GoDotFill className='mt-2.5 text-[22px]'/>
                <p className='text-[18px] font-normal leading-[46px] font-Nunito'>You can customize and save your own message templates for quick and easy communication with patients.</p>
              </h4>
            </div>
            <div className='flex items-start gap-[5rem] pt-6'>
              <div className=''>
                <h1 className='text-2xl pt-6'>Appointment Reminder</h1>
                <p className='border border-solid mt-5 border-sky-400 rounded-[10px] w-[350px] px-[10px] py-[10px] text-[15px] font-Nunito font-normal leading-[24px]'>"Dear [Patient Name], This is a friendly reminder of your upcoming appointment with Dr. [Doctor's Name] on [Date] at [Time]. Please remember to bring any necessary documents or medications. If you need to reschedule or have any questions, please don't hesitate to contact us. We look forward to seeing you soon!"</p>
                {/* <textarea name='message' rows='6' columns='6' placeholder='Your Message' required className='bg-inherit border-sky-400 mt-4 ml-8 border-2'></textarea> */}
              </div>
              <div className=''>
                <h1 className='text-2xl pt-6'>Create your template</h1>
                <textarea name='message' rows='6' placeholder='Your Message' required className='bg-inherit border-sky-400 border border-solid h-[200px] mt-4 rounded-[10px] w-[350px] px-[10px] py-[10px] text-[15px] font-Nunito font-normal leading-[24px]'></textarea>
              </div>
            </div>
            <div className='flex justify-center mt-12'>
              <h2 className='border border-sky-400 bg-sky-400 p-4 rounded-lg text-white fill-sky-500'>Save Changes</h2>
              <h2 className='border-2 p-4 border-current rounded-lg bg-gray-400 text-white ml-8  pr-8 pl-8 '>Cancel</h2>
            </div>
        </div>
    </div>
  )
}

export default MessageSetting