import React, { useState, useEffect } from 'react'
import { useTheme } from '../Components/ThemeContext'
import { GoDotFill } from "react-icons/go";
import { FaToggleOn, FaToggleOff } from 'react-icons/fa6';

const MessageSetting = () => {
  const { theme, appearance } = useTheme();

  const [isOn, setIsOn] = useState(() => {
    const savedState = localStorage.getItem('isOn');
    return savedState === 'true' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('isOn', isOn);
  }, [isOn]);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
         <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <div >
              <h1 className='text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito'>
                Archive all Chats
              </h1>
                 <div className='lg:pt-2 xs:pt-3 flex justify-between lg:w-[1000px]'>
                  <h2 className='lg:text-[18px] xs:text-[14px] lg:w-auto xs:w-[500px] font-normal lg:leading-[38px] font-Nunito'>Allows you to hide an individual or group chat from your chat list to better organise your conversation. You can view or archive chat by navigating from the buttom of the chat list. </h2>
                  <div className='lg:flex lg:items-center lg:pt-[2rem] lg:ms-[-10rem]'>
                    <h2 className='text-[18px] tracking-wider font-normal font-Nunito lg:block xs:hidden'>off/on</h2>
                    <div onClick={handleToggle} className='cursor-pointer'>
                      {isOn ? (
                        <FaToggleOn className='fill-sky-400 w-[120px] h-[40px] lg:-ms-5' />
                      ) : (
                        <FaToggleOff className='fill-gray-400 w-[120px] h-[40px] lg:-ms-5' />
                      )}
                    </div>
                  </div>
                </div>
            </div>
            <div className='mt-6'>
              <h1 className='text-[25px] pt-6 font-[700] leading-[46px] font-Nunito'>
                Message Templates
              </h1>
              <h4 className='flex items-start gap-[5px] pt-2 w-[980px]'>
                <GoDotFill className='mt-2.5 text-[22px]'/>
                <p className='text-[18px] font-normal leading-[46px] font-Nunito'>Use our prefound template message for common scenerios, such as appointment remiders, prescription request, or test results.</p>
              </h4>
              <h4 className='flex items-start gap-[5px] pt-3 w-[980px]'>
                <GoDotFill className='mt-2.5 text-[22px]'/>
                <p className='text-[18px] font-normal leading-[46px] font-Nunito'>You can customize and save your own message templates for quick and easy communication with patients.</p>
              </h4>
            </div>
            <div className='flex items-start gap-[6rem] pt-6'>
              <div className=''>
                <h1 className='text-2xl pt-6'>Appointment Reminder</h1>
                <p className='border border-solid mt-3 border-sky-400 rounded-[10px] w-[390px] px-[10px] py-[10px] text-[15px] font-Nunito font-normal leading-[24px]'>"Dear [Patient Name], This is a friendly reminder of your upcoming appointment with Dr. [Doctor's Name] on [Date] at [Time]. Please remember to bring any necessary documents or medications. If you need to reschedule or have any questions, please don't hesitate to contact us. We look forward to seeing you soon!"</p>
                {/* <textarea name='message' rows='6' columns='6' placeholder='Your Message' required className='bg-inherit border-sky-400 mt-4 ml-8 border-2'></textarea> */}
              </div>
              <div className=''>
                <h1 className='text-2xl pt-6'>Create your template</h1>
                <textarea name='message' rows='6' placeholder='Your Message' required className='bg-inherit border-sky-400 border border-solid h-[196px] rounded-[10px] w-[390px] px-[10px] py-[10px] text-[15px] font-Nunito font-normal leading-[24px] mt-3 resize-none'></textarea>
              </div>
            </div>
            <div className='flex items-center justify-center ms-[-15rem] mt-12'>
              <button className='border border-sky-400 bg-sky-400 p-4 rounded-lg text-white fill-sky-500'>Save Changes</button>
              <button className='border-2 p-4 border-current rounded-lg bg-gray-400 text-white ml-8  pr-8 pl-8 '>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default MessageSetting