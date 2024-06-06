import React from 'react'
import logo from '../../../assets/logo.png'
import img2 from '../../../assets/google.png'
import img3 from '../../../assets/facebook.png'
import {FaEnvelope, FaKey, FaGoogle, FaFacebook} from 'react-icons/fa'
import { Link } from 'react-router-dom';
// import img1 from '../../../assets/animations/animation_lkbi0zv2.json';
import gif from '../../../assets/Group2.gif'
// import Lottie from 'lottie-react';

const Signup = () => {
  return (
    <div>
      <center>
        <img src={logo} alt='logo' className='w-56' />
      </center>
      <div className='lg:flex gap-52 px-[60px] pb-10 lg:ms-10'>
      <form className='font-Roboto'>
        <h1 className='font-semibold text-4xl'>Create an account</h1>
        <h5 className='text-sm mt-3'>Describe yourself as plainly that there are no errors</h5>
          <div className='flex gap-2 items-center mt-5 bg-[#F6F6F6] w-[100%] px-[130px] py-[11px] rounded-[8px] font-Roboto'>
            <img src={img2} alt='google-icon' className='w-6'/>
            {/* <FaGoogle/> */}
            <h6>Continue with Google</h6>
          </div>
          <div className='flex gap-2 items-center bg-[#F6F6F6] mt-4 w-[100%] px-[130px] py-[11px] rounded-[8px] font-Roboto'>
            <img src={img3} alt='google-icon' className='w-5'/>
            {/* <FaFacebook/> */}
            <h6>Continue with Facebook</h6>
          </div>
          <div className='flex gap-8 mt-5'>
            <hr className='w-2/5 mt-3'/>
            <p>OR</p>
            <hr className='w-2/5 mt-3'/>
          </div>
          <div className='mt-5 patient-forms'>
            <input type="text" name="firstName" id="firstName" placeholder='Enter your First Name' className='bg-[#F6F6F6] px-2 py-2 outline-none' required />
            <input type="text" name="lastName" id="lastName" placeholder='Enter your Last Name' className='bg-[#F6F6F6] px-2 py-2 rounded-[8px] lg:ms-10 sm:ms-9 outline-none' required />
            <div className='mt-5 font-Roboto'>
                <div className='flex'>
                    <span className='relative left-[3.5%] mt-[2.8%] text-[20px]'>
                        <FaEnvelope/>
                    </span>
                    <input 
                        type='email' 
                        placeholder='Email' 
                        name='name' 
                        className='bg-[#F6F6F6] ms-[-5%] w-[150%] px-[55px] py-[10px] rounded-[8px] outline-none' 
                        required 
                    />
                </div>
                <div className='mt-5 flex'>
                    <span className='relative left-[3.5%] mt-[2.8%] text-[20px]'>
                        <FaKey/>
                    </span>
                    <input 
                        type='password' 
                        placeholder='Password' 
                        name='password' 
                        className='bg-[#F6F6F6] ms-[-5%] w-[150%] px-[55px] py-[10px] rounded-[8px] outline-none' 
                        required 
                    />
                </div>
              </div>
              <div className='mt-5'>
                <input type="checkbox" required className='bg-[#F6F6F6]' />
                <span className='ms-2'>Yes, I understand and agree to the CareSync Terms of Service</span>
              </div>
              <Link to='/VerifyYourEmailAddress' >
                <button type='submit' className='font-Roboto bg-[#22D1EE] w-full mt-5 py-2 text-white rounded-md'>Create Account</button>
              </Link>
              <center>
              <h6 className='font-Roboto mt-8'>Already have an account? <Link to='/patientAuth' className='text-[#22D1EE]'>Login</Link></h6>
              </center>
          </div>
        </form>

        <div className='mt-8 lg:flex md:hidden sm:hidden'>
             {/* <img src={img1} alt='patientLogin-img' className='w-[500px]' /> */}
             {/* <Lottie animationData={img1} /> */}
             <img src={gif} />
            </div>
      </div>
    </div>
  )
}

export default Signup