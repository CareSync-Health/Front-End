import React, { useState } from 'react';
import img from '../../../assets/Rectangle 35.png';
import { HiMiniLockClosed } from 'react-icons/hi2';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { reset_password } from '../../../Redux/Actions/DoctorActions';
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
    const { resetToken } = useParams(); // Assuming the token is in the URL
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector(state => state.doctorForgetPassword); // Access state

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }
        if (resetToken && newPassword) {
            dispatch(reset_password(resetToken, newPassword, navigate));
        } else {
            toast.error('Reset token or new password is missing.');
        }
    };

    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='h-screen'>
            <div className='flex items-center justify-center h-full'>
                <div className='mt-[4rem]'>
                    <h2 className='text-center text-[28px] text-[#fff] font-bold font-Inter'>Reset your password</h2>
                    <div className='bg-white lg:w-[500px] xs:w-[95%] ms-2.5 p-8 rounded-lg shadow-lg mt-4'>
                        <h2 className='text-[16px] text-center font-Inter font-normal'>Enter your new password. After confirming, you will be asked to log in again.</h2>
                        <form className='mt-[2rem]' onSubmit={handleSubmit}>
                            <label className='block relative'>
                                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                                    <HiMiniLockClosed />
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='New password'
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    disabled={loading}
                                    required
                                    className='pl-10 pr-12 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#17B978] focus:border-transparent text-[15px] font-Inter font-normal'
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </label>
                            <label className='block relative mt-[1rem]'>
                                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                                    <HiMiniLockClosed />
                                </span>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder='Confirm new password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    disabled={loading}
                                    required
                                    className='pl-10 pr-12 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#17B978] focus:border-transparent text-[15px] font-Inter font-normal'
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </label>
                            <button
                                type='submit'
                                disabled={loading}
                                className={`mt-6 w-full py-2 px-4 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#17B978]'} text-white font-semibold rounded-md hover:bg-[#17b978] focus:outline-none focus:ring-2 focus:ring-[#17B978] focus:ring-opacity-50`}
                            >
                                {loading ? 'Processing...' : 'Reset password'}
                            </button>
                            {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
                            <p className='text-[14px] text-center mt-5 font-Inter'>
                                Never mind! <Link to='/login' className='text-[#17B978] underline'>Take me back to login</Link>
                            </p>
                        </form>
                    </div>
                    <h2 className='mt-[5rem] text-center font-Inter font-normal text-[#fff]'>
                        By logging in to CareSync Med, you agree to our <Link to='/terms&conditions' className='underline'>terms of service</Link>.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;