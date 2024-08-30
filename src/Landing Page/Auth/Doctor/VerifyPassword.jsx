import { useTheme } from '@/Doctor Dashboard/Components/ThemeContext';
import { config } from '@/Redux/Config';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyPassword = ({ setShowModal, handleEnable2SV, doctor }) => {
    const { theme, appearance } = useTheme();
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null);

    const url = config.liveUrl
    const doctorId = doctor?._id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        setError(null);

        try {
            const response = await axios.post(`${url}/doctor/verifyPassword`, {
                doctorId,
                password,
            });

            if (response.status === 200) {
                setShowModal(false);
                handleEnable2SV();
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Incorrect password. Please try again.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-[1000]">
            <div className={`lg:p-6 xs:p-4 rounded-md lg:w-full xs:w-[95vw] max-w-md ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <h2 className="text-xl font-semibold font-Mulish">CareSync Med Password</h2>
                <h2 className='text-[12px] font-Mulish font-normal mt-1 mb-4'>To keep your account safe we need to confirm your password</h2>
                {error && <p className="text-red-500 text-[13px] font-Mulish font-medium">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <h2 className='text-[15px] mb-1 font-Mulish font-medium'>Password*</h2>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-md outline-none text-black font-Mulish font-normal text-[15px]"
                        placeholder="Caresync med password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading} // Disable input while loading
                    />
                    <div className="mt-4 flex gap-[1rem] justify-end">
                        <button type="button" className="mr-2 font-Mulish font-medium" onClick={() => setShowModal(false)}>Cancel</button>
                        <button type="submit" className="bg-[#22D1EE] text-white px-4 py-2 rounded-md font-Mulish font-medium" disabled={loading}>
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                    Submitting...
                                </div>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyPassword;