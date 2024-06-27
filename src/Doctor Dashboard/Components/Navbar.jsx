import React from 'react'
import { BsSearch } from 'react-icons/bs'
import MessageIcon from '../../assets/Icons/messageIcon.svg'
import Notification from '../../assets/Icons/notification.svg'
import avatar from '../../assets/avatar.png'


function formatNumber(number) {
  // Check if number is undefined or null
  if (number == null) {
    return '';
  }

  // Check if number is a valid number and not NaN
  if (typeof number !== 'number' || isNaN(number)) {
    return '';
  }

  // Format number
  if (number >= 1000) {
    return (number / 1000).toFixed(0) + 'K';
  } else {
    return number.toString();
  }
}


const Navbar = ({ messageCount, notificationCount }) => {

  return (
    <div className='bg-[#E2F3F5] px-[20px] shadow-lg py-[20px]'>
      <div className='flex justify-between items-center'>
        <div>
          <div className='flex items-center rounded-[100px] bg-white px-4 py-2'>
            <BsSearch className='text-[#A0A4A8] text-lg block float-left cursor-pointer mr-2' />
            <input type={'text'} placeholder='Search' className='text-[13px] font-Inter leading-[16px] text-start font-normal bg-transparent w-[350px] text-[#A0A4A8] rounded-md focus:outline-none border-none' />
          </div>
        </div>
        <div className='flex items-center gap-[2rem]'>
        <div className='flex items-center relative'>
            <img src={MessageIcon} className='w-25' alt='Notification' />
            {messageCount != null && (
            <span className='bg-[#FF6760] border-2 border-[#F6F8FB] border-solid rounded-full w-[25px] h-[25px] text-[12px] text-white font-Inter pt-[5px] font-bold leading-[12px] text-center absolute left-[15px] -top-4'>
                {formatNumber(messageCount)}
            </span>
            )}
          </div>
            <div className='flex items-center relative'>
              <img src={Notification} className='w-25' alt='Notification' />
              {notificationCount != null && (
                <span className='bg-[#FF6760] border-2 border-[#F6F8FB] border-solid rounded-full w-[25px] h-[25px] text-[12px] text-white font-Inter pt-[5px] font-bold leading-[12px] text-center absolute left-[15px] -top-4'>
                {formatNumber(notificationCount)}
              </span>
                )}
            </div>
          <img src={avatar} className='w-[40px]' />
        </div>
      </div>
    </div>
  )
}

export default Navbar