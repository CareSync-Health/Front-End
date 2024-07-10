import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import img2 from '../../../assets/google.png';
import img3 from '../../../assets/facebook.png';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import gif from '../../../assets/Group2.gif';
import { useDispatch } from 'react-redux';
import { patient_register } from '../../../Redux/Actions/PatientActions';
import { ClipLoader } from 'react-spinners';

const Signup = () => {
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const body = { firstname, lastname, email, password };
    dispatch(patient_register(body, navigate))
      .finally(() => setLoading(false));
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
              className='bg-[#F6F6F6] px-2 lg:py-2 xs:py-[10px] outline-none lg:w-[45%] xs:w-full'
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Enter your Last Name'
              className='bg-[#F6F6F6] px-2 lg:py-2 xs:py-[10px] rounded-[8px] lg:ms-10 sm:ms-9 lg:w-[45%] xs:w-full outline-none lg:mt-0 xs:mt-[1rem]'
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <div className='mt-5 font-Roboto'>
              <div className='flex'>
                <span className='relative left-[3.5%] mt-[2.8%] text-[20px]'>
                  <FaEnvelope />
                </span>
                <input
                  type='email'
                  placeholder='Email'
                  name='name'
                  className='bg-[#F6F6F6] ms-[-5%] w-[150%] px-[55px] py-[10px] rounded-[8px] outline-none'
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
                  className='bg-[#F6F6F6] ms-[-5%] w-[150%] px-[55px] py-[10px] rounded-[8px] outline-none'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className='mt-5'>
              <input type='checkbox' required className='bg-[#F6F6F6]' />
              <span className='ms-2'>
                Yes, I understand and agree to the CareSync Terms of Service
              </span>
            </div>
            <button
              type='submit'
              className='font-Roboto bg-[#22D1EE] w-full mt-5 py-2 text-white rounded-md flex justify-center items-center'
              disabled={loading}
            >
              {loading ? <ClipLoader size={20} color='#fff' /> : 'Create Account'}
            </button>
            <center>
              <h6 className='font-Roboto mt-8'>
                Already have an account?{' '}
                <Link to='/patientAuth' className='text-[#22D1EE]'>
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
