import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../assets/avatar.png';
import { Link, useNavigate } from 'react-router-dom';
import { CgNotes } from "react-icons/cg";
import moment from 'moment';
import { loadPatient, patient_logout } from '@/Redux/Actions/PatientActions';

const Terminated = () => {
    const dispatch = useDispatch();
    const patient = useSelector((state) => state.loadPatient.patient);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loadPatient());
    }, [dispatch]);

    // Format the statusChangeDate using moment
    const statusChangeDate = patient?.statusChangeDate 
        ? moment(patient.statusChangeDate).format('MMMM D, YYYY') 
        : '';

        const handleLogout = () => {
            dispatch(patient_logout(navigate));
        };

    return (
        <div className={`h-screen  bg-[#FFFCF8]`}>
            <div className={`flex justify-center items-center pt-[1rem]`}>
                <div>
                    <span className='flex items-center justify-center'>
                        <img src={patient?.profilePic || avatar} className='w-[120px] h-[120px] rounded-full object-cover' />
                    </span>
                    <h1 className='text-[22px] mt-4 font-Mulish font-bold text-center'>We disabled your account</h1>
                    <p className='text-[15px] font-medium font-Mulish mt-3 text-center'>You no longer have access to your {patient?.userName} account</p>
                    <p className='text-[14px] font-normal font-Mulish mt-2 text-center'>Account disabled on {statusChangeDate}</p>
                </div>
            </div>
            <hr className='w-full h-2 mt-4' />
            <div className='mt-[1rem] lg:px-[50px] xs:px-[10px]'>
                <h2 className='text-[22px] font-bold font-Mulish'>Why this happened</h2>
                <h2 className='text-[15px] font-normal font-Mulish text-start mt-2'>We reviewed your account and found that it still doesn't follow our Community Guidelines on fraud and deception.</h2>
                <Link to='/terms&conditions' className='flex items-center gap-2 mt-3'>
                    <CgNotes className='text-[22px]' />
                    <h2 className='text-[14px] font-Mulish font-medium'>Read more about this rule</h2>
                </Link>
                <div className='mt-9'>
                    <h2 className='text-[20px] font-bold font-Mulish'>What this means</h2>
                    <p className='text-[14px] font-normal font-Mulish mt-2'>No one can see or find your account and you can't use it. All your information will be permanently deleted.</p>
                    <p className='text-[14px] font-normal font-Mulish mt-3'>You cannot request another review of this decision.</p>
                </div>
            </div>
            <hr className='w-full h-2 mt-4' />
            <div className='lg:px-[50px] xs:px-[10px] mt-3'>
                <button className='bg-[#22D1EE] lg:w-[300px] xs:w-full p-2 text-[15px] font-bold font-Mulish rounded-[5px] text-center' onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    );
};

export default Terminated;