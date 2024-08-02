import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import MiniNavbar from '../Components/MiniNavbar'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import avatar from '../../assets/avatar.png'


const PatientAppointments = () => {

  const appointments = [
    { name: "John Doe", email: "john.doe@example.com", date: "2024-06-27", visitTime: "10:00 AM", doctor: "Dr. Smith", condition: "Flu" },
    { name: "Jane Smith", email: "jane.smith@example.com", date: "2024-06-28", visitTime: "11:30 AM", doctor: "Dr. Adams", condition: "Allergies" },
    { name: "Michael Johnson", email: "michael.johnson@example.com", date: "2024-06-29", visitTime: "1:00 PM", doctor: "Dr. Brown", condition: "Checkup" },
    { name: "Emily Davis", email: "emily.davis@example.com", date: "2024-06-30", visitTime: "2:30 PM", doctor: "Dr. Miller", condition: "Back Pain" },
    { name: "Christopher Garcia", email: "christopher.garcia@example.com", date: "2024-07-01", visitTime: "9:00 AM", doctor: "Dr. Lee", condition: "Headache" },
    { name: "Daniel Wilson", email: "daniel.wilson@example.com", date: "2024-07-02", visitTime: "10:30 AM", doctor: "Dr. Thompson", condition: "Fever" },
    { name: "Sophia Martinez", email: "sophia.martinez@example.com", date: "2024-07-03", visitTime: "12:00 PM", doctor: "Dr. White", condition: "Migraine" }
  ];

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

  const filteredAppointments = appointments.filter(appointment =>
    appointment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.visitTime.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAppointments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);

  return (
    <>
      <div className='flex items-center lg:justify-between xs:justify-end'>
        <h2 className='text-[#000] text-[30px] font-bold font-Mulish lg:block xs:hidden'>Appointments</h2>
        <Link to='/patient_appointment/appointmentType' className='bg-[#22D1EE] w-[270px] rounded-[6px] py-[10px] px-[15px] text-[#fff] text-[18px] font-medium font-Mulish flex items-center justify-between'>New Appointment <FaPlus /></Link>
      </div>
      {/* TABLE */}
      <div className=' bg-[#fff] text-gray-800 rounded-[10px] pt-[1.5rem] lg:mt-[3rem] xs:mt-[2rem] mb-[3rem]'>
        <div className="overflow-x-auto">
          <div className='flex items-center justify-between px-[10px]'>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className='border py-2 px-4 rounded-[100px] bg-[#fff] text-[13px] outline-none font-Inter font-medium lg:w-[30%] xs:w-[98%]'
            />
          </div>
          <table className="min-w-full shadow-md overflow-hidden mt-[1rem]">
            <thead className='text-gray-800 bg-[#E8E8E8]'>
              <tr>
                <th className="text-left py-5 px-5 text-[14px] font-bold font-Inter leading-[20px]">Name</th>
                <th className="text-left py-5 px-5 text-[14px] font-bold font-Inter leading-[20px]">Email</th>
                <th className="text-left py-5 px-5 text-[14px] font-bold font-Inter leading-[20px]">Date</th>
                <th className="text-left py-5 px-5 text-[14px] font-bold font-Inter leading-[20px]">Visit Time</th>
                <th className="text-left py-5 px-5 text-[14px] font-bold font-Inter leading-[20px]">Doctor</th>
                <th className="text-left py-5 px-5 text-[14px] font-bold font-Inter leading-[20px]">Condition</th>
                <th className="text-left py-5 px-5 text-[14px] font-bold font-Inter leading-[20px]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((appointment, index) => (
                <tr key={index} className='bg-[#fff] text-[#52575C]'>
                  <td className="py-2 px-5 text-[14px] font-Inter font-normal leading-[20px] flex items-center gap-[10px]">
                    <img src={avatar} className="w-[32px]" alt="avatar" />
                    {appointment.name}
                  </td>
                  <td className="py-2 px-5 text-[14px] font-Inter font-normal leading-[20px]">{appointment.email}</td>
                  <td className="py-2 px-5 text-[14px] font-Inter font-normal leading-[20px]">{appointment.date}</td>
                  <td className="py-2 px-5 text-[14px] font-Inter font-normal leading-[20px]">{appointment.visitTime}</td>
                  <td className="py-2 px-5 text-[14px] font-Inter font-normal leading-[20px]">{appointment.doctor}</td>
                  <td className="py-2 px-5 text-[14px] font-Inter font-normal leading-[20px]">{appointment.condition}</td>
                  <td className="py-2 px-5 text-[14px] font-Inter font-normal leading-[20px]">
                    <div className="flex items-center space-x-4">
                      <button className="text-[#A0A4A8] text-[15px]">
                        <FaPencilAlt className="h-5" aria-hidden="true" />
                      </button>
                      <button className="text-[#FF6760] text-[15px]">
                        <FaTrashAlt className="h-5" aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex lg:justify-end xs:justify-start gap-[1rem] items-center mt-4 px-5 pb-[10px]">
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
              className={`px-2 py-1 rounded-md text-[13px] font-medium font-Inter leading-[20px] ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#22D1EE] text-white hover:bg-[#22cfeeb2]'}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PatientAppointments