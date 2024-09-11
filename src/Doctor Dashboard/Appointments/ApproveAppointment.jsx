import React from 'react'
import { FaCalendar, FaTimes } from 'react-icons/fa'
import { useTheme } from '../Components/ThemeContext'
import { CiCalendar } from "react-icons/ci";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../assets/avatar.png'
import { updateAppointmentStatus } from '@/Redux/Actions/BookAppointmentAction';


const ApproveAppointment = ({appointment, onClose}) => {
    const { theme, appearance } = useTheme();

    const dispatch = useDispatch();

    const handleApprove = () => {
      dispatch(updateAppointmentStatus(appointment._id, 'Accepted'));
      onClose(); // Close the overlay
    };


    return (
        <div className='fixed inset-0 z-[1000] bg-black bg-opacity-50 flex items-center justify-center'>
            <div className={`lg:w-[40%] xs:w-[95vw] h-[95vh] p-5 overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[18px] font-Mulish font-bold'>Schedule Appointment</h2>
                    <FaTimes className='text-[20px] cursor-pointer' onClick={onClose} />
                </div>
                <h2 className='text-[14px] mt-2 font-Mulish font-normal'>Please go through appointment from {appointment.patient?.firstName} {appointment.patient?.lastName} before approving appointment.</h2>
                <div className='mt-[1.5rem]'>
                    <h2>Patient</h2>
                    <div className='border-[#fff] mt-2 border w-full rounded-[10px] py-1 px-2 flex items-center gap-[10px]'>
                        <img src={appointment.patient?.profilePic || avatar} className='w-[40px] h-[40px] rounded-full object-cover' />
                        <h2 className='text-[14px] font-Mulish font-normal capitalize'>{appointment.patient?.firstName} {appointment.patient?.lastName}</h2>
                    </div>
                    <h2 className='mt-5'>Expected appointment date</h2>
                    <div className='border border-[#fff] mt-2 w-full py-2 px-2 flex items-center gap-[10px] rounded-[10px]'>
                        <CiCalendar className='text-[20px]' />
                        <h2 className='text-[14px] font-Mulish font-normal'>{moment(appointment?.appointmentDate).format('DD/MM/YYYY - h:mm A')}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Patient Phone Number</h2>
                    <div className='border border-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment?.phoneNumber}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Patient State</h2>
                    <div className='border border-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment?.state}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Patient City</h2>
                    <div className='border border-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment?.city}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Patient Zip code</h2>
                    <div className='border border-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment?.zipCode}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Patient Residential Address</h2>
                    <div className='border border-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment?.residentialAddress}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Checkup</h2>
                    <div className='border border-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment?.checkup}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Negotiated Price</h2>
                    <div className='border border-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment?.pricing.toLocaleString()}</h2>
                    </div>
                    <h2 className='mt-5'>Appointment reason</h2>
                    <div className='border border-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment.reason}</h2>
                    </div>
                    <h2 className='mt-5'>Comments/notes</h2>
                    <div className='border border-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment.description}</h2>
                    </div>
                    <button className='bg-[#22D1EE] w-full mt-5 rounded-[10px] p-2 text-[16px] font-Mulish font-bold' onClick={handleApprove}>Schedule Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default ApproveAppointment