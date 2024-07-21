import React, { useEffect, useState } from 'react';
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Ellipse from '../../assets/Ellipse 1.png';
import { useDispatch, useSelector } from 'react-redux';
import { loadDoctor } from '../../Redux/Actions/DoctorActions';
import { useTheme } from '../Components/ThemeContext';

const Conversation = ({ data, currentDoctor, online, messages }) => {
    const { theme, appearance } = useTheme();

  const dispatch = useDispatch();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentDoctor);
    const getDoctorData = async () => {
      try {
        const response = await dispatch(loadDoctor(userId));
        setDoctor(response.data);
      } catch (error) {
        console.log(error);
      }
    };
        getDoctorData();
  }, []);

  const { status } = online;


  return (
    <div className={`border-r-[1px] lg:w-[361px] xs:w-full h-[518px] shadow-lg py-3 px-4 ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <div className='flex items-center justify-between'>
        <h2 className='text-[18px] font-bold font-Nunito'>Messages</h2>
        <div className='flex items-center gap-[1rem]'>
          <h2 className={`w-[33px] py-[8px] text-[18px] px-[8px] rounded-[18px] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#E4E6EB]' : 'bg-gray-100'}`}><BsThreeDots /></h2>
          <h2 className={`w-[33px] py-[8px] text-[18px] px-[8px] rounded-[18px] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#E4E6EB]' : 'bg-gray-100'}`}><RiVideoAddFill /></h2>
          <h2 className={`w-[33px] py-[8px] text-[18px] px-[8px] rounded-[18px] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#E4E6EB]' : 'bg-gray-100'}`}><FaEdit /></h2>
        </div>
      </div>
      <div className={`flex items-center rounded-[100px] px-4 py-[9px] mt-4 ${theme === 'dark' ? 'bg-transparent border border-white text-white' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'}`}>
        <BsSearch className='text-[#A0A4A8] text-lg block float-left cursor-pointer mr-2' />
        <input type='text' placeholder='Search Messages' className='text-[14px] font-Inter leading-[16px] text-start font-normal bg-transparent lg:w-[350px] xs:w-[150px] rounded-md focus:outline-none border-none' />
      </div>
      <h2 className='mt-2 ms-2 text-[16px] text-[#17B978] font-Nunito font-medium'>Conversations</h2>
      <div className='h-[370px] overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <div className='flex items-center gap-[10px] mt-[1rem] cursor-pointer'>
            <img src={Ellipse} alt="doctor" />
            <div>
            <h1 className='text-[14px] leading-[20px] font-normal font-Nunito'>{doctor?.firstName} {doctor?.lastName}</h1>
            <div className='flex items-center gap-[10px] mt-[4px]'>
                <h2 className='text-[13px] text-red-500 leading-[16px] font-normal font-Nunito'>
                            {messages.map((message) => (
                                <div key={message._id} className={`bg-[var(--buttonBg)] text-white p-3.5 rounded-2xl w-fit max-w-xs flex flex-col gap-2 ${message.senderId === currentDoctor ? "self-end rounded-br-none bg-gradient-to-r from-[#24e4f0] to-[#358ff9]" : "rounded-bl-none"}`}>
                                    <span>{message.text}</span>
                                </div>
                            ))}
                </h2>
                <h2 className='text-[12px] font-normal font-Nunito leading-[16px]'>{status}</h2>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;