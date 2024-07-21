import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import MiniNavbar from '../Components/MiniNavbar'
import { IoOptions } from "react-icons/io5";

const PatientMessage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <Navbar/>
            <MiniNavbar/>
            <div className='xs:px-[10px] lg:px-[30px]'>
            <div className='flex items-center justify-between mt-[4rem]'>
              <h1 className='lg:text-[27px] xs:text-[24px] font-Mulish font-bold leading-[20px] text-start'>Messages</h1>
              <IoOptions  className='lg:text-[30px] xs:text-[27px]'/>
            </div>
            <hr className='w-full h-[4px] bg-#94949480 mt-[2rem]' />
            <h2 className='lg:text-[23px] xs:text-[19px] font-Mulish font-bold text-start mt-[2rem]'>No any message yet, once you have an unread message, it will display here </h2>
            </div>
        </div>
    </div>
  )
}

export default PatientMessage