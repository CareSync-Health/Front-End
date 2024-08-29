import React, { useState } from 'react';
import { FaCheckCircle, FaClock, FaEye, FaTimesCircle } from 'react-icons/fa';
import { TbCalendarCheck } from 'react-icons/tb';
import moment from 'moment';
import { useTheme } from './Components/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import ApproveAppointment from './Appointments/ApproveAppointment';
import ViewAppointmentDetail from './Appointments/ViewAppointmentDetail';
import ConfirmationModal from './Appointments/ConfirmationModal';
import { updateAppointmentStatus } from '@/Redux/Actions/BookAppointmentAction';

const DashboardTable = () => {
    const { theme, appearance } = useTheme();
    const { id } = useParams(); // This should be used as doctorId
    const doctorId = id; // Get doctor ID from URL
    const { appointments = [] } = useSelector((state) => state.appointments);
    const dispatch = useDispatch();

    const [showApproveAppointment, setShowApproveAppointment] = useState(false); // State for controlling overlay
    const [showAppointmentDetail, setShowAppointmentDetail] = useState(false); // State for controlling overlay
    const [selectedAppointment, setSelectedAppointment] = useState(null); // State for selected appointment
    const [searchTerm, setSearchTerm] = useState(''); // Search term state
    const [showModal, setShowModal] = useState(false); // State for showing the modal
    const [appointmentToCancel, setAppointmentToCancel] = useState(null); // State to store the appointment to be canceled
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to the first page on new search
    };

    // Function to handle opening the ApproveAppointment overlay with selected appointment
    const handleScheduleClick = (appointment) => {
        if (!isPastAppointment(appointment.appointmentDate)) {
            setSelectedAppointment(appointment); // Set the selected appointment
            setShowApproveAppointment(true);
            document.body.style.overflow = 'hidden'; // Disable background scrolling
        }
    };

    // Function to handle closing the ApproveAppointment overlay
    const handleCloseOverlay = () => {
        setShowApproveAppointment(false);
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
    };


    // Function to handle opening the ViewAppointmentDetail overlay with selected appointment
    const handleViewDetailClick = (appointment) => {
        setSelectedAppointment(appointment); // Set the selected appointment
        setShowAppointmentDetail(true);
        document.body.style.overflow = 'hidden'; // Disable background scrolling
    };
    // Function to handle closing the ViewAppointmentDetail overlay
    const handleCloseViewDetailOverlay = () => {
        setShowAppointmentDetail(false);
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
    };

    // Function to handle canceling the appointment
    const handleCancelClick = (appointment) => {
        if (!isPastAppointment(appointment.appointmentDate)) {
            setAppointmentToCancel(appointment._id); // Set the appointment ID to be canceled
            setShowModal(true); // Show the confirmation modal
        }
    };

    const handleConfirmCancel = () => {
        dispatch(updateAppointmentStatus(appointmentToCancel, 'Rejected')); // Cancel the appointment
        setShowModal(false); // Hide the modal
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
    };

    const isPastAppointment = (appointmentDate) => {
        return moment(appointmentDate).isBefore(moment());
    };

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

    const filteredAppointments = appointments.filter(appointment =>
        appointment.patient.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        appointment.patient.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        moment(appointment.appointmentDate).format('DD/MM/YYYY').includes(searchQuery) ||
        moment(appointment.appointmentDate).format('h:mm A').includes(searchQuery) ||
        appointment.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentAppointments = filteredAppointments.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);

    return (
        <div className='mt-[2rem]'>
            <h1 className='text-[23px] font-Mulish font-bold lg:ms-[2rem] xs:ms-[1rem]'>Appointment Activities</h1>
            <section className={`shadow-md rounded-md lg:w-[80vw] xs:w-[95vw] xs:ms-[0.5rem] lg:ms-[2rem] mb-[5rem] mt-5 overflow-auto ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b'>
                            <th className='font-medium px-5 py-4 text-start text-[15px] font-Nunito'>Patient</th>
                            <th className='font-medium px-5 py-4 text-start text-[15px] font-Nunito'>Appointment Date</th>
                            <th className='font-medium px-5 py-4 text-start text-[15px] font-Nunito'>Doctor</th>
                            <th className='font-medium px-5 py-4 text-start text-[15px] font-Nunito'>Status</th>
                            <th className='font-medium px-5 py-4 text-start text-[15px] font-Nunito'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentAppointments.map(appointment => {
                            const { bgColor, textColor, icon } = getStatusStyles(appointment.status);
                            const isPast = isPastAppointment(appointment.appointmentDate);
                            return (
                                <tr key={appointment?._id} className='border-b pt-5'>
                                    <td className='py-4 px-5 align-middle whitespace-nowrap flex w-max gap-[10px] items-center text-[13px] font-Mulish font-normal capitalize'>
                                        <img className='w-[30px] h-[30px] rounded-full object-cover capitalize' src={appointment.patient?.profilePic || avatar} alt="" />
                                        {appointment.patient?.firstName} {appointment.patient?.lastName}
                                    </td>
                                    <td className='px-5 py-4 align-middle whitespace-nowrap text-[13px] font-Mulish font-normal'>
                                        {moment(appointment.appointmentDate).format('DD/MM/YYYY - h:mm A')}
                                    </td>
                                    <td className='px-5 py-4 align-middle whitespace-nowrap text-[13px] font-Mulish font-normal flex items-center gap-[10px] capitalize'>
                                        <img src={appointment.doctor?.profilePic || avatar} className='lg:w-[30px] lg:h-[30px] xs:w-[30px] xs:h-[30px] rounded-full object-cover' alt="" />
                                        {appointment.doctor?.firstName} {appointment.doctor?.lastName}
                                    </td>
                                    <td className='px-5 py-4 align-middle whitespace-nowrap text-[13px] font-Mulish font-normal'>
                                        <span className={`bg-${bgColor} text-${textColor} border-${textColor} text-[13px] font-Mulish font-normal border py-1.5 px-[10px] rounded-full flex items-center gap-2`}>
                                            {icon}
                                            {appointment.status}
                                        </span>
                                    </td>
                                    <td className='px-5 py-4 align-middle whitespace-nowrap text-[13px] font-Mulish font-normal'>
                                        <button
                                            onClick={() => handleScheduleClick(appointment)}
                                            disabled={isPast && appointment.status === 'Accepted'} // Disable if accepted
                                            className={`py-1.5 px-[20px] rounded-full text-[13px] font-Mulish font-normal ${appointment.status === 'Accepted' ? 'bg-gray-700 cursor-not-allowed' : 'bg-[#22D1EE] text-white hover:bg-[#22cfeeee]'} ${isPast ? 'cursor-not-allowed' : ''}`}
                                        >
                                            Schedule
                                        </button>
                                    </td>
                                    <td className='px-5 py-4 align-middle whitespace-nowrap text-[14px] font-Mulish font-normal'>
                                        <button
                                            className={`${appointment.status === 'Rejected' ? 'cursor-not-allowed' : ''} ${isPast ? 'cursor-not-allowed' : ''}`}
                                            disabled={isPast && appointment.status === 'Rejected'}
                                            onClick={() => handleCancelClick(appointment._id)}
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                    <td className='px-5 py-4 align-middle whitespace-nowrap'>
                                        <button onClick={() => handleViewDetailClick(appointment)}>
                                            <FaEye className="h-5 text-gray-400 text-[18px]" aria-hidden="true" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="flex justify-start gap-[1rem] items-center mt-4 px-5 pb-[10px]">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded-md text-[13px] font-medium font-Inter leading-[20px] text-center ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#22D1EE] text-white hover:bg-[#22cfeeb2]'}`}
                    >
                        Previous
                    </button>
                    <span className="text-[#52575C] text-[13px] font-normal font-Inter">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-2 py-1 rounded-md text-[13px] font-medium font-Inter leading-[20px] text-center ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#22D1EE] text-white hover:bg-[#22cfeeb2]'}`}
                    >
                        Next
                    </button>
                </div>
            </section>

            {showApproveAppointment && (
                <ApproveAppointment
                    appointment={selectedAppointment}
                    onClose={handleCloseOverlay}
                />
            )}
            {showAppointmentDetail && (
                <ViewAppointmentDetail
                    appointment={selectedAppointment}
                    onClose={handleCloseViewDetailOverlay}
                />
            )}

            {/* Confirmation Modal */}
            <ConfirmationModal
                showModal={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmCancel}
                message="Are you sure you want to reject this appointment?"
            />
        </div>
    );
};

export default DashboardTable;
