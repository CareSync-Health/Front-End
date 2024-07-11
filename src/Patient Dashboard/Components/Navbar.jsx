import React from 'react'
import { FiSearch } from "react-icons/fi";
import { RiMessage3Line, RiNotificationLine } from 'react-icons/ri';
import avatar from '../../assets/avatar1.png'


const Navbar = () => {
  return (
    <div className='lg:px-[30px] xs:px-[10px] pt-[2rem] flex items-center justify-between'>
      <div>
        <h2 className='text-[#303030] text-[25px] font-bold font-Mulish leading-[35px]'>Hello User Name</h2>
        <h2 className='text-[#6A6969] text-[14px] font-medium font-Mulish leading-[20px]'>October 12, 2023</h2>
      </div>
      <div className='flex items-center gap-[1.5rem]'>
        <h2 className='bg-[#fff] shadow-2xl w-[45px] rounded-[12px] py-[7px] px-[10px] items-center text-[22px]'><FiSearch /></h2>
        <h2 className='bg-[#fff] shadow-2xl w-[45px] rounded-[12px] py-[7px] px-[10px] items-center text-[22px]'><RiMessage3Line /></h2> 
        <h2 className='bg-[#fff] shadow-2xl w-[45px] rounded-[12px] py-[7px] px-[10px] items-center text-[22px]'><RiNotificationLine /></h2> 
        <img src={avatar} />    
      </div>
    </div>
  )
}

export default Navbar