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
            <div className='w-[95rem] flex items-center justify-between mt-[4rem] ml-[2rem]'>
              <h1 className='text-[30px] font-Inter font-bold leading-[20px] text-start'>Messages</h1>
              <IoOptions  className='w-[10rem] h-[3rem]'/>
            </div>
            <hr className='w-[91.5rem] h-[4px] bg-#94949480 mt-[3rem] ml-[2rem]' />
            <h2 className='text-[30px] font-Inter font-bold leading-[50px] text-start mt-[4rem] ml-[2rem]'>No any message yet, once you have an unread <br />message, it will display here </h2>
        </div>
    </div>
  )
}

export default PatientMessage