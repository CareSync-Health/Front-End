import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import img from '../../../assets/Rectangle 35.png';
import { loadPatient, verify2FA } from "@/Redux/Actions/PatientActions";
import toast from "react-hot-toast";

const Verify2FA = () => {
    const { id } = useParams();
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const patient = useSelector((state) => state.loadPatient.patient);

    useEffect(() => {
        dispatch(loadPatient(id));
    }, [dispatch, id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await dispatch(verify2FA(otp, patient?._id)); // Dispatch 2SV verification action

            // Check if the action was successful by checking for errors in the result
            if (result.error) {
                // The action dispatched an error
                throw new Error(result.error); // Use the error returned by the action
                toast.error(result.error)
            }

            if (result.success) {
                navigate(`/patient_dashboard/${patient?._id}`)
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-[#E2F3F5] h-screen'>
            <div className="h-[100vh] flex items-center justify-center">
                <div className="bg-[#f5f5f5] p-6 rounded-md shadow-lg w-[90%] max-w-md">
                    <h2 className="text-2xl font-semibold font-Inter">Two-Step Verification</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 mt-1">
                            <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                                Enter the code from your authenticator app
                            </label>
                            <input
                                id="code"
                                type="text"
                                placeholder="Enter six-digit codes"
                                className="mt-5 p-2 border border-gray-300 rounded-md w-full text-[14px] font-Inter font-normal outline-none"
                                value={otp}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d*$/.test(value)) {
                                        setOtp(value);
                                    }
                                }}
                                maxLength={6}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#22D1EE] text-white px-4 py-2 rounded-md flex items-center justify-center w-full"
                            disabled={loading}
                        >
                            {loading ? (
                                <ClipLoader size={24} color="#fff" />
                            ) : (
                                'Verify Code'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Verify2FA;