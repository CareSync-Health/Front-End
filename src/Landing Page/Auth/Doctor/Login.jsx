import React, { useState } from 'react';
import img from '../../../assets/Rectangle 35.png';
import img2 from '../../../assets/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { doctor_login } from '../../../Redux/Actions/DoctorActions';
import { ClipLoader } from 'react-spinners'; // Import a spinner component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the submission
    const body = {
      email,
      password
    };

    try {
      await dispatch(doctor_login(body, navigate));
    } catch (error) {
      // Handle login error
    } finally {
      setLoading(false); // Reset loading state after the submission
    }
  };

  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='lg:h-[100vh] lg:px-[50px] py-[40px]'>
        <div className='lg:flex justify-between gap-[10rem]'>
            <div className='mt-[2rem] lg:px-0 xs:px-[15px]'>
                <h1 className='text-[rgba(255,255,255,1)] text-[24px] leading-[34px] font-[700]'>CareSync: The fastest way to recruit research participants</h1>
                <p className='text-[rgba(255,255,255,1)] text-[20px] font-[400] leading-[30px] mt-[8rem]'>Are you a doctor or healthcare professional looking for the fastest way to recruit research participants? CareSync is the perfect solution for you.</p>
                <p className='text-[rgba(255,255,255,1)] text-[20px] font-[400] leading-[30px] mt-[3rem]'>CareSync is a free and easy-to-use website that connects doctors and healthcare professionals with research participants. With CareSync, you can create and post research studies in minutes, and reach thousands of potential participants.</p>
            </div>
            <div className='shadow-xl bg-[#fff] lg:w-[518px] xs:w-full px-[20px] py-[15px] lg:mt-0 xs:mt-[5rem] lg:rounded-[8px]'>
                <h1 className='text-[30px] leading-[39.99px] font-[700] text-center'>Sign In</h1>
                <form onSubmit={submitHandler}>
                    <label className='text-[#000] text-[17px] font-[600] mt-3'>Email</label><br/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='lg:w-[456px] xs:w-full px-[10px] py-[10px] mt-[10px] rounded-[8px] border-[0.5px] opacity-[40%] bg-transparent text-[#000] text-[17px] mb-[1rem]' required disabled={loading} />
                    <label className='text-[#000] text-[17px] font-[600]'>Password</label><br/>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='lg:w-[456px] xs:w-full px-[10px] py-[10px] mt-[10px] rounded-[8px] border-[0.5px] opacity-[40%] bg-transparent text-[#000] text-[17px]' required disabled={loading} />
                    <button type='submit' className='bg-[#17B978] lg:w-[150px] xs:w-full py-[10px] rounded-[8px] px-[10px] text-center text-[#fff] font-[500] lg:ms-[9rem] mt-[1.5rem]' disabled={loading}>
                        {loading ? (
                            <ClipLoader size={24} color="#fff" /> // Show spinner when loading
                        ) : (
                            'Sign In'
                        )}
                    </button>
                    <center>
                        <div className="flex gap-8 mt-5">
                            <hr className="w-2/5 mt-3" />
                            <p>OR</p>
                            <hr className="w-2/5 mt-3" />
                        </div>
                    </center>
                    <div className="flex gap-2 shadow-2xl mt-4 bg-white w-[100%] lg:px-[130px] xs:px-[70px] lg:py-[11px] xs:py-[15px] rounded-[8px] font-Roboto">
                        <img src={img2} alt="google-icon" className="w-6" />
                        <h6 className='text-[18px] font-medium font-Inter'>Login with Google</h6>
                    </div>
                    <h2 className='text-[#17B978] text-[15px] leading-[21.68px] font-[400] font-Poppins mt-[1.5rem] text-center'><Link to=''>Forgot Password?</Link></h2>
                    <h2 className='text-[15px] leading-[21.68px] font-[400] font-Poppins text-center mt-[1rem]'>Don't have an account? <Link to='/doctorSignup' className='text-[#17B978]'>Register</Link></h2>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;
