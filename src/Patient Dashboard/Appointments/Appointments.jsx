import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import MiniNavbar from '../Components/MiniNavbar'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import { FaCheckCircle, FaClock, FaEye, FaPencilAlt, FaTimesCircle, FaTrashAlt } from 'react-icons/fa'
import avatar from '../../assets/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllPatientAppointments, updateAppointmentStatus } from '@/Redux/Actions/BookAppointmentAction'
import { loadPatient } from '@/Redux/Actions/PatientActions'
import moment from 'moment'
import ConfirmationModal from './ConfirmationModal'
import ViewAppointmentDetail from './ViewAppointmentDetail'


const PatientAppointments = () => {
  const [page, setPage] = useState(1);
  const [showApproveAppointment, setShowApproveAppointment] = useState(false); // State for controlling overlay
  const [showAppointmentDetail, setShowAppointmentDetail] = useState(false); // State for controlling overlay
  const [selectedAppointment, setSelectedAppointment] = useState(null); // State for selected appointment
  const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items per page
  const [searchTerm, setSearchTerm] = useState(''); // Search term state
  const [showModal, setShowModal] = useState(false); // State for showing the modal
  const [appointmentToCancel, setAppointmentToCancel] = useState(null); // State to store the appointment to be canceled

  // Polling interval (e.g., every 10 seconds)
  const POLLING_INTERVAL = 10000;
  const { id } = useParams();
  const patientId = id; // Get doctor ID from URL
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.loadPatient.patient);
  const { appointments = [] } = useSelector((state) => state.patientAppointments);

  useEffect(() => {
    if (id) {
      dispatch(loadPatient(id));
    }
  }, [dispatch, id]);

  // Polling appointments to get the latest status
  useEffect(() => {
    const interval = setInterval(() => {
      if (patientId) {
        dispatch(getAllPatientAppointments(patientId));
      }
    }, POLLING_INTERVAL);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [dispatch, patientId]);

  // Helper function to check if the appointment date has passed
  const isPastAppointment = (appointmentDate) => {
    return moment().isAfter(appointmentDate);
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
    const { firstName, lastName, title } = appointment.doctor || {};
    const { appointmentDate, status } = appointment;

    // Split search term into individual words
    const searchWords = searchTerm.toLowerCase().split(/\s+/);

    // Function to check if any of the search words are included in the field
    const containsAllSearchWords = (field) => {
      return searchWords.every(word => field.toLowerCase().includes(word));
    };

    // Combine firstName and lastName for the patient name
    const doctorFullName = `${title || ''} ${firstName || ''} ${lastName || ''}`;

    // Format appointment date/time
    const formattedDateTime = moment(appointmentDate).format('DD/MM/YYYY - h:mm A').toLowerCase();

    return (
      (firstName && lastName && containsAllSearchWords(doctorFullName)) || // Check full name
      (formattedDateTime.includes(searchTerm.toLowerCase())) || // Check date/time
      (status && containsAllSearchWords(status)) // Check status
    );
  });


  // Reverse the filtered appointments to display the newest first
  const reversedAppointments = [...filteredAppointments].reverse();

  // Paginate appointments
  const totalPages = Math.ceil(reversedAppointments.length / itemsPerPage);
  const indexOfLastAppointment = page * itemsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - itemsPerPage;
  const currentAppointments = reversedAppointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

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
    <>
      <div className='flex items-center lg:justify-between xs:justify-end'>
        <h2 className='text-[#000] text-[30px] font-bold font-Mulish lg:block xs:hidden'>Appointments</h2>
        <Link to={`/patient_appointment/verifyIdentity/${patient?._id}`} className='bg-[#22D1EE] w-[270px] rounded-[6px] py-[10px] px-[15px] text-[#fff] text-[18px] font-medium font-Mulish flex items-center justify-between'>New Appointment <FaPlus /></Link>
      </div>
      {/* TABLE */}
      <div className=' bg-[#fff] text-gray-800 rounded-[10px] pt-[1.5rem] lg:mt-[3rem] xs:mt-[2rem] mb-[3rem]'>
        <div className="overflow-x-auto">
          <div className='flex items-center justify-between px-[10px]'>
            <input
              type="text"
              placeholder='Search by doctor name, appointment date, or status'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='border py-2 px-4 rounded-[100px] bg-[#fff] text-[13px] outline-none font-Inter font-medium lg:w-[40%] xs:w-[98%]'
            />
          </div>
          <section className={`shadow-md rounded-md w-full mt-5 overflow-auto`}>
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
    </>
  )
}

export default PatientAppointments