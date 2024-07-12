import React from 'react';
import { FiArrowLeft, FiClock } from "react-icons/fi";
import avatar1 from '../../assets/avatar1.png'
import { LiaTimesSolid } from 'react-icons/lia';

const DetailedSearchPage = ({ onClose }) => {
  return (
    <div className="fixed lg:left-[53%] lg:rounded-[20px] lg:top-[5.5rem] inset-0 bg-white lg:shadow-2xl lg:h-[82%] lg:w-[45%] z-50 animate-popup-bounce-to-top">
      <div className="flex items-center justify-between xs:p-3 lg:px-[20px]">
        <FiArrowLeft className="text-2xl cursor-pointer" onClick={onClose}  />
        <h4 className="text-[16px] font-Mulish font-semibold">Recent</h4>
        <button className="text-[16px] font-Mulish font-bold">Clear all</button>
      </div>
      <hr className='w-full h-[1px] mt-1 bg-black' />
      <div className="flex items-center justify-between mb-4">
      </div>
      <ul className='px-4'>
        {Array(8).fill(0).map((_, index) => (
                <div className='flex gap-[15px] lg:px-[10px] items-center xs:mt-[1.3rem] lg:mt-[1.4rem] lg:h-[30px]'>
                    <img src={avatar1} alt="avatar" className="lg:w-[40px] xs:w-[50px] rounded-full"/>
                    <div className='flex items-center justify-between flex-grow'>
                        <div className='flex-grow'>
                            <p className='xs:text-[16px] lg:text-[14px] font-Mulish font-semibold'>Full Name</p>
                            <p className='xs:text-[14px] lg:text-[12px] font-Mulish font-semibold'>username</p>
                        </div>
                        <div>
                            <LiaTimesSolid className='text-[14px] font-Mulish font-semibold cursor-pointer' />
                        </div>
                    </div>
                </div>
        ))}
      </ul>
    </div>
  );
};

export default DetailedSearchPage;