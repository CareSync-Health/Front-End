import React from 'react'
import img from '../assets/Rectangle 12.png'
import img2 from '../assets/CareSync.png'
import facebook from '../assets/facebookI.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/LinkedIn.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='pb-[1rem] mt-[10rem] lg:px-[40px] xs:px-[10px] pt-[1rem]'>
       <div className='lg:flex items-center gap-[7rem]'>
        <div>
            <img src={img2} className='w-[100px] -ms-5' />
            <h1 className='text-[#fff] text-[22px] font-bold font-Inter mt-[1rem]'>Medical Management App for Patients</h1>
            <p className='text-[#fff] lg:text-[18px] xs:text-[17px] lg:w-[509px] font-light font-Inter mt-[1rem]'>Streamline your healthcare experience with CareSync’s all-in-one platform, offering appointment scheduling, medical records access, medication reminders, and doctor search capabilities.</p>
            <p className='text-[#fff] text-[19px] font-Inter font-light mt-[3rem]'>GET IN TOUCH <br/>hello@CareSync.health</p>
        </div>
        <div>
            <h1 className='text-[#fff] text-[22px] font-Inter font-bold lg:mt-[-2rem] xs:mt-[4rem]'>SERVICES</h1>
            <h2 className='text-[#fff] text-[16px] font-Poppins font-normal mt-[2rem]'>Primary Care</h2>
            <h2 className='text-[#fff] text-[16px] font-Poppins font-normal mt-[1rem]'>Heart & Vascular</h2>
            <h2 className='text-[#fff] text-[16px] font-Poppins font-normal mt-[1rem]'>Urgent care</h2>
            <h2 className='text-[#fff] text-[16px] font-Poppins font-normal mt-[1rem]'>Preventative care</h2>
            <h2 className='text-[#fff] text-[16px] font-Poppins font-normal mt-[1rem]'>Nutritional support</h2>
        </div>
        <div>
            <h1 className='text-[#fff] text-[22px] font-Inter font-bold mt-[2rem]'>OUR COMPANY</h1>
            <h2 className='text-[#fff] text-[16px] font-Poppins font-normal mt-[2rem]'>Blog</h2>
            <h2 className='text-[#fff] text-[16px] font-Poppins font-normal mt-[1rem]'><Link to='/privacy_policy'>Privacy Policy</Link></h2>            
            <h2 className='text-[#fff] text-[16px] font-Poppins font-normal mt-[1rem]'><Link to='/terms&conditions'>Terms & Conditions</Link></h2>            
            <div className='lg:hidden mt-[1rem]'>
                <h3 className='text-[#fff] text-[16px] font-Poppins font-normal'><Link to='/about'>About-Us</Link></h3>
                <h3 className='text-[#fff] text-[16px] font-Poppins font-normal mt-[1rem]'><Link to='/contact'>Contact-Us</Link></h3>
            </div>
            <h3 className='text-[#fff] text-[22px] font-Inter font-bold mt-[3rem]'>FOLLOW US</h3>
            <div className='flex items-center gap-[1.5rem] mt-[1.5rem]'>
                <Link to='' target='_blank'><img src={facebook} className='w-[27px]' /></Link>
                <Link to='https://x.com/_CareSync' target='_blank'><img src={twitter} className='w-[27px]' /></Link>
                <Link to=''><img src={linkedin} className='w-[27px]' /></Link>
                <Link to='https://www.instagram.com/caresync_health?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'><img src={instagram} className='w-[27px]' /></Link>
            </div>
        </div>
        <div className='lg:block xs:hidden'>
            <h3 className='text-[#fff] text-[16px] font-Poppins font-normal'><Link to='/about'>About-Us</Link></h3>
            <h3 className='text-[#fff] text-[16px] font-Poppins font-normal mt-[1rem]'><Link to='/contact'>Contact-Us</Link></h3>
        </div>
       </div>
       <hr className='w-full h-[1px] bg-[#fff] mt-[4rem]' />
       <h3 className='text-[#fff] text-[20px] font-Inter font-light text-center mt-[2rem]'>Copyright 2023 | CareSync Health</h3>
    </div>
  )
}

export default Footer