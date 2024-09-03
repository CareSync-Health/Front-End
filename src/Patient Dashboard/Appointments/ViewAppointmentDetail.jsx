import React from 'react'
import { FaCalendar, FaCheckCircle, FaClock, FaTimes, FaTimesCircle } from 'react-icons/fa'
import { CiCalendar } from "react-icons/ci";
import moment from 'moment';
import avatar from '../../assets/avatar.png'


const ViewAppointmentDetail = ({appointment, onClose}) => {

     // Helper function to determine status styling
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Accepted':
        return { bgColor: 'green-200', textColor: 'green-600', icon: <FaCheckCircle className="text-green-600" /> };
      case 'Rejected':
        return { bgColor: 'red-800/60', textColor: 'red-600', icon: <FaTimesCircle className="text-red-600" /> };
      case 'Pending':
      default:
        return { bgColor: '[#22D1EE]', textColor: 'white', icon: <FaClock className="text-white" /> };
    }
  };

  const { bgColor, textColor, icon } = getStatusStyles(appointment.status);

    return (
        <div className='fixed inset-0 z-[1000] bg-black bg-opacity-50 flex items-center justify-center'>
            <div className={`lg:w-[40%] xs:w-[95vw] h-screen p-5 overflow-y-auto bg-[#FFFCF8]`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[18px] font-Mulish font-bold'>Appointment Details</h2>
                    <FaTimes className='text-[20px] cursor-pointer' onClick={onClose} />
                </div>
                <div className='mt-[1.5rem]'>
                    <h2 className='text-[15px] font-Mulish font-medium'>Doctor</h2>
                    <div className='bg-[#fff] mt-2 border w-full rounded-[10px] py-1 px-2 flex items-center gap-[10px]'>
                        <img src={appointment.doctor?.profilePic || avatar} className='w-[40px] h-[40px] rounded-full object-cover' />
                        <h2 className='text-[14px] font-Mulish font-normal capitalize'>{appointment.doctor?.title} {appointment.doctor?.firstName} {appointment.doctor?.lastName}</h2>
                    </div>
                    <h2 className='text-[15px] font-Mulish font-medium mt-5'>Patient</h2>
                    <div className='bg-[#fff] mt-2 border w-full rounded-[10px] py-1 px-2 flex items-center gap-[10px]'>
                        <img src={appointment.patient?.profilePic || avatar} className='w-[40px] h-[40px] rounded-full object-cover' />
                        <h2 className='text-[14px] font-Mulish font-normal capitalize'>{appointment.patient?.firstName} {appointment.patient?.lastName}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Expected appointment date</h2>
                    <div className='border bg-[#fff] mt-2 w-full py-2 px-2 flex items-center gap-[10px] rounded-[10px]'>
                        <CiCalendar className='text-[20px]' />
                        <h2 className='text-[14px] font-Mulish font-normal'>{moment(appointment?.appointmentDate).format('DD/MM/YYYY - h:mm A')}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Appointment reason</h2>
                    <div className='border bg-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment.reason}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Comments/notes</h2>
                    <div className='border bg-[#fff] mt-2 w-full] py-2 px-2 rounded-[10px]'>
                        <h2 className='text-[14px] font-Mulish font-normal'>{appointment.description}</h2>
                    </div>
                    <h2 className='mt-5 text-[15px] font-Mulish font-medium'>Appointment Status</h2>
                    <span className={`bg-${bgColor} text-${textColor} border-${textColor} text-[14px] font-Mulish font-normal border py-1.5 px-[10px] rounded-full flex items-center gap-2 mt-2 uppercase`}>
                          {icon}
                          {appointment.status}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ViewAppointmentDetail