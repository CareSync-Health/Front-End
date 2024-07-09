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
                {/* <div className='flex pl-6 pt-6 justify-center'>
                  On/Off<FaToggleOn className='fill-sky-400 w-[120px] h-[40px] justify-center pl-none' />
                </div> */}
                <div>
                  <input
                    className="mr-4 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"/>
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
            <div className='flex pt-6 '>
              <div className='m-12'>
                <h1 className='text-black text-2xl pt-6 pl-4'>Appointment Reminder</h1>
                <textarea name='message' rows='6' columns='6' placeholder='Your Message' required className='bg-inherit border-sky-400 mt-4 ml-8 border-2'></textarea>
              </div>
              <div className='m-12'>
                <h1 className='text-black text-2xl pt-6 pl-4'>Create your template</h1>
                <textarea name='message' rows='6' placeholder='Your Message' required className='bg-inherit border-sky-400 mt-4 ml-8 border-2'></textarea>
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