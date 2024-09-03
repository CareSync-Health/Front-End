import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import bloodsugar from '../../assets/Group 31.png'
import group from '../../assets/Group 11.png'
import heartrate from '../../assets/Group 33.png'
import group2 from '../../assets/Group 29.png'
import bloodpressure from '../../assets/Group 35.png'
import group3 from '../../assets/Group 30.png'
import vector from '../../assets/Group 2.png'
import Man from '../../assets/Man-Figure.png'
import Woman from '../../assets/Girl-Figure.png'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import { Card, CategoryBar, } from '@tremor/react';
import BmiCalculator from './BmiCalculator';
import { loadPatient } from '@/Redux/Actions/PatientActions';
import { useParams } from 'react-router-dom';
import { getAllPatientAppointments } from '@/Redux/Actions/BookAppointmentAction';
import moment from 'moment';
// import ActivityGrowth from './ActivityGrowth';


const PatientDashboard = () => {
    const [showBmi, setShowBmi] = useState(false);
    const { id } = useParams();
    const patientId = id; // Get doctor ID from URL
    const dispatch = useDispatch();
    const patient = useSelector((state) => state.loadPatient.patient);
    const { appointments = [] } = useSelector((state) => state.patientAppointments);

    useEffect(() => {
        // if (id) {
            dispatch(loadPatient());
        // }
    }, [dispatch]);

    useEffect(() => {
        if (patientId) {
            dispatch(getAllPatientAppointments(patientId));
        }
    }, [dispatch, patientId]);

    // Filter to get the most recent appointment
    const recentAppointment = appointments.reduce((latest, appointment) => {
        return new Date(latest.appointmentDate) > new Date(appointment.appointmentDate) ? latest : appointment;
    }, appointments[0]);

    // Check if the recent appointment date has passed
    const isPastAppointment = recentAppointment && new Date(recentAppointment.appointmentDate) < new Date();


    const getStatus = (value, type) => {
        if (value === undefined || value === null) return { status: 'Unknown', bgColor: 'bg-gray-400', textColor: 'text-gray-100' };

        if (type === 'bloodSugar') {
            if (value > 300 || value < 70) return { status: 'Dangerous', bgColor: 'bg-red-800', textColor: 'text-red-100' };
            if (value > 180 || value < 70) return { status: 'Warning', bgColor: 'bg-red-100', textColor: 'text-red-800' };
            return { status: 'Normal', bgColor: 'bg-[#F8DEBD]', textColor: 'text-[#000]' };
        } else if (type === 'bloodPressure') {
            const [systolic, diastolic] = value.split('/').map(Number);
            if (systolic > 180 || diastolic > 120 || systolic < 90 || diastolic < 60) return { status: 'Dangerous', bgColor: 'bg-red-800', textColor: 'text-red-100' };
            if (systolic > 140 || diastolic > 90 || systolic < 90 || diastolic < 60) return { status: 'Warning', bgColor: 'bg-red-100', textColor: 'text-red-800' };
            return { status: 'Normal', bgColor: 'bg-[#D0FBFF]', textColor: 'text-[#000]' };
        } else if (type === 'heartRate') {
            if (value > 150 || value < 40) return { status: 'Dangerous', bgColor: 'bg-red-800', textColor: 'text-red-100' };
            if (value > 100 || value < 50) return { status: 'Warning', bgColor: 'bg-red-100', textColor: 'text-red-800' };
            return { status: 'Normal', bgColor: 'bg-[#FBF0F3]', textColor: 'text-[#000]' };
        }
    };

     // Get the status and styles for each health metric
     const bloodSugarStatus = getStatus(patient?.bloodSugar, 'bloodSugar');
     const bloodPressureStatus = getStatus(patient?.bloodPressure, 'bloodPressure');
     const heartRateStatus = getStatus(patient?.heartRate, 'heartRate');

     const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };

      const [currentDate, setCurrentDate] = useState('');

      useEffect(() => {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-US', options);
        setCurrentDate(formattedDate);
      }, []);

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 lg:h-[99.9vh] xs:h-screen overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <div className='flex items-start gap-[10px]'>
                    <div className='lg:px-[20px] xs:px-[10px] pt-[1.5rem]'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='text-[#303030] text-[25px] font-bold font-Mulish leading-[35px]'>Health Overview</h1>
                                <h2 className='text-[#6A6969] text-[14px] font-medium font-Mulish leading-[20px]'>{currentDate}</h2>
                            </div>
                            <div className='bg-[#000] p-2 rounded-l-[30px] -mr-2.5 cursor-pointer lg:hidden xs:flex' onClick={() => setShowBmi(true)}>
                                <h2 className='text-[17px] text-white font-Mulish font-bold'>BMI</h2>
                            </div>
                        </div>
                        <div className='lg:flex items-center gap-[2rem]'>
                            <div className='bg-[#fff] lg:w-[231px] xs:w-full shadow-lg p-5 mt-[2rem] rounded-[10px]'>
                                <span className='flex items-center gap-[15px]'>
                                    <img src={bloodsugar} />
                                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish'>Blood Sugar</h2>
                                </span>
                                <h2 className='text-[#272927] text-[32px] font-normal font-Mulish flex items-center gap-[5px] mt-[1rem]'>{patient?.bloodSugar}<span className='text-[#818181] text-[16px] font-bold'>mg / dL</span></h2>
                                <h2 className={`${bloodSugarStatus.bgColor} ${bloodSugarStatus.textColor} text-center w-[75px] py-[3px] px-[5px] rounded-[4px] text-[12px] font-medium font-Mulish mt-[0.5rem]`}>{bloodSugarStatus.status}</h2>
                                <img src={group} className='w-full' />
                            </div>
                            <div className='bg-[#fff] lg:w-[231px] xs:w-full shadow-lg p-5 mt-[2rem] rounded-[10px]'>
                                <span className='flex items-center gap-[15px]'>
                                    <img src={heartrate} />
                                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish'>Heart Rate</h2>
                                </span>
                                <h2 className='text-[#272927] text-[32px] font-normal font-Mulish flex items-center gap-[5px] mt-[1rem]'>{patient?.heartRate}<span className='text-[#818181] text-[16px] font-bold'>bmp</span></h2>
                                <h2 className={`${heartRateStatus.bgColor} ${heartRateStatus.textColor} text-center w-[75px] py-[3px] px-[5px] rounded-[4px] text-[12px] font-medium font-Mulish mt-[0.5rem]`}>{heartRateStatus.status}</h2>
                                <img src={group2} className='w-full' />
                            </div>
                            <div className='bg-[#fff] lg:w-[231px] xs:w-full shadow-lg lg:p-5 xs:p-5 mt-[2rem] rounded-[10px] pb-[4rem]'>
                                <span className='flex items-center gap-[15px]'>
                                    <img src={bloodpressure} />
                                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish'>Blood Pressure</h2>

                                </span>
                                <h2 className='text-[#272927] text-[32px] font-normal font-Mulish flex items-center gap-[5px] mt-[1rem]'>{patient?.bloodPressure}<span className='text-[#818181] text-[16px] font-bold'>/ 72 mmhg</span></h2>
                                <h2 className={`${bloodPressureStatus.bgColor} ${bloodPressureStatus.textColor} text-center w-[75px] py-[3px] px-[5px] rounded-[4px] text-[12px] font-medium font-Mulish mt-[0.5rem]`}>{bloodPressureStatus.status}</h2>
                                <img src={group3} className='w-full' />
                            </div>
                        </div>

                        {/* <div className='mt-[2rem]'>
                        <ActivityGrowth/>
                    </div> */}
                        <div className='bg-[#fff] shadow-2xl w-full py-[25px] rounded-[12px] lg:px-[30px] xs:px-[15px] mt-[2rem]'>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-[#303030] lg:text-[20px] xs:text-[14px] font-bold font-Mulish leading-[25px]'>{isPastAppointment ? 'Past Appointment' : 'Upcoming Appointment'}</h2>
                                <h3 className={`lg:text-[12px] xs:text-[10px] font-bold font-Mulish leading-[15px] lg:p-2 xs:p-1 text-center rounded-[8px] ${isPastAppointment ? "bg-red-400 text-white/80" : "bg-[#D0FBFF] text-[#383838]"}`}>{moment(recentAppointment?.appointmentDate).format('MMMM DD, YYYY - h:mm A')}</h3>
                                {/* {moment(recentAppointment.appointmentDate).format('DD/MM/YYYY - h:mm A')} */}
                                <h2 className='lg:text-[16px] xs:text-[12px] font-normal text-[#383838] font-Mulish leading-[20px] lg:ms-0 xs:ms-5'>Consultation with {recentAppointment?.doctor?.title} {recentAppointment?.doctor?.firstName}</h2>
                            </div>
                        </div>
                    </div>
                    {
                        showBmi && (
                            <div className='lg:hidden xs:block'>
                                <BmiCalculator setShowBmi={setShowBmi} patient={patient} />
                            </div>
                        )
                    }
                    <div className='bg-[#303030] w-[480px] rounded-l-[30px] py-[20px] px-[20px] lg:block xs:hidden'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[20px] font-normal font-Mulish text-[#fff]'>BMI Calculator</h1>
                            {/* <select className='border border-[#CACACA] border-solid py-[6px] px-[10px] rounded-[10px] text-[#CACACA] text-[16px] font-normal font-Mulish bg-[#303030]'>
                                <option>Last Week</option>
                                <option>Last Month</option>
                                <option>Last Year</option>
                            </select> */}
                        </div>
                        <div className='mt-[2.3rem] flex items-center gap-[20px]'>
                            <div>
                                <div className='bg-[#F8DEBD] w-[170px] rounded-[12px] py-[15px] ps-[15px]'>
                                    <img src={vector} className='ms-[2.7rem]' />
                                    <h2 className='flex items-center gap-[18px] mt-1'>
                                        <span className='text-[#272927] text-[15px] font-medium font-Mulish'>Height</span>
                                        <span className='text-[#272927] text-[15px] font-medium font-Mulish'>{patient?.height} cm</span>
                                    </h2>
                                </div>
                                <div className='bg-[#D0FBFF] w-[170px] rounded-[12px] py-[15px] ps-[15px] mt-[1.5rem]'>
                                    <img src={vector} className='ms-[2.7rem]' />
                                    <h2 className='flex items-center gap-[18px] mt-1'>
                                        <span className='text-[#272927] text-[15px] font-medium font-Mulish'>Weight</span>
                                        <span className='text-[#272927] text-[15px] font-medium font-Mulish'>{patient?.weight} kg</span>
                                    </h2>
                                </div>
                            </div>
                            <div className='bg-[#4A4949] w-[250px] h-[184px] rounded-[12px] px-[15px] py-[15px]'>
                                <h1 className='text-[#fff] text-[14px] font-normal font-Mulish'>Body Mass Index (BMI)</h1>
                                <span className='flex items-center justify-between mt-[1rem]'>
                                    <h2 className='text-[#fff] text-[24px] font-normal font-Mulish'>24.9</h2>
                                    <h2 className='bg-[#D6FFDD] py-[5px] px-[10px] w-[101px] rounded-[8px] text-[#000] text-[12px] font-normal font-Mulish text-center'>You’re Healthy</h2>
                                </span>

                            </div>
                        </div>
                        <hr className='w-full h-[1px] bg-[#4F4E4E] mt-[3rem]' />
                        <div className='mt-[2rem] flex items-start justify-between'>
                            <div>
                                <h1 className='text-[#fff] text-[22px] font-normal font-Mulish leading-[27px]'>Body Measurements</h1>
                                <h2 className='text-[#CACACA] text-[14px] font-bold font-Mulish leading-[20px] mt-2'>Last updated {formatDate(patient?.created_date)}</h2>
                                <h2 className='bg-[#5E5E5E] w-[211px] py-[10px] px-[10px] rounded-[8px] text-[#fff] text-[14px] font-normal font-Mulish leading-[17px] mt-4'>Inverted Triangle Body Shape</h2>
                                <div className='mt-[8rem]'>
                                    <div className='bg-[#fff] w-[145px] text-center rounded-[12px] py-[15px]'>
                                        <h1 className='text-[15px] text-[#5F5F5F] font-Mulish font-bold leading-[20px]'>Height (in)</h1>
                                        <div className="flex gap-[0.5rem] ms-[2.5rem] mt-3">
                                            <h2 className='text-[20px] font-Mulish font-normal leading-[24px] mt-[5px]'>{patient?.height}</h2>
                                            <BiUpArrowAlt className='mt-[4px] text-[25px] fill-[#E95D5C]' />
                                        </div>
                                    </div>
                                    <div className='bg-[#fff] w-[145px] text-center rounded-[12px] py-[15px] mt-[1.5rem]'>
                                        <h1 className='text-[15px] text-[#5F5F5F] font-Mulish font-bold leading-[20px]'>weight (in)</h1>
                                        <div className="flex gap-[0.5rem] ms-[3rem] mt-3">
                                            <h2 className='text-[20px] font-Mulish font-normal leading-[24px] mt-[5px]'>{patient?.weight}</h2>
                                            <BiDownArrowAlt className='mt-[4px] text-[25px] fill-[#90DF9E]' />
                                        </div>
                                    </div>
                                    <div className='bg-[#fff] w-[145px] text-center rounded-[12px] py-[15px] mt-[1.5rem]'>
                                        <h1 className='text-[15px] text-[#5F5F5F] font-Mulish font-bold leading-[20px]'>Blood Type</h1>
                                        <div className="flex gap-[0.5rem] ms-[2.5rem] mt-3">
                                            <h2 className='text-[20px] font-Mulish font-normal leading-[24px] mt-[5px] capitalize'>{patient?.bloodType}</h2>
                                            <BiDownArrowAlt className='mt-[4px] text-[25px] fill-[#90DF9E]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[1rem]'>
                                <img src={patient?.gender === 'Male' ? Man : Woman} alt={patient?.gender === 'Male' ? 'Man' : 'Woman'} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PatientDashboard
