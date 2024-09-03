import React, { useEffect, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Caresync from '../../assets/CareSync.png'
import { MdDashboard, MdHelpOutline } from "react-icons/md"
import { RiCalendarEventLine, RiMessage3Line } from "react-icons/ri"
import { IoSettingsOutline } from "react-icons/io5"
import { TbLogout2 } from "react-icons/tb"
import { FiPieChart } from "react-icons/fi"
import { FaBoxArchive } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux"
import { loadPatient, patient_logout } from '../../Redux/Actions/PatientActions';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaBars } from 'react-icons/fa'


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(patient_logout(navigate));
  };

  const patient = useSelector((state) => state.loadPatient.patient);

  useEffect(() => {
    dispatch(loadPatient());
  }, [dispatch]);

  const navItems = [
    { path: `/patient_dashboard/${patient?._id}`, icon: <MdDashboard />, name: 'Dashboard' },
    { path: '/patient_calendar', icon: <RiCalendarEventLine />, name: 'Calendar' },
    { path: '/patient_message', icon: <RiMessage3Line />, name: 'Messages' },
    { path: `/patient_appointment/appointments/${patient?._id}`, icon: <FiPieChart />, name: 'Appointment' },
    { path: `/patient_settings/patient_profile/${patient?._id}`, icon: <IoSettingsOutline />, name: 'Settings' },
    { path: `/health_records/${patient?._id}`, icon: <FaBoxArchive />, name: 'Records' },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div className='lg:mr-[5rem] fixed'>
      {/* Toggle Button for Small Screens */}
      <div className="lg:hidden xs:flex mt-4 ps-2">
        <button onClick={toggleSidebar} >
          <FaBars className="text-[22px]" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`bg-[#fff] shadow-lg lg:w-20 xs:w-[13rem] lg:pt-[1.2rem] lg:block ${isOpen ? 'block' : 'hidden'} lg:h-full xs:h-screen z-50 lg:mt-0 xs:mt-2`}>
        <div className=''>
          <img src={Caresync} className='lg:mx-auto lg:w-auto xs:w-[100px]' />
        </div>
        <div className='lg:mt-[1.2rem] xs:mt-[1rem] space-y-[1.5rem] ms-[1.5rem]'>
          {navItems.map(item => (
            <div key={item.path} className='relative group'>
              <div className='flex items-center gap-[1rem]'>
                <Link to={item.path} className={location.pathname === item.path ? 'text-[#22D1EE]' : 'text-[#707070]'}>
                  <div className={`text-[25px] ${location.pathname === item.path ? 'bg-[#000000] w-[55px] py-[10px] px-[15px] rounded-[12px] ms-[-0.8rem]' : ''}`}>
                    {item.icon}
                  </div>
                </Link>
                <Link to={item.path}>
                  <span className='lg:hidden xs:block font-Mulish font-medium text-[14px]'>
                    {item.name}
                  </span>
                </Link>
              </div>
              <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity lg:block xs:hidden'>
                {item.name}
              </span>
            </div>
          ))}
          <div className='relative group cursor-pointer' onClick={handleLogout}>
            <div className='text-[25px] mt-[2rem] text-[#707070]'>
              <TbLogout2 />
            </div>
            <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
              Logout
            </span>
          </div>
          <div className='relative group'>
            <Link to='/' className={location.pathname === '' ? 'text-blue-500' : 'text-[#707070]'}>
              <div className={`text-[25px] mt-[6rem] ${location.pathname === '' ? 'bg-[#17B978]' : ''}`}>
                <MdHelpOutline />
              </div>
            </Link>
            <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
              Help
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;