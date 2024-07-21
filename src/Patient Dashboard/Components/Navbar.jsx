// Navbar.jsx
import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { RiMessage3Line, RiNotificationLine } from 'react-icons/ri';
import avatar from '../../assets/avatar1.png';
import SearchPage from './SearchPage';
import DetailedSearchPage from './DetailedSearchPage';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // const [searchPageOpen, setSearchPageOpen] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [detailedSearchOpen, setDetailedSearchOpen] = useState(false);
  const patient = useSelector((state) => state.patientAuth.patient || state.patientSignin.patient);


  return (
    <div>
      {/* {searchPageOpen && (
        <SearchPage 
          goBack={() => setSearchPageOpen(false)} 
          openDetailedSearch={() => {
            setSearchPageOpen(false);
            setDetailedSearchOpen(true);
          }}
        />
      )} */}
      {/* {detailedSearchOpen && (
        <DetailedSearchPage goBack={() => setDetailedSearchOpen(false)} />
      )} */}
      <div className="lg:px-[30px] xs:px-[10px] pt-[2rem] lg:flex items-center justify-between">
        <div>
          <h2 className="text-[#303030] text-[25px] font-bold font-Mulish leading-[35px]">Hello {patient?.firstName}</h2>
          <h2 className="text-[#6A6969] text-[14px] font-medium font-Mulish leading-[20px]">October 12, 2023</h2>
        </div>
        <div className="flex items-center justify-end gap-[1.5rem] lg:mt-0 xs:mt-[1.5rem]">
          <h2 
            className="bg-[#fff] shadow-2xl w-[45px] rounded-[12px] py-[7px] px-[10px] items-center text-[22px] cursor-pointer" 
            onClick={() => setShowSearchPage(true)}
          >
            <FiSearch />
          </h2>
          <h2 className="bg-[#fff] shadow-2xl w-[45px] rounded-[12px] py-[7px] px-[10px] items-center text-[22px]"><RiMessage3Line /></h2> 
          <h2 className="bg-[#fff] shadow-2xl w-[45px] rounded-[12px] py-[7px] px-[10px] items-center text-[22px]"><RiNotificationLine /></h2> 
          <img src={avatar} alt="avatar" />    
        </div>
      </div>

      {showSearchPage && <SearchPage onClose={() => setShowSearchPage(false)} />}
    </div>
  );
};

export default Navbar;