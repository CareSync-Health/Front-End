import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import img from '../../../assets/verifyImg.png';
import { verify_otp } from '../../../Redux/Actions/PatientActions';
import { resend_otp } from '../../../Redux/Actions/PatientActions';

const VerifyAccount = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.patientVerifyOtp.patient); // assuming state name
  const { email } = useSelector((state) => state.patientAuth.patient); // assuming state.auth contains the logged in user email

  useEffect(() => {
    setIsButtonDisabled(otp.some(val => val === ""));
  }, [otp]);

  function handleChange(e, index) {
    const value = e.target.value;

    // Handle backspace
    if (e.nativeEvent.inputType === 'deleteContentBackward' && !value) {
      if (index > 0) {
        e.target.previousSibling.focus();
      }
      setOtp([...otp.map((data, indx) => (indx === index ? "" : data))]);
      return;
    }

    if (isNaN(value)) return false;

    setOtp([...otp.map((data, indx) => (indx === index ? value : data))]);

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }

  function handlePaste(e) {
    const value = e.clipboardData.getData("text");

    if (isNaN(value)) return false;

    const updatedValue = value.toString().split("").slice(0, otp.length);
    setOtp(updatedValue);
  }

  function handleSubmit() {
    const otpCode = otp.join("");
    dispatch(verify_otp(otpCode, navigate));
  }

  function handleResend() {
    dispatch(resend_otp(email));
  }

  return (
    <div className='bg-[#E2F3F5] w-full h-screen pb-4 lg:px-5'>
      <img src={logo} className='lg:w-[253px] xs:w-[200px]' />
      <div className='lg:px-12 xs:px-4 lg:flex gap-32'>
        <div className='lg:w-1/2'>
          <h1 className='text-black text-4xl font-semibold font-Inter'>Enter the code</h1>
          <p className='text-black opacity-50 text-lg font-light font-Inter text-start leading-6 mt-6'>
            Enter the OTP code that was sent to your email, be careful not to share the code with anyone.
          </p>
          <div className='w-[70%] my-5 flex gap-2.5 mt-8'>
            {otp.map((data, i) => (
              <input
                key={i}
                type='text'
                className='lg:w-14 xs:w-12 px-2.5 py-2.5 bg-gray-200 rounded-lg outline-none text-center border border-solid border-gray-500 focus:border-2 focus:border-gray-500 text-black text-xl font-semibold font-Inter'
                value={data}
                onChange={(e) => handleChange(e, i)}
                maxLength={1}
                onPaste={(e) => handlePaste(e)}
              />
            ))}
          </div>

          {loading ? (
            <div className='lg:w-[380px] xs:w-[350px] py-[13px] rounded-[8px] text-[16px] font-semibold font-Inter text-center lg:mt-32 xs:mt-48'>
              <div className="inline-block w-8 h-8 border-4 border-[#22D1EE] border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <button
                type='submit'
                onClick={handleSubmit}
                className={`bg-[#22D1EE] lg:w-[380px] xs:w-[350px] py-[13px] rounded-[8px] text-[16px] font-semibold font-Inter text-[#fff] text-center lg:mt-[7rem] xs:mt-[11.95rem] ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isButtonDisabled}
              >
                Verify Email
              </button>
              <h2
                onClick={handleResend}
                className='mt-4 text-[14px] font-semibold font-Inter text-[#22D1EE] text-center lg:w-[65%]'
              >
                Resend OTP
              </h2>
            </>
          )}

          <p className='text-black text-lg font-normal font-Inter mt-6 lg:ml-16 xs:ml-12'>
            Already have an account? <Link to='/login' className='text-[#22D1EE]'>Login</Link>
          </p>
        </div>
        <div className='lg:w-1/2 lg:mt-[-3rem] lg:flex xs:hidden'>
          <img src={img} className='' />
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;