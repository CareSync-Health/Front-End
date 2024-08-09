import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { forgot_password } from '../../../Redux/Actions/DoctorActions';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch the doctor email from local storage or state
  const email = localStorage.getItem('patientEmail');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(forgot_password(navigate));
    }
  };

  return (
    <div className='bg-[#E2F3F5] h-screen'>
      <div className='flex items-center justify-center h-full'>
        <div>
          <div className='bg-[#f5f5f5] lg:w-[700px] xs:w-[95%] ms-2.5 p-8 rounded-lg shadow-lg mt-[6rem]'>
            <h2 className='text-center text-2xl md:text-3xl font-semibold'>Reset your password</h2>
            <h2 className='text-center text-sm md:text-base font-normal mt-4'>To reset your password, enter the email address you use to log in.</h2>
            <form className='mt-6' onSubmit={handleSubmit}>
              <label className='block relative'>
                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                  <FaEnvelope />
                </span>
                <input
                  type='email'
                  value={email || 'Enter your email'}
                  readOnly
                  className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22D1EE] focus:border-transparent text-[15px] font-Inter font-normal'
                />
              </label>
              <button
                type='submit'
                className='mt-6 w-full py-2 px-4 bg-[#22D1EE] text-white font-semibold rounded-md hover:bg-[#22D1EE] focus:outline-none focus:ring-2 focus:ring-[#22D1EE] focus:ring-opacity-50'>
                Send Reset Link
              </button>
              <p className='text-[14px] text-center mt-5 font-Inter'>Never mind! <Link to='/auth' className='text-[#22D1EE] underline'>Take me back to login</Link></p>
            </form>
          </div>
          <h2 className='mt-[9rem] text-center font-Inter font-normal text-[#000]'>By logging in to CareSync Med, you agree to our <Link to='/terms&conditions' className='underline'>terms of service</Link>.</h2>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword