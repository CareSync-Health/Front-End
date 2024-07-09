import React, { useState, useEffect } from 'react'
import { useTheme } from '../Components/ThemeContext'
import { FaCheckCircle } from "react-icons/fa";
import { FaToggleOn, FaToggleOff } from 'react-icons/fa6';

const AccountSetting = () => {
  const { theme, appearance } = useTheme();

  const [isFirstOn, setIsFirstOn] = useState(() => {
    const savedState = localStorage.getItem('isFirstOn');
    return savedState === 'true' ? true : false;
  });

  const [isSecondOn, setIsSecondOn] = useState(() => {
    const savedState = localStorage.getItem('isSecondOn');
    return savedState === 'true' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('isFirstOn', isFirstOn);
  }, [isFirstOn]);

  useEffect(() => {
    localStorage.setItem('isSecondOn', isSecondOn);
  }, [isSecondOn]);

  const handleFirstToggle = () => {
    setIsFirstOn(!isFirstOn);
  };

  const handleSecondToggle = () => {
    setIsSecondOn(!isSecondOn);
  };

  return (
    <div>
         <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
           <div className='mt-[3rem]'>
              <div className='flex flex-wrap items-center lg:gap-[10rem] xs:gap-[2rem]'>
                <div className={`w-[390px] rounded-[10px] px-[20px] py-[20px] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#A6FFF2]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  <h1 className='text-[20px] font-normal font-Nunito leading-[46px]'>Verification Status</h1>
                  <h1 className='text-[#17B978] text-[25px] font-extrabold font-Nunito lading-[46px]'>Fully Verified</h1>
                  <h1 className='text-[17px] font-normal font-Nunito leading-[46px]'>3/3 steps completed</h1>
                </div>
                <div className={`w-[390px] rounded-[10px] px-[20px] py-[20px] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#A6FFF2]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  <h1 className='text-[20px] font-normal font-Nunito leading-[46px]'>Total Patient attended monthly</h1>
                  <h1 className='text-[#17B978] text-[25px] font-extrabold font-Nunito lading-[46px]'>Unlimited</h1>
                  <h1 className='text-[17px] font-normal font-Nunito leading-[46px]'>Based on performance</h1>
                </div>
              </div>
              <div className='border border-solid border-[#fff] mt-[4rem] py-2 px-3 lg:w-[87%]'>
                  <h2 className='text-[18px] font-normal font-Nunito leading-[46px] flex items-center gap-[10px] px-[0.5rem]'><FaCheckCircle className='text-[#22D1EE] text-[23px]' /> Personal Details confirmed</h2>
                  <hr className='w-full h-[1px] bg-white mt-2 mb-2' />
                  <h2 className='text-[18px] font-normal font-Nunito leading-[46px] flex items-center gap-[10px] px-[0.5rem]'><FaCheckCircle className='text-[#22D1EE] text-[23px]' /> Your Identity Verified</h2>
                  <hr className='w-full h-[1px] bg-white mt-2 mb-2' />
                  <h2 className='text-[18px] font-normal font-Nunito leading-[46px] flex items-center gap-[10px] px-[0.5rem]'><FaCheckCircle className='text-[#22D1EE] text-[23px]' /> Email Address verified</h2>
              </div>
              <div className='mt-[1rem]'>
                <h2 className='text-[25px] font-bold font-Nunito leading-[46px]'>Privacy</h2>
                <div className='lg:pt-6 xs:pt-3 flex justify-between lg:w-[1000px]'>
                  <h2 className='lg:text-[18px] xs:text-[14px] lg:w-auto xs:w-[500px] font-normal lg:leading-[38px] font-Nunito'>This setting give you control over your privacy settings, such as visibility to patients or colleagues within the CareSync network</h2>
                  <div className='lg:flex lg:items-center lg:pt-[2rem] lg:ms-[-10rem]'>
                    <h2 className='text-[18px] tracking-wider font-normal font-Nunito lg:block xs:hidden'>off/on</h2>
                    <div onClick={handleFirstToggle} className='cursor-pointer'>
                      {isFirstOn ? (
                        <FaToggleOn className='fill-sky-400 w-[120px] h-[40px] lg:-ms-5' />
                      ) : (
                        <FaToggleOff className='fill-gray-400 w-[120px] h-[40px] lg:-ms-5' />
                      )}
                    </div>
                  </div>
                </div>
                <div className='pt-6 flex justify-between lg:w-[1000px]'>
                  <h2 className='lg:text-[18px] xs:text-[14px] lg:w-auto xs:w-[500px] font-normal lg:leading-[38px] font-Nunito'>Manage your visibility in search results and specify who can view your profile information.</h2>
                  <div className='lg:flex lg:items-center lg:ms-[-10rem]'>
                    <h2 className='text-[18px] tracking-wider font-normal font-Nunito lg:block xs:hidden'>off/on</h2>
                    <div onClick={handleSecondToggle} className='cursor-pointer'>
                      {isSecondOn ? (
                        <FaToggleOn className='fill-sky-400 w-[120px] h-[40px] -ms-5' />
                      ) : (
                        <FaToggleOff className='fill-gray-400 w-[120px] h-[40px] -ms-5' />
                      )}
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default AccountSetting