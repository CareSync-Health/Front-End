import React from 'react'
import Caresync from '../../assets/CareSync.png'
import { MdDashboard, MdHelpOutline } from "react-icons/md";
import { RiCalendarEventLine, RiMessage3Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { FiPieChart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='bg-[#fff] shadow-lg w-20 pt-[1.2rem] lg:block xs:hidden'>
        <img src={Caresync} className='mx-auto' />
        <div className='mt-[1.2rem] space-y-[2rem] ms-[1.5rem]'>
            <div className='relative group'>
              <Link to='/'>
                <MdDashboard className='text-[25px] text-[#707070]' />
              </Link>
              <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                Dashboard
              </span>
            </div>
            <div className='relative group'>
              <Link to='/patient_calendar'>
                <RiCalendarEventLine className='text-[25px] text-[#707070]' />
              </Link>
              <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                Calendar
              </span>
            </div>
            <div className='relative group'>
              <Link to='/patient_message'>
                <RiMessage3Line className='text-[25px] text-[#707070]' />
              </Link>
              <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                Messages
              </span>
            </div>
            <div className='relative group'>
              <Link to='/patient_appointment'>
                <FiPieChart className='text-[25px] text-[#707070]' />
              </Link>
              <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                Appointment
              </span>
            </div>
            <div className='relative group'>
              <Link to='/patient_settings'>
                <IoSettingsOutline className='text-[25px] text-[#707070]' />
              </Link>
              <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                Settings
              </span>
            </div>
            <div className='relative group cursor-pointer'>
              <TbLogout2 className='text-[25px] text-[#707070]' />
              <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                Logout
              </span>
            </div>
            <div className='relative top-[6rem] group'>
              <Link to=''>
                <MdHelpOutline className='text-[25px] text-[#707070]' />
              </Link>
              <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                Help
              </span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar