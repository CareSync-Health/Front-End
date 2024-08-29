import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar';
import { FaEye, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import avatar from '../../assets/avatar.png';
import { TbCalendarCheck } from "react-icons/tb";
import { FaRegHourglass } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";
import { useTheme } from '../Components/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadDoctor } from '@/Redux/Actions/DoctorActions';
import moment from 'moment';
import ApproveAppointment from './ApproveAppointment';
import ViewAppointmentDetail from './ViewAppointmentDetail';
import ConfirmationModal from './ConfirmationModal';
import { getAllAppointments, updateAppointmentStatus } from '@/Redux/Actions/BookAppointmentAction';

const DoctorAppointment = () => {
  const { theme, appearance } = useTheme();
  const [page, setPage] = useState(1);
  const [showApproveAppointment, setShowApproveAppointment] = useState(false); // State for controlling overlay
  const [showAppointmentDetail, setShowAppointmentDetail] = useState(false); // State for controlling overlay
  const [selectedAppointment, setSelectedAppointment] = useState(null); // State for selected appointment
  const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items per page
  const [searchTerm, setSearchTerm] = useState(''); // Search term state
  const [showModal, setShowModal] = useState(false); // State for showing the modal
  const [appointmentToCancel, setAppointmentToCancel] = useState(null); // State to store the appointment to be canceled

  const dispatch = useDispatch();
  const { id } = useParams(); // This should be used as doctorId
  const doctorId = id; // Get doctor ID from URL
  const { appointments = [] } = useSelector((state) => state.appointments);
  const doctor = useSelector((state) => state.loadDoctor.doctor);

  // Polling interval (e.g., every 10 seconds)
  const POLLING_INTERVAL = 10000;

  useEffect(() => {
    if (id) {
      dispatch(loadDoctor(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (doctorId) {
      dispatch(getAllAppointments(doctorId));
    }
  }, [dispatch, doctorId]);

  // Polling appointments to get the latest status
  useEffect(() => {
    const interval = setInterval(() => {
      if (doctorId) {
        dispatch(getAllAppointments(doctorId));
      }
    }, POLLING_INTERVAL);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [dispatch, doctorId]);

  // Helper function to check if the appointment date has passed
  const isPastAppointment = (appointmentDate) => {
    return moment().isAfter(appointmentDate);
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


  const handleCancelClick = (appointmentId) => {
    if (!isPastAppointment(appointments.find(a => a._id === appointmentId)?.appointmentDate)) {
      setAppointmentToCancel(appointmentId);
      setShowModal(true);
    }
  };

  const handleConfirmCancel = () => {
    if (appointmentToCancel) {
      dispatch(updateAppointmentStatus(appointmentToCancel, 'Rejected'));
      setShowModal(false);
      setAppointmentToCancel(null);
    }
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setAppointmentToCancel(null); // Reset the appointment to cancel
  };

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

  // Filter appointments based on search term
  const filteredAppointments = appointments.filter(appointment => {
    const { firstName, lastName } = appointment.patient || {};
    const { appointmentDate, status } = appointment;

    // Split search term into individual words
    const searchWords = searchTerm.toLowerCase().split(/\s+/);

    // Function to check if any of the search words are included in the field
    const containsAllSearchWords = (field) => {
      return searchWords.every(word => field.toLowerCase().includes(word));
    };

    // Combine firstName and lastName for the patient name
    const patientFullName = `${firstName || ''} ${lastName || ''}`;

    // Format appointment date/time
    const formattedDateTime = moment(appointmentDate).format('DD/MM/YYYY - h:mm A').toLowerCase();

    return (
      (firstName && lastName && containsAllSearchWords(patientFullName)) || // Check full name
      (formattedDateTime.includes(searchTerm.toLowerCase())) || // Check date/time
      (status && containsAllSearchWords(status)) // Check status
    );
  });


  // Paginate appointments
  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const indexOfLastAppointment = page * itemsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - itemsPerPage;
  const currentAppointments = filteredAppointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  // Change page
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Calculate the number of scheduled, pending, and canceled appointments
  const scheduledCount = appointments.filter(appointment => appointment.status === 'Accepted').length;
  const pendingCount = appointments.filter(appointment => appointment.status === 'Pending').length;
  const canceledCount = appointments.filter(appointment => appointment.status === 'Rejected').length;

  return (
    <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12} />
        <div className='md:px-[30px] px-3 mb-5 select-none'>
          <h1 className='text-4xl font-semibold mt-5'>Appointments</h1>
          <div className='flex flex-wrap items-center justify-between mt-[1rem] gap-[2rem]'>
            <div className={`lg:w-[340px] xs:w-full lg:h-[100px] xs:h-[85px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              <span>
                <TbCalendarCheck className='text-[40px] text-green-600' />
              </span>
              <div>
                <h1 className='xs:text-[13px] lg:text-[14px] font-Inter font-bold leading-[20px] text-start'>Scheduled appointments</h1>
                <h2 className={`text-[#22D1EE] xs:text-[14px] lg:text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]`}>{scheduledCount}</h2>
              </div>
            </div>
            <div className={`lg:w-[340px] xs:w-full lg:h-[100px] xs:h-[75px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]  ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              <span><FaRegHourglass className='text-[35px] text-[#22D1EE]' /></span>
              <div>
                <h1 className='xs:text-[13px] lg:text-[14px] font-Inter font-bold leading-[20px] text-start'>Pending appointments</h1>
                <h2 className={`text-[#22D1EE] xs:text-[14px] lg:text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]`}>{pendingCount}</h2>
              </div>
            </div>
            <div className={`lg:w-[340px] xs:w-full lg:h-[100px] xs:h-[75px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              <span><IoWarningOutline className='text-[40px] text-red-600' /></span>
              <div>
                <h1 className='xs:text-[13px] lg:text-[14px] font-Inter font-bold leading-[20px] text-start'>Canceled appointments</h1>
                <h2 className={`text-[#22D1EE] xs:text-[14px] lg:text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]`}>{canceledCount}</h2>
              </div>
            </div>
          </div>
          <div className='flex items-end justify-end'>
            <input
              type="text"
              placeholder='Search by patient name, appointment date, or status'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`border py-2 px-4 rounded-[100px] text-[13px] outline-none font-Inter font-medium lg:w-[40%] xs:w-full mt-[3rem] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'}`}
            />
          </div>
          <section className={`shadow-md rounded-md w-full mt-5 overflow-auto ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            <table className='w-full text-left text-xs'>
              <thead>
                <tr className='border-b'>
                  <th className='font-medium px-5 py-4 align-middle text-[15px] font-Nunito'>Patient</th>
                  <th className='font-medium px-5 py-4 align-middle text-[15px] font-Nunito'>Appointment Date</th>
                  <th className='font-medium px-5 py-4 align-middle text-[15px] font-Nunito'>Doctor</th>
                  <th className='font-medium px-5 py-4 align-middle text-[15px] font-Nunito'>Status</th>
                  <th className='font-medium px-5 py-4 align-middle text-[15px] font-Nunito'>Actions</th>
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
                        {appointment.doctor?.title} {appointment.doctor?.firstName} {appointment.doctor?.lastName}
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
                          disabled={isPast || appointment.status === 'Accepted'} // Disable if accepted
                          className={`py-1.5 px-[20px] rounded-full text-[13px] font-Mulish font-normal ${appointment.status === 'Accepted' ? 'bg-gray-700 cursor-not-allowed' : 'bg-[#22D1EE] text-white hover:bg-[#22cfeeee]'} ${isPast ? 'cursor-not-allowed' : ''}`}
                        >
                          Schedule
                        </button>
                      </td>
                      <td
                        className='px-5 py-4 align-middle whitespace-nowrap text-[14px] font-Mulish font-normal'>
                        <button
                          className={`${appointment.status === 'Rejected' ? 'cursor-not-allowed' : ''} ${isPast ? 'cursor-not-allowed' : ''}`}
                          disabled={isPast || appointment.status === 'Rejected'}
                          onClick={() => handleCancelClick(appointment._id)}>
                          Cancel
                        </button>
                      </td>
                      <td className='px-5 py-4 align-middle whitespace-nowrap'>
                        <button onClick={() => handleViewDetailClick(appointment)}>
                          <FaEye className="h-5 text-gray-400 text-[18px]" aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="flex justify-start gap-[1rem] items-center mt-4 px-5 pb-[10px]">
              <button
                onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
                className={`px-3 py-1 rounded-md text-[13px] font-medium font-Inter leading-[20px] text-center ${page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#22D1EE] text-white hover:bg-[#22cfeeb2]'}`}
              >
                Previous
              </button>
              <span className="text-[#52575C] text-[13px] font-normal font-Inter">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(page < totalPages ? page + 1 : page)}
                className={`px-2 py-1 rounded-md text-[13px] font-medium font-Inter leading-[20px] ${page === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#22D1EE] text-white hover:bg-[#22cfeeb2]'}`}
              >
                Next
              </button>
            </div>
          </section>
        </div>
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
    </div>
  );
};

export default DoctorAppointment;
