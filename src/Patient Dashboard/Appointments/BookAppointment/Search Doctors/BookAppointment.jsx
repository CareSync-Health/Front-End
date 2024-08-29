import React, { useEffect, useState, useRef } from 'react';
import Sidebar from '../../../Components/Sidebar';
import Navbar from '../../../Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllDoctors, loadDoctor } from '@/Redux/Actions/DoctorActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
import avatar from '../../../../assets/avatar.png';
import toast from 'react-hot-toast';
import moment from 'moment';
import { bookAppointment } from '@/Redux/Actions/BookAppointmentAction';


const BookAppointment = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const [reason, setReason] = useState('');
    const [description, setDescription] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const doctor = useSelector((state) => state.loadDoctor.doctor);
    const doctors = useSelector((state) => state.getAllDoctors.doctors || []);
    const appointmentState = useSelector((state) => state.appointment); // Access the appointment state
    const patient = useSelector((state) => state.patientAuth.patient || state.doctorVerifyOtp.doctor);

    const dropdownRef = useRef(null);

    useEffect(() => {
        if (id) {
            dispatch(loadDoctor(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (doctor) {
            setSelectedDoctor(doctor);
        }
    }, [doctor]);

    useEffect(() => {
        dispatch(getAllDoctors());
    }, [dispatch]);

    const handleDoctorChange = (doctor) => {
        setSelectedDoctor(doctor);
        setDropdownOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [dropdownOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedDoctor) {
            toast("Please Select a doctor");
            return;
        }

        // Convert appointmentDate to the expected format
        const formattedAppointmentDate = moment(appointmentDate).format('DD/MM/YYYY h:mm A');

        const appointmentData = {
            patientId: patient.id,
            doctorId: doctor?._id,
            appointmentDate: formattedAppointmentDate,
            reason,
            description,
        };


        // Ensure that appointmentData includes all required fields
        if (!appointmentData.patientId || !appointmentData.doctorId || !appointmentData.appointmentDate || !appointmentData.reason || !appointmentData.description) {
            toast("All fields are required");
            return;

        }
        dispatch(bookAppointment(appointmentData, navigate));
    };

    return (
        <div className='flex flex-col lg:flex-row'>
            <Sidebar />
            <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <Navbar />
                <div className='mt-4 lg:mt-8 xs:px-2 lg:px-6 mb-8'>
                    <h2 className='text-2xl lg:text-3xl font-Mulish font-bold tracking-wide'>New Appointment</h2>
                    <h2 className='text-sm lg:text-base font-Mulish font-normal mt-1'>Request a new appointment in 10 seconds</h2>
                    <div className='mt-[3rem] lg:pr-24'>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <label className="block text-sm lg:text-base font-Mulish font-bold">Doctor</label>
                            <div className=''>
                                <div
                                    className='text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] flex items-center justify-between'
                                >
                                    {doctor && (
                                        <div className='flex items-center'>
                                            <img src={doctor?.profilePic || avatar} alt={`${doctor?.firstName} ${doctor?.lastName}`} className='w-8 h-8 rounded-full mr-3 object-cover' />
                                            <span>{doctor?.firstName} {doctor?.lastName}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <label className='block text-sm lg:text-base font-Mulish font-bold mt-5'>Expected appointment date</label>
                            <div className='rounded-lg border border-[#ccc] py-3 px-2 bg-white'>
                                <DatePicker
                                    selected={appointmentDate}
                                    onChange={setAppointmentDate}
                                    showTimeSelect
                                    dateFormat="MM/dd/yyyy - h:mm aa"
                                    className='outline-none font-Mulish text-sm lg:text-base w-[300px]'
                                    calendarClassName='rounded-lg lg:ms-[2rem] xs:ms-[1.2rem]'
                                    popperPlacement="bottom"
                                    required
                                />
                            </div>
                            <div className='grid lg:grid-cols-2 gap-4'>
                                <div>
                                    <label className="block text-sm lg:text-base font-Mulish font-bold">Appointment reason</label>
                                    <textarea
                                        rows={4}
                                        placeholder='Annual monthly check-up'
                                        className='mt-3 text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] outline-none resize-none'
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm lg:text-base font-Mulish font-bold">Comments/notes</label>
                                    <textarea
                                        rows={4}
                                        placeholder='Prefer afternoon appointments, if possible'
                                        className='mt-3 text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] outline-none resize-none'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <button type='submit' className='bg-[#22cfeeb0] w-full p-3 rounded-lg font-Mulish font-bold text-sm lg:text-base text-white mt-5'>
                                {appointmentState.loading ? 'Submitting...' : 'Submit Appointment'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;