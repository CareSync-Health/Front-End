import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import img2 from '../../../assets/google.png';
import img3 from '../../../assets/facebook.png';
import { FaEnvelope, FaKey, FaPhoneAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import gif from '../../../assets/Group2.gif';
import { useDispatch } from 'react-redux';
import { patient_register } from '../../../Redux/Actions/PatientActions';
import { ClipLoader } from 'react-spinners';

const Signup = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const body = { firstName, lastName, email, phoneNumber, password };

    try {
      await dispatch(patient_register(body, navigate));
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <center>
        <img src={logo} alt='logo' className='w-56' />
      </center>
      <div className='lg:flex gap-52 lg:px-[20px] xs:px-[15px] pb-10 lg:ms-10 lg:mt-0 xs:mt-[3rem]'>
        <form className='font-Roboto' onSubmit={submitHandler}>
          <h1 className='font-semibold text-4xl'>Create an account</h1>
          <h5 className='text-sm mt-3'>Describe yourself as plainly that there are no errors</h5>
          <div className='flex gap-2 items-center mt-5 bg-[#F6F6F6] w-[100%] lg:px-[130px] xs:px-[63px] py-[11px] rounded-[8px] font-Roboto'>
            <img src={img2} alt='google-icon' className='w-6' />
            <h6 className='text-[18px] font-medium font-Inter'>Continue with Google</h6>
          </div>
          <div className='flex gap-2 items-center bg-[#F6F6F6] mt-4 w-[100%] lg:px-[130px] xs:px-[53px] py-[11px] rounded-[8px] font-Roboto'>
            <img src={img3} alt='google-icon' className='w-5' />
            <h6 className='text-[18px] font-medium font-Inter'>Continue with Facebook</h6>
          </div>
          <div className='flex gap-8 mt-5'>
            <hr className='w-2/5 mt-3' />
            <p>OR</p>
            <hr className='w-2/5 mt-3' />
          </div>
          <div className='mt-5 patient-forms'>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='Enter your First Name'
              className='bg-[#F6F6F6] px-2 lg:py-2 xs:py-[10px] outline-none lg:w-[45%] xs:w-full border-[2px] border-solid'
              style={{  borderImage: 'linear-gradient(#58E3F5, #3EF59E) 1' }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Enter your Last Name'
              className='bg-[#F6F6F6] border-[2px] border-solid px-2 lg:py-2 xs:py-[10px] rounded-[8px] lg:ms-10 sm:ms-9 lg:w-[45%] xs:w-full outline-none lg:mt-0 xs:mt-[1rem]'
              style={{  borderImage: 'linear-gradient(#58E3F5, #3EF59E) 1' }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <div className='mt-5 font-Roboto'>
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='phoneNumber'
                  className='bg-[#F6F6F6] w-full px-3 lg:py-[11px] xs:py-[7px] -ms-1.5 rounded-[8px] outline-none'
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              <div className='flex mt-5'>
                <span className='relative left-[3.5%] mt-[0.69rem] text-[20px]'>
                  <FaEnvelope />
                </span>
                <input
                  type='email'
                  placeholder='Email'
                  name='name'
                  className='bg-[#F6F6F6] ms-[-5%] w-[150%] lg:px-[55px] xs:px-[40px] py-[10px] rounded-[8px] outline-none'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mt-5 flex'>
                <span className='relative left-[3.5%] mt-[2.8%] text-[20px]'>
                  <FaKey />
                </span>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  className='bg-[#F6F6F6] ms-[-5%] w-[150%] lg:px-[55px] xs:px-[40px] py-[10px] rounded-[8px] outline-none'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <label className='cursor-pointer'>
              <input type='checkbox' required className='bg-[#F6F6F6] mt-[2rem]' />
              <span className='ms-2'>
                Yes, I understand and agree to the CareSync <Link to='/terms&conditions' className='underline'>Terms of Service</Link>
              </span>
            </label>
            <button
              type='submit'
              className='font-Roboto bg-[#22D1EE] w-full mt-5 py-2 text-white rounded-md flex justify-center items-center'
              disabled={loading}
            >
               {loading ? (
                <ClipLoader size={24} color="#fff" />
              ) : (
                'Create Account'
              )}
            </button>
            <center>
              <h6 className='font-Roboto mt-8'>
                Already have an account?{' '}
                <Link to='/auth' className='text-[#22D1EE]'>
                  Login
                </Link>
              </h6>
            </center>
          </div>
        </form>

        <div className='mt-8 lg:flex md:hidden sm:hidden'>
          <img src={gif} alt='patientLogin-img' className='w-[500px]' />
        </div>
      </div>
    </div>
  );
};

export default Signup;
