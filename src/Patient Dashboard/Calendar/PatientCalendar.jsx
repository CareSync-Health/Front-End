import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import MiniNavbar from '../Components/MiniNavbar';
import { PiCalendarDotsLight } from "react-icons/pi";
import { MdOutlineEditCalendar } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadPatient } from '@/Redux/Actions/PatientActions';
import { getAllPatientAppointments } from '@/Redux/Actions/BookAppointmentAction';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const PatientCalendar = () => {
    const POLLING_INTERVAL = 10000;
    const { id } = useParams();
    const patientId = id;
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const patient = useSelector((state) => state.loadPatient.patient);
    const { appointments = [] } = useSelector((state) => state.patientAppointments);

    useEffect(() => {
        if (id) {
            dispatch(loadPatient(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (patientId) {
                dispatch(getAllPatientAppointments(patientId));
            }
        }, POLLING_INTERVAL);

        return () => clearInterval(interval);
    }, [dispatch, patientId]);

    useEffect(() => {
        // Normalize dates (remove time component) for comparison
        const startOfDay = (date) => moment(date).startOf('day').toDate();
        const endOfDay = (date) => moment(date).endOf('day').toDate();

        // Filter appointments to show all between startDate and endDate
        const updatedAppointments = appointments.filter(appointment => {
            const appointmentDate = startOfDay(new Date(appointment.appointmentDate));
            return appointmentDate >= startOfDay(startDate) && appointmentDate <= endOfDay(endDate);
        });

        setFilteredAppointments(updatedAppointments);
    }, [startDate, endDate, appointments]);

    // Group appointments by date and time
    const appointmentsByDateAndTime = filteredAppointments.reduce((acc, appointment) => {
        const appointmentDate = moment(appointment.appointmentDate);
        const dateKey = appointmentDate.format('MMMM D, YYYY - h:mm A'); // Include both date and time in the key

        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }

        acc[dateKey].push(appointment);
        return acc;
    }, {});

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className='flex-1 lg:h-[99.9vh] xs:h-screen overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <Navbar />
                <MiniNavbar title="Patient Calendar" icon={<PiCalendarDotsLight />} />
                <div className='lg:px-[30px] xs:px-[5px] mt-[5rem] pb-[3rem] mb-[2.5rem] flex flex-row-reverse gap-[1rem]'>
                    {/* <button className='bg-[#E2F3F5] text-[#17B978] text-[28px] font-bold text-center px-2 py-0 rounded-[6px]'>
                        <MdOutlineEditCalendar className='' />
                    </button> */}
                    <div className='flex flex-wrap justify-end items-end gap-4'>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            className="bg-[#E2F3F5] px-[5px] py-[10px] rounded-[6px] text-[15px] font-Mulish font-bold text-[#17B978] text-center cursor-pointer outline-none"
                            dateFormat="MMMM dd"
                            placeholderText="Start Date"
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            className="bg-[#E2F3F5] px-[5px] py-[10px] rounded-[6px] text-[15px] font-Mulish font-bold text-[#17B978] text-center cursor-pointer outline-none"
                            dateFormat="MMMM dd"
                            placeholderText="End Date"
                        />
                    </div>
                </div>
                <div className='mt-5 mb-[5rem]'>
                    {Object.keys(appointmentsByDateAndTime).length > 0 ? (
                        <div className='ms-[1.5rem]'>
                            <div className='border-t-2 border border-[#A6FFF2] w-[91vw] rounded-t-[8px] p-4'>
                                <h2 className='text-[18px] font-Mulish font-bold'>Appointments</h2>
                                <div className='flex flex-col'>
                                    {Object.keys(appointmentsByDateAndTime).map(dateKey => (
                                        <div key={dateKey} className='flex-1 flex flex-col mt-5'>
                                            <div className='bg-[#E2F3F5] p-2 rounded-t-[8px] text-[15px] font-Mulish font-bold border border-[#A6FFF2]'>
                                                {dateKey} {/* Display date and time */}
                                            </div>
                                            <div className='flex flex-wrap gap-[1rem] mt-2'>
                                                {appointmentsByDateAndTime[dateKey].map(appointment => (
                                                    <div
                                                        className='bg-[#FFFCF8] py-[20px] px-4 border-l-8 border-[#22D1EE] shadow-lg lg:w-[32.3%] xs:w-full rounded-[10px] mt-2'
                                                        key={appointment._id}
                                                    >
                                                        <div className='flex items-start gap-[10px]'>
                                                            <img src={appointment?.doctor?.profilePic} className='w-[50px] h-[50px] object-cover rounded-full' />
                                                            <span>
                                                                <h3 className='text-[22px] font-Mulish font-normal capitalize'>{appointment?.doctor?.firstName} {appointment?.doctor?.lastName}</h3>
                                                                <h3 className='text-[15px] font-Mulish font-normal'>{appointment?.doctor?.profession}</h3>
                                                            </span>
                                                        </div>
                                                        <p className='text-[15px] text-[#3D3D3D] font-Mulish font-normal leading-[10px] mt-[2rem]'>{moment(appointment.appointmentDate).format('MMMM D, YYYY - h:mm A')}</p>
                                                        <p className='text-[15px] text-[#000000] font-Mulish font-medium leading-[10px] mt-[4rem]'>Diabetes Control Appointment</p>
                                                        <p className='text-[15px] text-[#3D3D3D] font-Mulish font-medium leading-[20px] mt-[2rem]'>{appointment?.description}</p>
                                                        <p className='text-[15px] text-[#3D3D3D] font-Mulish font-medium leading-[20px] mt-[2rem]'>{appointment?.reason}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='text-center text-[#17B978] font-Mulish text-[20px] font-medium bg-[#E2F3F5] p-2'>No appointments found for the selected date range.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PatientCalendar;
