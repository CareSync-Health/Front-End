import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-[50px]'>
        <nav className='flex items-center justify-between'>
            <Link to='/'><img src={Logo} alt='Logo' className='w-[80%]' /></Link>
            <ul className='flex items-center gap-[3rem]'>
                <li className='text-[#17B978] leading-[22.86px] text-[17px] font-[400]'><Link to='/'>Home</Link></li>
                <li className='text-[#17B978] leading-[22.86px] text-[17px] font-[400]'>Services</li>
                <li className='text-[#17B978] leading-[22.86px] text-[17px] font-[400]'>Doctors</li>
                <li className='text-[#17B978] leading-[22.86px] text-[17px] font-[400]'><Link to='/about'>About Us</Link></li>
            </ul>
            <button className='bg-[#22D1EE] w-[190px] px-[20px] py-[9px] rounded-[8px]'><Link to='/user' className='text-[#E2F3F5] text-[18px] leading-[20.43px] text-center font-[400]'>Sign Up</Link></button>
        </nav>
    </div>
  )
}

export default Navbar