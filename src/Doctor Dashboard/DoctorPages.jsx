import React, { useEffect, useState } from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import { RiMessage3Line, RiArrowDropDownLine } from 'react-icons/ri';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import avatar from '../assets/avatar.png';
import crutch from '../assets/crutch.png'
import { useTheme } from './Components/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDoctors } from '@/Redux/Actions/DoctorActions';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const DoctorPages = () => {
  const { theme, appearance } = useTheme();
  const dispatch = useDispatch();
  const { doctors = [] } = useSelector((state) => state.getAllDoctors);

  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset to the first page on new search
  };


  // Filter doctors based on search term
  const filteredDoctors = doctors.filter(doctor => {
    const { firstName, lastName, title, profession, gender, email } = doctor;

    // Convert search query and fields to lowercase for case-insensitive comparison
    const searchTerm = searchQuery.toLowerCase();
    const fullName = `${title || ''} ${firstName || ''} ${lastName || ''} ${profession || ''} ${gender || ''}`.toLowerCase();

    return (
      fullName.includes(searchTerm) ||
      (email?.toLowerCase() || '').includes(searchTerm)
    );
  });

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);


  return (
    <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12} />
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <div className='lg:px-[30px] xs:px-[10px]'>
            <div className='flex items-center flex-wrap mt-[2rem] lg:gap-[5rem] xs:gap-[1rem]'>

              <div className={`lg:w-[200px] xs:w-full py-[15px] rounded-[10px] px-[15px] flex items-center justify-start gap-[0.5rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-white' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <img src={crutch} />
                <div>
                  <h1 className='text-[14px] font-Inter font-bold leading-[20px] text-start'>All Patients</h1>
                  <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                </div>
              </div>
              <div className={`lg:w-[145px] xs:w-full py-[15px] rounded-[12px] px-[15px] flex lg:items-center lg:justify-center lg:gap-[1rem] xs:gap-[2rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-white' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <div>
                  <h1 className='text-[14px] font-Inter font-bold leading-[20px] text-start'>Online</h1>
                  <div className="flex gap-[0.5rem] mr[3rem]">
                    <h2 className='text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                    <BiUpArrowAlt className='mt-[8px] fill-green-500' />
                  </div>
                </div>
              </div>
              <div className={`lg:w-[145px] xs:w-full py-[15px] rounded-[12px] px-[15px] flex lg:items-center lg:justify-center lg:gap-[1rem] xs:gap-[2rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-white' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <div>
                  <h1 className='text-[14px] font-Inter font-bold leading-[20px] text-start'>Offline</h1>
                  <div className="flex gap-[0.5rem] mr[3rem]">
                    <h2 className='text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                    <BiDownArrowAlt className='mt-[8px] fill-red-500' />
                  </div>
                </div>
              </div>
              <div className={`rounded-[12px] flex items-center justify-center w-[150px] h-[40px] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? '' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <h1 className='text-[14px] font-Inter font-bold leading-[20px] text-justify'>Filter Patient</h1>
                <RiArrowDropDownLine />
              </div>
            </div>
            <div>
              <div className='mt-[5rem]'>
                <h1 className='text-[32px] font-bold font-Lato'>Doctors</h1>
              </div>
              <section className={`shadow-md rounded-md lg:w-full mt-[1.5rem] overflow-auto mb-[3rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <div className='flex items-end lg:justify-end xs:justify-start px-[20px]'>
                  <input
                    type="text"
                    placeholder='Search by patient name, appointment date, or status'
                    value={searchQuery}
                    onChange={handleSearch}
                    className={`border py-2 px-4 rounded-[100px] text-[13px] outline-none font-Inter font-medium lg:w-[40%] xs:w-full mt-[2rem] mb-[1rem] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'}`}
                  />
                </div>

                <table className='lg:w-full text-left text-[14px]'>
                  <thead className={`${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#E8E8E8]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    <tr className='border-b'>
                      <th className='font-medium px-5 py-4 align-middle'>Name</th>
                      <th className='font-medium px-5 py-4 align-middle'>Email</th>
                      <th className='font-medium px-5 py-4 align-middle'>Profession</th>
                      <th className='font-medium px-5 py-4 align-middle'>Gender</th>
                      <th className='font-medium px-5 py-4 align-middle'>Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentDoctors.length > 0 ? (
                      currentDoctors.map((doctor) => (
                        <tr key={doctor?._id} className='border-b'>
                          <td className='py-2 px-5 align-middle whitespace-nowrap'><span className='flex w-max gap-4 items-center capitalize font-Nunito font-normal text-[15px]'><img className='w-10 h-10 rounded-full object-cover' src={doctor?.profilePic || avatar} alt="" />{doctor?.title} {doctor?.firstName} {doctor?.lastName}</span></td>
                          <td className='px-5 py-2 align-middle whitespace-nowrap font-Nunito font-normal text-[15px]'>{doctor.email}</td>
                          <td className='px-5 py-2 align-middle whitespace-nowrap font-Nunito font-normal text-[15px]'>{doctor.profession}</td>
                          <td className='px-5 py-2 align-middle whitespace-nowrap font-Nunito font-normal text-[15px]'>{doctor.gender}</td>
                          <td className='px-5 py-2 align-middle whitespace-nowrap font-Nunito font-normal text-[15px]'><Link to={`/view_doctor_profile/${doctor?._id}`}><FaEye className="text-[16px] text-green-500 " aria-hidden="true" /></Link></td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className='p-2 text-center'>No doctors found</td>
                      </tr>
                    )}
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorPages