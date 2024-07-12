// SearchPage.jsx
import React, { useState } from 'react';
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import avatar from '../../assets/avatar.png'
import { LiaTimesSolid } from "react-icons/lia";
import DetailedSearchPage from './DetailedSearchPage';

const SearchPage = ({ onClose }) => {

    const [showDetailedSearch, setShowDetailedSearch] = useState(false);

    if (showDetailedSearch) {
      return <DetailedSearchPage onClose={() => setShowDetailedSearch(false)} />;
    }

  return (
    <div className="fixed lg:left-[53%] lg:rounded-[20px] lg:top-[5.5rem] inset-0 bg-white lg:shadow-2xl lg:h-[82%] lg:w-[45%] z-50 px-4 py-2 animate-popup-bounce-to-top">
      <div className="flex items-center mb-4">
        <FiArrowLeft className="text-2xl cursor-pointer" onClick={onClose} />
        <input 
          type="text" 
          placeholder="Search" 
          className="ml-3 flex-grow py-2 px-2 rounded border-b-2 outline-none"
        />
      </div>
      <div>
        <span className='flex justify-between items-center lg:px-[10px]'>
            <h3 className="text-[14px] font-Mulish font-semibold mb-2">Recent</h3>
            <button 
            className="font-Mulish font-semibold text-[14px]" 
            onClick={() => setShowDetailedSearch(true)}
            >
            See all
            </button>
        </span>
        
        <div className='-mt-3'>
            {Array(8).fill(0).map((_, index) => (
                <div className='flex gap-[15px] lg:px-[10px] items-center xs:mt-[1.3rem] lg:mt-[1.2rem] lg:h-[30px]'>
                    <img src={avatar} alt="avatar" className="lg:w-[40px] xs:w-[50px] rounded-full"/>
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
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
