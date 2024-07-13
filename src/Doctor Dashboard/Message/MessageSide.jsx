import React from 'react'
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Ellipse from '../../assets/Ellipse 1.png'
import Ellipse2 from '../../assets/Ellipse 2.png'
import Ellipse3 from '../../assets/Ellipse 3.png'
import Ellipse4 from '../../assets/Ellipse 4.png'
import { useSelector } from 'react-redux';


const MessageSide = () => {

    const doctor = useSelector((state) => state.doctorAuth.doctor);

  return (
    <div className='border-r-[1px] border-t-[1px] w-[361px] h-[525px] shadow-lg py-3 px-4 bg-[#E2F3F5]'>
        <div className='flex items-center justify-between'>
            <h2 className='text-[#25282B] text-[18px] font-bold font-Nunito'>Messages</h2>
            <div className='flex items-center gap-[1rem]'>
                <h2 className='bg-[#E4E6EB] w-[33px] py-[8px] text-[18px] px-[8px] rounded-[18px]'><BsThreeDots /></h2>
                <h2 className='bg-[#E4E6EB] w-[33px] py-[8px] px-[8px] text-[18px] rounded-[18px]'><RiVideoAddFill /></h2>
                <h2 className='bg-[#E4E6EB] w-[33px] py-[8px] px-[8px] text-[18px] rounded-[18px]'><FaEdit /></h2>
            </div>
        </div>
        <div className='flex items-center rounded-[100px] px-4 py-[9px] bg-white mt-4'>
            <BsSearch className='text-[#A0A4A8] text-lg block float-left cursor-pointer mr-2' />
            <input type={'text'} placeholder='Search Messages' className='text-[14px] font-Inter leading-[16px] text-start font-normal bg-transparent lg:w-[350px] xs:w-[150px] rounded-md focus:outline-none border-none' />
        </div>
        <h2 className='mt-2 ms-2 text-[16px] text-[#17B978] font-Nunito font-medium'>Conversations</h2>
        <div className='flex items-center gap-[10px] mt-[1rem]'>
            <img src={Ellipse} />
            <div>
                <h1 className='text-[#52575C] text-[14px] leading-[20px] font-normal font-Nunito'>{doctor?.firstname} {doctor?.lastname}</h1>
                <div className='flex items-center gap-[10px] mt-[4px]'>
                    <h2 className='text-[13px] text-red-500 leading-[16px] font-normal font-Nunito'>❤</h2>
                    <h2 className='text-[12px] text-[#65676B] font-normal font-Nunito leading-[16px]'>4d</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageSide