import React, { useEffect, useState } from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import crutch from '../assets/crutch.png'
import { BsFillHeartPulseFill } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"
import { FaUserDoctor } from "react-icons/fa6"
import { LuMessagesSquare } from "react-icons/lu";
import bank from '../assets/bank.png'
import avatar from '../assets/avatar.png';
import { useTheme } from './Components/ThemeContext';
import { useParams } from 'react-router-dom';
import { loadDoctor } from '@/Redux/Actions/DoctorActions';
import { getAllAppointments } from '@/Redux/Actions/BookAppointmentAction';
import { useDispatch, useSelector } from 'react-redux';

const PatientPages = () => {
  const { theme, appearance } = useTheme();
  const { id } = useParams();
  const doctorId = id;
  const dispatch = useDispatch();
  const loadDoc = useSelector((state) => state.loadDoctor.doctor);
  const { appointments = [] } = useSelector((state) => state.appointments);

  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (doctorId) {
      dispatch(getAllAppointments(doctorId));
    }
  }, [dispatch, doctorId]);


  useEffect(() => {
    if (id) {
      dispatch(loadDoctor(id));
    }
  }, [dispatch, id]);

  // Filter appointments based on search term
  const filteredAppointments = appointments.filter(appointment => {
    const { firstName, lastName, userName } = appointment.patient || {};

    // Split search term into individual words
    const searchWords = searchTerm.toLowerCase().split(/\s+/);

    // Function to check if any of the search words are included in the field
    const containsAllSearchWords = (field) => {
      return searchWords.every(word => field.toLowerCase().includes(word));
    };

    // Combine firstName and lastName for the patient name
    const patientFullName = `${firstName || ''} ${lastName || ''}`;

    return (
      (firstName && lastName && containsAllSearchWords(patientFullName)) || // Check full name
      (userName && containsAllSearchWords(userName)) // Check username
    );
  });

  // Filter to remove duplicate patients
  const uniquePatients = filteredAppointments.reduce((acc, current) => {
    const x = acc.find(patient => patient.patient._id === current.patient._id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  const totalPages = Math.ceil(uniquePatients.length / patientsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * patientsPerPage;
  const currentPatients = uniquePatients.slice(startIndex, startIndex + patientsPerPage);

  return (
    <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh]  overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12} />
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}

          {/*FILTER BOX */}

          <div className='lg:px-[50px]  xs:px-[10px]'>
            <div className='flex justify-end mt-[20px] '>

              <div className={`w-[190px] h-[40px] flex items-center justify-between rounded-[12px] px-[20px] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <h1 className='text-[14px] font-Inter font-bold leading-[20px]'>Filter Patient</h1>
                <RiArrowDropDownLine className='text-[22px]' />
              </div>
            </div>
            {/*ENDS HERE */}

            {/*DOCTOR'S STATS */}

            <div className='flex items-center justify-between lg:gap-0 xs:gap-[1rem] flex-wrap mt-[2rem] lg:ms-[1rem]'>
              <div className={`lg:w-[250px] xs:w-full py-[15px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <img src={crutch} />
                <div>
                  <h1 className='text-[14px] font-Inter font-bold leading-[20px] text-start'>All Patients</h1>
                  <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                </div>
              </div>
              <div className={`lg:w-[145px] xs:w-full py-[15px] rounded-[12px] px-[20px] flex lg:items-center lg:justify-center gap-[1rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <div>
                  <h1 className='text-[14px] font-Inter font-bold leading-[20px] text-start'>Online</h1>
                  <div className="flex gap-[0.5rem] mr[3rem]">
                    <h2 className='text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                    <BiUpArrowAlt className='mt-[8px] fill-green-500' />
                  </div>
                </div>
              </div>
              <div className={`lg:w-[145px] xs:w-full py-[15px] rounded-[12px] px-[20px] flex lg:items-center lg:justify-center xs:items-start xs:justify-start gap-[1rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <div>
                  <h1 className='text-[14px] font-Inter font-bold leading-[20px] text-start'>Offline</h1>
                  <div className="flex gap-[0.5rem] mr[3rem]">
                    <h2 className='text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                    <BiDownArrowAlt className='mt-[8px] fill-red-500' />
                  </div>
                </div>
              </div>
              <div className={`lg:w-[145px] xs:w-full lg:py-[5px] xs:py-[15px] rounded-[12px] px-[20px] flex g:items-center lg:justify-center gap-[1rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#F8DEBD]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <div>
                  <h1 className='text-[13px] font-Inter font-bold leading-[20px] text-center'>Currently attending to</h1>
                  <div className="flex lg:items-center lg:justify-center gap-[0.5rem] ">
                    <h2 className='text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                    <BsFillHeartPulseFill className='mt-[8px] fill-red-500' />
                  </div>
                </div>
              </div>

              <div className={`lg:w-[145px] xs:w-full lg:py-[5px] xs:py-[15px] rounded-[12px] px-[20px] flex g:items-center lg:justify-center gap-[1rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#D0FBFF]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>

                <div>
                  <h1 className='text-[14px] font-Inter font-bold leading-[20px] text-center'>Completed attended</h1>
                  <div className="flex gap-[0.5rem] lg:ms-[2rem]">
                    <h2 className='text-[20px] font-Inter font-normal leading-[24px] mt-[5px]'>0</h2>
                    <BiDownArrowAlt className='mt-[8px] fill-red-500' />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='mt-[5rem] lg:ms-[3.5rem] px-[10px]'>
            <h1 className='text-[2rem] font-Inter font-bold leading-[10px]'> Patient</h1>
            <div className='flex items-end justify-end px-[50px] mt-5'>
              <input
                type="text"
                placeholder='Search by patient name, appointment date, or status'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`border py-2 px-4 rounded-[100px] text-[13px] outline-none font-Inter font-medium lg:w-[40%] xs:w-full mt-[3rem] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'}`}
              />
            </div>
            {!uniquePatients.length && (
              <h1 className='lg:w-[1000px] lg:text-[1.5rem] xs:text-[1.2rem] font-Inter font-bold leading-[35px] mt-[3rem]'>No any attending patient yet, once you start attending to any patient, they will appear in the table below </h1>
            )}
          </div>

          {currentPatients.length > 0 && (
            <div className={`lg:w-[90%] xs:w-[95%] lg:ms-[4rem] xs:ms-[0.5rem] mt-[1rem] rounded-[10px] mb-[3rem] ${theme === 'dark' ? 'bg-gray-800 text-white' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : 'text-gray-800'}`}>
              <table className=" w-full table-auto">
                <thead className={`${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#E8E8E8]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  <tr>
                    <th className='px-4 py-3 text-[15px] font-semibold font-Nunito tracking-wide text-left'>Patient Name</th>
                    <th className='px-4 py-3 text-[15px] font-semibold font-Nunito tracking-wide text-left'>User Name</th>
                    <th className='px-4 py-3 text-[15px] font-semibold font-Nunito tracking-wide text-left'>Inbox</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPatients.map((det, index) => (
                    <tr key={det?._id} className='border-b '>
                      <td className='py-3 px-5 whitespace-nowrap text-[15px] font-Nunito font-normal'><span className='flex w-max gap-4 items-center'><img className='w-[40px] h-[40px] rounded-full object-cover' src={det?.patient?.profilePic || avatar} /> {det?.patient?.firstName} {det?.patient?.lastName}</span></td>
                      <td className='px-5 py-3 whitespace-nowrap text-[15px] font-Nunito font-normal'>{det?.patient?.userName}</td>
                      <td className='px-5 py-2 align-middle whitespace-nowrap text-[15px] font-Nunito font-normal'><LuMessagesSquare className="text-[20px] text-green-500 " aria-hidden="true" /></td>
                    </tr>
                  ))}
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PatientPages