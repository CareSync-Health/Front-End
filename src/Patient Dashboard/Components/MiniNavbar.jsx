import React, { useEffect } from 'react'
import bloodsugar from '../../assets/Group 31.png' 
import heartrate from '../../assets/Group 33.png'
import bloodpressure from '../../assets/Group 35.png'
import schedule from '../../assets/Group 34.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPatientAppointments } from '@/Redux/Actions/BookAppointmentAction'


const MiniNavbar = () => {
    const dispatch = useDispatch();
    const patient = useSelector((state) => state.patientAuth.patient || state.doctorVerifyOtp.doctor);
    const { appointments = [] } = useSelector((state) => state.patientAppointments);

    const patientId = patient?._id
    useEffect(() => {
        if (patientId) {
            dispatch(getAllPatientAppointments(patientId));
        }
    }, [dispatch, patientId]);

    // Calculate the number of scheduled, pending, and canceled appointments
    const scheduledCount = appointments.filter(appointment => appointment.status === 'Accepted').length;
    const pendingCount = appointments.filter(appointment => appointment.status === 'Pending').length;
    const canceledCount = appointments.filter(appointment => appointment.status === 'Rejected').length;

    // Calculate total appointments
    const totalAppointments = pendingCount + canceledCount + scheduledCount;

  return (
    <div className='lg:px-[30px] xs:px-[10px] pt-[2rem] flex items-center justify-between flex-wrap'>
        <div className='bg-[#fff] lg:w-[294px] xs:w-full shadow-lg p-5 rounded-[10px]'>
            <span className='flex items-center gap-[2rem]'>
                <img src={bloodsugar} />
               <span>
                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish'>Blood Sugar</h2>
                    <h2 className='text-[#272927] text-[28px] font-normal font-Mulish flex items-center gap-[5px]'>{patient?.bloodSugar}<span className='text-[#818181] text-[14px] font-bold'>mg / dL</span></h2>
               </span>
            </span>
        </div>
        <div className='bg-[#fff] lg:w-[294px] xs:w-full lg:mt-0 xs:mt-4 shadow-lg p-5 rounded-[10px]'>
            <span className='flex items-center gap-[2rem]'>
                <img src={heartrate} />
               <span>
                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish'>Heart Rate</h2>
                    <h2 className='text-[#272927] text-[28px] font-normal font-Mulish flex items-center gap-[5px]'>{patient?.heartRate}<span className='text-[#818181] text-[14px] font-bold'>bpm</span></h2>
               </span>
            </span>
        </div>
        <div className='bg-[#fff] lg:w-[294px] xs:w-full lg:mt-0 xs:mt-4 shadow-lg p-5 rounded-[10px]'>
            <span className='flex items-center gap-[2rem]'>
                <img src={bloodpressure} />
               <span>
                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish'>Blood Sugar</h2>
                    <h2 className='text-[#272927] text-[28px] font-normal font-Mulish flex items-center gap-[5px]'>{patient?.bloodPressure}<span className='text-[#818181] text-[14px] font-bold'>/ 72 mmhg</span></h2>
               </span>
            </span>
        </div>
        <div className='bg-[#fff] lg:w-[294px] xs:w-full lg:mt-0 xs:mt-4 shadow-lg p-5 rounded-[10px]'>
            <span className='flex items-center gap-[2rem]'>
                <img src={schedule} />
               <span>
                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish flex items-center gap-[10px]'><span className='text-[28px] font-normal'>{totalAppointments}</span> Scheduled</h2>
                    <h2 className='text-[#22D1EE] text-[17px] font-bold font-Mulish'>Appointments</h2>
               </span>
            </span>
        </div>
    </div>
  )
}

export default MiniNavbar