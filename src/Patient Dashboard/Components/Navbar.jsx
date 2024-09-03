// Navbar.jsx
import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { RiMessage3Line, RiNotificationLine } from 'react-icons/ri';
import avatar from '../../assets/avatar.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const patient = useSelector((state) => state.patientAuth.patient || state.doctorVerifyOtp.doctor);

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className='xs:flex lg:block items-end justify-end pt-[1.5rem]'>
      <div className="lg:px-[30px] xs:px-[10px] lg:pt-[2rem] lg:flex items-center justify-between">
        <div>
          <h2 className="text-[#303030] text-[25px] font-bold font-Mulish leading-[35px]">Hello {patient?.firstName} {patient?.lastName}</h2>
          <h2 className="text-[#6A6969] text-[14px] font-medium font-Mulish leading-[20px]">{currentDate}</h2>
        </div>
        <div className="flex items-center justify-end lg:gap-[1.5rem] xs:gap-[1rem] lg:mt-0 xs:mt-3">
          <h2 className="bg-[#fff] shadow-2xl w-[45px] rounded-[12px] py-[7px] px-[10px] items-center text-[22px]"><RiMessage3Line /></h2> 
          <h2 className="bg-[#fff] shadow-2xl w-[45px] rounded-[12px] py-[7px] px-[10px] items-center text-[22px]"><RiNotificationLine /></h2> 
          <Link to='/patient_settings/patient_profile'><img src={patient.profilePic || avatar} className='w-[35px] h-[35px] object-cover rounded-full' alt="avatar" /> </Link> 
        </div>
      </div>

    </div>
  );
};

export default Navbar;