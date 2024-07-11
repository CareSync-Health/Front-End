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
    <div className='bg-[#fff] shadow-lg w-20 pt-[1.2rem]'>
        <img src={Caresync} />
       <div className='mt-[1.2rem] ms-[1.5rem]'>
            <Link to='/'><MdDashboard className='text-[25px] text-[#707070]' /></Link>
            <Link to='/patient_calendar'><RiCalendarEventLine className='text-[25px] mt-[2rem] text-[#707070]' /></Link>
            <Link to='/patient_message'><RiMessage3Line className='text-[25px] mt-[2rem] text-[#707070]' /></Link>
            <Link to='/patient_appointment '><FiPieChart className='text-[25px] mt-[2rem] text-[#707070]' /></Link>
            <Link to='/patient_settings'><IoSettingsOutline className='text-[25px] mt-[2rem] text-[#707070]' /></Link>
            <TbLogout2 className='text-[25px] mt-[2rem] text-[#707070] cursor-pointer' />
            <Link to=''><MdHelpOutline className='text-[25px] mt-[8rem] text-[#707070]' /></Link>
       </div>
    </div>
  )
}

export default Sidebar