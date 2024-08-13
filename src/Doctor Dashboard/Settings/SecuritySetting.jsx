import React from 'react'
import { useTheme } from '../Components/ThemeContext'
import { useDispatch, useSelector } from 'react-redux';
import { forgot_password } from '../../Redux/Actions/DoctorActions';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SecuritySetting = () => {
  const { theme, appearance } = useTheme();
  const doctor = useSelector((state) => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor)
  const { loading } = useSelector((state) => state.doctorForgetPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = doctor?.email;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      const body = {
        email: email.trim(),
      };
      dispatch(forgot_password(body, navigate));
    } else {
      toast.error('Please enter your email address.');
    }
  };

  return (
    <div>
      <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <div className='mt-[3rem]'>
          <h1 className='text-[25px] font-Nunito font-bold leading-[10px]'>Authorization</h1>
          <p className='mt-[2rem] lg:text-[19px] xs:text-[17px] font-Nunito font-medium lg:leading-[40px]'>Information for login in to your Caresync account</p>
          <p className='lg:text-[19px] xs:text-[17px] lg:mt-0 xs:mt-3 font-Nunito font-medium lg:leading-[40px]'>Regularly change your password if you suspect it may have been compromised</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='border border-gray-400 rounded-lg mt-[3rem] mb-[3rem]'>
            <div className='flex border-b-2 border-b-gray-400 lg:gap-[26rem] xs:gap-[10rem] py-4 px-4'>
              <h2 className='text-sm font-semibold tracking-wide text-left'>Email</h2>
              {/* <h2 className='text-sm font-semibold tracking-wide text-left'>{email}</h2> */}
              <input type='email' value={email} className='bg-transparent w-[250px]' disabled />
            </div>
            <div className='flex justify-between items-center py-[10px] px-4'>
              <h2 className='text-sm'>Password</h2>
              <h2 className='text-sm'>************</h2>
              <button type='submit' className='bg-[#A9A9A9] w-[100px] px-[10px] py-[5px] rounded-[6px]'><p className={`text-white ${loading ? 'cursor-not-allowed' : ''}`}>
                {loading ? 'Changing...' : 'Change'}
              </p></button>
            </div>
          </div>
        </form>

        <div className='mt-[3.5rem]'>
          <h1 className='text-[25px] font-Nunito font-bold leading-[10px]'>2-Step verification</h1>
          <h2 className='mt-[3rem] lg:text-[19px] xs:text-[17px] font-Nunito font-medium lg:leading-[3rem]'>2-Step Verification ensures that all sensitive transaction are authorized by you.</h2>
        </div>

        <div className='flex justify-between items-center border border-gray-400 py-[15px] lg:px-4 xs:px-2 rounded-lg mt-[3rem] mb-[3rem]'>
          <h3 className='text-sm'>Security Type</h3>
          <h3 className='text-sm'>Authenticator App</h3>
          <button className='bg-[#A9A9A9] w-[100px] px-[10px] py-[7px] rounded-[6px]'><p className='text-white'>Change</p></button>
        </div>


      </div>
    </div>
  )
}

export default SecuritySetting