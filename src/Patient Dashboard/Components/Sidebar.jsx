import React from 'react'
import { useLocation, Link, useNavigate} from 'react-router-dom'
import Caresync from '../../assets/CareSync.png'
import { MdDashboard, MdHelpOutline } from "react-icons/md"
import { RiCalendarEventLine, RiMessage3Line } from "react-icons/ri"
import { IoSettingsOutline } from "react-icons/io5"
import { TbLogout2 } from "react-icons/tb"
import { FiPieChart } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { patient_logout } from '../../Redux/Actions/PatientActions';

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
          dispatch(patient_logout(navigate));
          navigate('/patientAuth')
  };

  const navItems = [
    { path: '/patient_dashboard', icon: <MdDashboard />, name: 'Dashboard' },
    { path: '/patient_calendar', icon: <RiCalendarEventLine />, name: 'Calendar' },
    { path: '/patient_message', icon: <RiMessage3Line />, name: 'Messages' },
    { path: '/patient_appointment', icon: <FiPieChart />, name: 'Appointment' },
    { path: '/patient_settings/patient_profile', icon: <IoSettingsOutline />, name: 'Settings' },
  ]

  return (
    <div className='bg-[#fff] shadow-lg w-20 pt-[1.2rem] lg:block xs:hidden'>
      <img src={Caresync} className='mx-auto' />
      <div className='mt-[1.2rem] space-y-[2rem] ms-[1.5rem]'>
        {navItems.map(item => (
          <div key={item.path} className='relative group'>
            <Link to={item.path} className={location.pathname === item.path ? 'text-[#22D1EE]' : 'text-[#707070]'}>
              <div className={`text-[25px] ${location.pathname === item.path ? 'bg-[#000000] w-[55px] py-[10px] px-[15px] rounded-[12px] ms-[-0.8rem]' : ''}`}>
                {item.icon}
              </div>
            </Link>
            <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
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
            <div className={`text-[25px] mt-[7rem] ${location.pathname === '' ? 'bg-[#17B978]' : ''}`}>
              <MdHelpOutline />
            </div>
          </Link>
          <span className='absolute left-[2rem] top-0 transform -translate-y-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity'>
            Help
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
