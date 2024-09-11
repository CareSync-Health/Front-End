import React, { useEffect, useState, useRef } from 'react';
import Sidebar from '../../../Components/Sidebar';
import Navbar from '../../../Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
import avatar from '../../../../assets/avatar.png';
import toast from 'react-hot-toast';
import moment from 'moment';
import { bookAppointment } from '@/Redux/Actions/BookAppointmentAction';
import { loadDoctor, loadPatient } from '@/Redux/Actions/PatientActions';


const BookAppointment = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const doctor = useSelector((state) => state.loadDoctor.doctor);
    const appointmentState = useSelector((state) => state.appointment); // Access the appointment state
    const patient = useSelector((state) => state.loadPatient.patient);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const [residentialAddress, setResidentialAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [checkup, setCheckup] = useState('')
    const [reason, setReason] = useState('');
    const [description, setDescription] = useState('');
    const [checkupDescription, setCheckupDescription] = useState('')
    const [consultationFee, setConsultationFee] = useState(doctor?.consultationFee || 0)
    const [pricing, setPricing] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formValid, setFormValid] = useState(true);


    useEffect(() => {
        if (id) {
            dispatch(loadPatient(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (id) {
            dispatch(loadDoctor(id));
        }
    }, [dispatch, id])

    useEffect(() => {
        if (doctor) {
            setSelectedDoctor(doctor);
            setConsultationFee(doctor?.consultationFee);
        }
    }, [doctor]);

    useEffect(() => {
        if (patient) {
            setPhoneNumber(patient.phoneNumber || "");
            setState(patient.state || "");
            setCity(patient.city || "");
            setZipCode(patient.zipCode || "");
            setResidentialAddress(patient.addressLine1 || "");
        }
    }, [patient]);

    useEffect(() => {
        const maxNegotiableAmount = consultationFee * 0.05; // 5% of consultation fee
        const negotiatedPrice = parseFloat(pricing);
    
        if (isNaN(negotiatedPrice)) {
            setErrorMessage('Negotiated price must be a number.');
            setFormValid(false);
        } else if (negotiatedPrice < consultationFee) {
            setErrorMessage(`Negotiated price must be at least equal to the consultation fee of ${consultationFee}.`);
            setFormValid(false);
        } else if (negotiatedPrice > consultationFee + maxNegotiableAmount) {
            setErrorMessage(`You can only negotiate up to ${maxNegotiableAmount.toFixed(2)} more than the consultation fee.`);
            setFormValid(false);
        } else {
            setErrorMessage('');
            setFormValid(true);
        }
    }, [pricing, consultationFee]);


    const checkupOptions = [
        'General Checkup',
        'Follow-up Visit',
        'Specific Consultation',
        'Pediatric Checkup',
        'Chronic Condition Management',
        'Vaccination',
        'Prenatal Checkup',
        'Postnatal Checkup',
        'Mental Health Consultation',
        'Skin Care Consultation',
        'Physical Therapy Session',
        'Nutritional Counseling',
        'Home Care for the Elderly',
        'Post-Surgery Follow-up',
        'Emergency Consultation'
    ]

    const checkupDescriptions = {
        'General Checkup': 'A routine health examination to assess overall wellness.',
        'Follow-up Visit': 'A visit to review progress after a previous consultation or treatment.',
        'Specific Consultation': 'A focused consultation for a particular health concern or symptom.',
        'Pediatric Checkup': 'A checkup specifically for children to monitor growth and development.',
        'Chronic Condition Management': 'Management and monitoring of ongoing chronic conditions like diabetes, hypertension, etc.',
        'Vaccination': 'A visit specifically for administering vaccines.',
        'Prenatal Checkup': 'A checkup for expectant mothers to monitor the health of the mother and baby.',
        'Postnatal Checkup': 'A follow-up visit after childbirth to monitor the mother\'s recovery and the baby\'s health.',
        'Mental Health Consultation': 'A consultation focusing on mental health concerns such as anxiety, depression, or stress.',
        'Skin Care Consultation': 'A visit to address dermatological concerns like rashes, acne, or other skin issues.',
        'Physical Therapy Session': 'A session focused on physical rehabilitation and therapy.',
        'Nutritional Counseling': 'A consultation with a dietitian or nutritionist to discuss diet and nutrition.',
        'Home Care for the Elderly': 'Specialized care for elderly patients, addressing mobility, medication, and overall health.',
        'Post-Surgery Follow-up': 'A follow-up visit after surgery to check on recovery progress.',
        'Emergency Consultation': 'A same-day or urgent visit for immediate medical attention.'
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formValid) {
            toast.error(errorMessage || "Please fix the errors before submitting.");
            return; // Prevent form submission if not valid
        }

        if (errorMessage) {
            toast(errorMessage);
            return; // Don't submit the form if there's an error
        }

        if (!selectedDoctor) {
            toast("Please Select a doctor");
            return;
        }

        // Convert appointmentDate to the expected format
        const formattedAppointmentDate = moment(appointmentDate).format('DD/MM/YYYY h:mm A');

        const appointmentData = {
            patientId: patient?._id,
            doctorId: doctor?._id,
            appointmentDate: formattedAppointmentDate,
            phoneNumber,
            state,
            city,
            zipCode,
            residentialAddress,
            pricing,
            checkup,
            reason,
            description,
        };

        // Ensure that appointmentData includes all required fields
        if (!appointmentData.patientId || !appointmentData.doctorId || !appointmentData.appointmentDate || !appointmentData.reason || !appointmentData.description || !appointmentData.phoneNumber || !appointmentData.state || !appointmentData.city || !appointmentData.zipCode || !appointmentData.residentialAddress || !appointmentData.checkup) {
            toast("All fields are required");
            return;
        }

        dispatch(bookAppointment(appointmentData, navigate));
    };

    return (
        <div className='flex flex-col lg:flex-row'>
            <Sidebar />
            <div className='flex-1 lg:h-[99.9vh] xs:h-screen overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                {/* <Navbar /> */}
                <div className='mt-4 lg:mt-8 xs:px-2 lg:px-6 mb-8'>
                    <h2 className='text-2xl lg:text-3xl font-Mulish font-bold tracking-wide'>New Appointment</h2>
                    <h2 className='text-sm lg:text-base font-Mulish font-normal mt-1'>Request a new appointment in a minute</h2>
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
                                    className='outline-none font-Mulish text-sm lg:text-base w-[300px] cursor-pointer'
                                    calendarClassName='rounded-lg lg:ms-[2rem] xs:ms-[1.2rem]'
                                    popperPlacement="bottom"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm lg:text-base font-Mulish font-bold">Phone Number</label>
                                <input
                                    type='text'
                                    placeholder='state'
                                    className='mt-3 text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] outline-none'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='grid lg:grid-cols-2 gap-4'>
                                <div>
                                    <label className="block text-sm lg:text-base font-Mulish font-bold">Street Address</label>
                                    <input
                                        type='text'
                                        placeholder='residential address'
                                        className='mt-3 text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] outline-none'
                                        value={residentialAddress}
                                        onChange={(e) => setResidentialAddress(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm lg:text-base font-Mulish font-bold">State</label>
                                    <input
                                        type='text'
                                        placeholder='state'
                                        className='mt-3 text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] outline-none'
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm lg:text-base font-Mulish font-bold">City</label>
                                    <input
                                        type='text'
                                        placeholder='city'
                                        className='mt-3 text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] outline-none'
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm lg:text-base font-Mulish font-bold">Zip code</label>
                                    <input
                                        type='text'
                                        placeholder='zip / postal code'
                                        className='mt-3 text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] outline-none'
                                        value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <select
                                    className='mt-3 text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] outline-none'
                                    value={checkup}
                                    onChange={(e) => {
                                        setCheckup(e.target.value);
                                        setCheckupDescription(checkupDescriptions[e.target.value]);
                                    }}
                                    required
                                >
                                    <option value='' disabled>Select a checkup</option>
                                    {checkupOptions.map(checkup => (
                                        <option key={checkup} value={checkup}>{checkup}</option>
                                    ))}
                                </select>
                                <p className='text-[14px] ms-1 mt-1 font-Mulish font-normal'>{checkupDescription}</p>
                            </div>
                            <div className='grid lg:grid-cols-2 gap-4'>
                                <div>
                                    <label className="block text-sm lg:text-base font-Mulish font-bold">Consultation Price</label>
                                    <div
                                        className='text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] flex items-center justify-between mt-3'
                                    >
                                        <h2>NGN {doctor?.consultationFee}</h2>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm lg:text-base font-Mulish font-bold">Negotiate price</label>
                                    <input
                                        type='text'
                                        placeholder='negotiate price with doctor'
                                        className='mt-3 text-sm lg:text-base font-Mulish font-normal bg-white py-3 px-2 w-full rounded-lg border border-[#ccc] outline-none'
                                        value={pricing}
                                        onChange={(e) => setPricing(e.target.value)}
                                    />
                                </div>
                                {errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>}
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
                            <button type='submit' className='bg-[#22cfeeb0] w-full p-3 rounded-lg font-Mulish font-bold text-sm lg:text-base text-white mt-5' disabled={appointmentState.loading}>
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