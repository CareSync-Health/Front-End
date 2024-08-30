import React, { useState } from 'react';
import { HiMiniLockClosed } from 'react-icons/hi2';
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { resetPassword } from '@/Redux/Actions/PatientActions';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { loading, error, patient } = useSelector((state) => state.patientForgetPassword);

    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    const id = query.get('id');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }
        if (!token || !id) {
            toast.error('Invalid reset password link.');
            return;
        }
        const body = {
            token,
            id,
            newPassword,
        };
        dispatch(resetPassword( body, navigate));
    };

    return (
        <div className='bg-[#E2F3F5] h-screen'>
            <div className='flex items-center justify-center h-full'>
                <div className='mt-[4rem]'>
                    <h2 className='text-center text-[28px] text-[#000] font-bold font-Inter'>Reset your password</h2>
                    <div className='bg-[#f5f5f5] lg:w-[500px] xs:w-[95%] ms-2.5 p-8 rounded-lg shadow-lg mt-4'>
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
                                    required
                                    disabled={loading}
                                    className='pl-10 pr-12 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22D1EE] focus:border-transparent text-[15px] font-Inter font-normal'
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
                                    required
                                    disabled={loading}
                                    className='pl-10 pr-12 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22D1EE] focus:border-transparent text-[15px] font-Inter font-normal'
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
                                className={`mt-6 w-full py-2 px-4 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#22D1EE]'} text-white font-semibold rounded-md hover:bg-[#1e90d2] focus:outline-none focus:ring-2 focus:ring-[#22D1EE] focus:ring-opacity-50`}
                            >
                                {loading ? 'Processing...' : 'Reset password'}
                            </button>
                            <p className='text-[14px] text-center mt-5 font-Inter'>
                                Never mind! <Link to='/auth' className='text-[#22D1EE] underline'>Take me back to login</Link>
                            </p>
                        </form>
                    </div>
                    <h2 className='mt-[5rem] text-center font-Inter font-normal text-[#000]'>
                        By logging in to CareSync Med, you agree to our <Link to='/terms&conditions' className='underline'>terms of service</Link>.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;