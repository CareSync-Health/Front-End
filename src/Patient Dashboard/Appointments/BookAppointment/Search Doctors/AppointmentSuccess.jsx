import React, { useEffect } from 'react'
import { getAllPatientAppointments } from '@/Redux/Actions/BookAppointmentAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import avatar from '../../../../assets/avatar.png'
import { CiCalendar } from "react-icons/ci";

const AppointmentSuccess = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const patientId = id;
  const { appointments = [] } = useSelector((state) => state.patientAppointments);

  useEffect(() => {
    if (patientId) {
      dispatch(getAllPatientAppointments(patientId));
    }
  }, [dispatch, patientId]);
  console.log(appointments)

  // Filter to get the most recent appointment
  const recentAppointment = appointments.reduce((latest, appointment) => {
    return new Date(latest.appointmentDate) > new Date(appointment.appointmentDate) ? latest : appointment;
  }, appointments[0]);

  // Check if the recent appointment date has passed
  const isPastAppointment = recentAppointment && new Date(recentAppointment.appointmentDate) < new Date();


  return (
    <div className='bg-[#FFFCF8] flex items-center justify-center h-screen'>
      <div>
        <h1 className='text-center text-[35px] font-Mulish font-medium leading-[45px]'>Your <span className='text-[#22D1EE] font-medium'>appointment request</span> has <br /> been successfully submitted!</h1>
        <h2 className='text-[16px] mt-[1rem] font-Mulish font-medium text-center'>A message has been sent to the doctor for confirmation.</h2>
        <div className='bg-[#fff] shadow-2xl w-full py-[25px] rounded-[12px] lg:px-[30px] xs:px-[15px] mt-[3rem]'>
          <div className='flex items-center gap-[3rem] justify-between'>
            <h2 className='text-[#303030] lg:text-[20px] xs:text-[14px] font-bold font-Mulish leading-[25px]'>Requested appointment details:</h2>
            <h2 className='flex items-center gap-[15px]'><img src={recentAppointment?.doctor?.profilePic || avatar} className='w-[40px] h-[40px] object-cover rounded-full' /> <span className='text-[15px] font-Mulish font-bold'>{recentAppointment?.doctor?.title} {recentAppointment?.doctor?.firstName} {recentAppointment?.doctor?.lastName}</span></h2>
            <h3 className={`lg:text-[12px] xs:text-[10px] font-bold font-Mulish leading-[15px] lg:p-2 xs:p-1 text-center rounded-[8px] flex items-center gap-[10px] ${isPastAppointment ? "bg-red-400 text-white/80" : "bg-[#D0FBFF] text-[#383838]"}`}><CiCalendar className='text-[22px]' /> {moment(recentAppointment?.appointmentDate).format('MMMM DD, YYYY - h:mm A')}</h3>
          </div>
        </div>
        <Link to='/search_doctor' className='flex items-center justify-center mt-[4rem]'>
          <button className='bg-[#22D1EE] p-3 rounded-[10px] w-[350px] font-Mulish text-[17px] font-bold text-white'>New Appointment</button>
        </Link>
      </div>
    </div>
  )
}

export default AppointmentSuccess