import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <nav className='flex items-center justify-between flex-wrap'>
        <div className='flex items-center flex-shrink-0'>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='w-[60%]' />
          </Link>
        </div>
        <div className='block lg:hidden'>
          <button onClick={toggleMenu} className='text-[#17B978]'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`w-full lg:h-0 xs:h-screen lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className='lg:flex lg:items-center lg:gap-16 mt-4 lg:mt-0 py-[4rem]'>
            <li className='text-[#17B978] leading-[22.86px] lg:text-[17px] xs:text-[20px] font-[400] py-[2rem] text-center'>
              <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className='text-[#17B978] leading-[22.86px] lg:text-[17px] xs:text-[20px] font-[400] py-[2rem] text-center'>
              <Link to='/services' onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li className='text-[#17B978] leading-[22.86px] lg:text-[17px] xs:text-[20px] font-[400] py-[2rem] text-center'>
              <Link to='/doctors' onClick={() => setIsOpen(false)}>Doctors</Link>
            </li>
            <li className='text-[#17B978] leading-[22.86px] lg:text-[17px] xs:text-[20px] font-[400] py-[2rem] text-center'>
              <Link to='/about' onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
          </ul>
          <div className='mt-4 lg:mt-0 lg:hidden'>
            <button className='bg-[#22D1EE] w-full lg:w-auto px-[20px] py-[9px] rounded-[8px]'>
              <Link to='/user' className='text-[#E2F3F5] text-[18px] leading-[20.43px] text-center font-[400]' onClick={() => setIsOpen(false)}>Sign Up</Link>
            </button>
          </div>
        </div>
          <div className='mt-4 lg:mt-0 xs:hidden lg:block'>
            <button className='bg-[#22D1EE] w-ful lg:w-auto px-[50px] py-[9px] rounded-[8px]'>
              <Link to='/user' className='text-[#E2F3F5] text-[18px] leading-[20.43px] text-center font-[400]' onClick={() => setIsOpen(false)}>Sign Up</Link>
            </button>
          </div>
      </nav>
    </div>
  );
}

export default Navbar;