import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';
import { FaEllipsisH } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/CareSync.png';
import { BsArrowLeftShort } from 'react-icons/bs';
import dash from '../../assets/Icons/dashboard.svg';
import appoint from '../../assets/Icons/appointment.svg';
import message from '../../assets/Icons/message.svg';
import doctor from '../../assets/Icons/doctor.svg';
import patient from '../../assets/Icons/patient.svg';
import payment from '../../assets/Icons/payment.svg';
import setting from '../../assets/Icons/setting.svg';
import help from '../../assets/Icons/help.svg';
import logout from '../../assets/Icons/logout.svg';
import { useTheme } from './ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { doctor_logout } from '../../Redux/Actions/DoctorActions';

const Sidebar = () => {

    const { theme, appearance } = useTheme();
    const [open, setOpen] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
          dispatch(doctor_logout(navigate));
          navigate('/doctorAuth')
          console.log('clicking fine but not working');
      };

    const Menus = [
        { title: "Dashboard", Link: '/doctor_dashboard', icon: <img src={dash} className={`lg:w-[22px] xs:w-[35px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Appointments", Link: '/doctor_appointment', icon: <img src={appoint} className={`lg:w-[22px] xs:w-[35px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Messages", Link: '/doctor_message', icon: <img src={message} className={`lg:w-[20px] xs:w-[35px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Doctors", Link: '/doctor_pages', icon: <img src={doctor} className={`lg:w-[20px] xs:w-[35px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Patients", Link: '/doctor_patient_page', icon: <img src={patient} className={`lg:w-[20px] xs:w-[35px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Payments", Link: '/doctor_payment_way', icon: <img src={payment} className={`lg:w-[20px] xs:w-[35px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Settings", Link: '/doctor_settings/general_setting', spacing: true, icon: <img src={setting} className={`lg:w-[20px] xs:w-[35px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Help", icon: <img src={help} className={`lg:w-[20px] xs:w-[35px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
    ];

    useEffect(() => {
        const activeMenuIndex = Menus.findIndex(menu => menu.Link === location.pathname);
        setActiveIndex(activeMenuIndex);
    }, [location.pathname]);

    const handleMenuClick = (index, link) => {
        if (link) {
            navigate(link);
        }
        setActiveIndex(index);
        setShowMore(false); // Close the "show more" menu after clicking a menu item
    };

    return (
        <>
            {/* DESKTOP SIDEBAR */}
            <div className='lg:block xs:hidden'>
                <div className={`h-full pt-4 ${open ? "w-[13rem]" : "w-20"} duration-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'}`} style={{ transition: 'width 0.3s ease' }}>
                    <div className='fixed top-0 left-0'>
                        <BsArrowLeftShort
                            className={`text-[#22D1EE] text-2xl rounded-full absolute right-[-3rem] top-9 border border-[#22D1EE] cursor-pointer lg:flex xs:hidden ${theme === 'dark' ? 'bg-gray-700 text-white' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${!open && "rotate-180 text-[22px] left-[4.3rem]"}`}
                            onClick={() => setOpen(!open)}
                        />
                        <div className='inline-flex'>
                            {open ?
                                <img src={logo} className='w-40' alt="logo" />
                                :
                                <img src={logo2} className='w-16' alt="logo2" />
                            }
                        </div>
                        <div>
                            <h1 className={`text-[#A0A4A8] text-[14px] font-Lato font-normal ms-[1.5rem] mt-[0.5rem] ${!open && "hidden"}`}>MEDICINE</h1>
                        </div>

                        <ul className='pt-2'>
                            {Menus.map((menu, index) => (
                                <li
                                    key={index}
                                    className={`font-Lato font-bold flex items-center gap-x-0 cursor-pointer w-[125%] p-2 hover:bg-light-white mt-2 
                                        ${menu.spacing ? "mt-6 border-t pt-[2rem] rounded-0" : "mt-2"} 
                                        ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} 
                                        ${activeIndex === index 
                                            ? (appearance === 'green' ? 'text-[#17B978]' : 
                                               appearance === 'blue' ? 'text-[#22D1EE]' : 
                                               appearance === 'accent' ? 'text-[#A6FFF2]' : 
                                               'text-[#22D1EE]') // Active color
                                            : (theme === 'dark' ? 'text-white' : 'text-gray-800')} // Non-active color
                                    `}
                                    onClick={() => handleMenuClick(index, menu.Link)}
                                >
                                    <span className={`text-4xl block float-left lg:ms-[15px] xs:ms-[5px]`}>
                                        {menu.icon ? menu.icon : <RiDashboardFill />}
                                    </span>
                                    
                                    <span className={`font-medium flex-1 duration-200 ms-[18px] text-[14px] ${!open && 'hidden'}`}>
                                        {menu.title}
                                    </span>
                                </li>
                            ))}
                            <li className='flex items-center gap-x-0 cursor-pointer mt-4 ms-2' onClick={handleLogout}>
                                <span className='text-4xl block float-left lg:ms-[15px] xs:ms-[5px]'><img src={logout} className={`lg:w-[20px] xs:w-[35px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /></span>
                                <h2  className={`font-medium flex-1 duration-200 ms-[18px] text-[14px] ${!open && 'hidden'}`}>Logout</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SMALL SCREEN SIDEBAR */}
            <div className={`lg:hidden fixed flex justify-between items-center z-50 insert-0 shadow-2xl bottom-0 w-full h-[65px] px-5 py-2 ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {Menus.slice(0, 4).map((menu, index) => (
                        <li
                            key={index}
                            onClick={() => handleMenuClick(index, menu.Link)}
                            className={`list-none mx-2 mt-2 ${activeIndex === index 
                                ? (appearance === 'green' ? 'text-[#17B978]' : 
                                   appearance === 'blue' ? 'text-[#22D1EE]' : 
                                   appearance === 'accent' ? 'text-[#A6FFF2]' : 
                                   'text-[#22D1EE]') // Active color
                                : (theme === 'dark' ? 'text-white' : 'text-gray-800')}`} // Non-active color
                        >
                            <span className='text-[30px]'>
                                {menu.icon ? menu.icon : <RiDashboardFill />}
                            </span>
                        </li>
                    ))}
                    <li
                        onClick={() => setShowMore(!showMore)}
                        className='list-none mx-2 text-gray-500 mt-2'
                    >
                        <FaEllipsisH className='text-[30px]' />
                    </li>

                {/* More Menu for Mobile */}
                {showMore && (
                    <div className={`lg:hidden fixed inset-0 z-50 shadow-md h-[84vh] ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'}`}>
                        <div className='flex flex-col justify-center items-center h-full'>
                            {Menus.slice(4).map((menu, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleMenuClick(index + 4, menu.Link)}
                                    className={`list-none py-2 mx-2 mt-[2rem]                                     
                                        ${activeIndex === index + 4 
                                            ? (appearance === 'green' ? 'text-[#17B978]' : 
                                               appearance === 'blue' ? 'text-[#22D1EE]' : 
                                               appearance === 'accent' ? 'text-[#A6FFF2]' : 
                                               'text-[#22D1EE]') // Active color
                                            : (theme === 'dark' ? 'text-white' : 'text-gray-800')} // Non-active color
                                    `}
                                >
                                    <span className='text-2xl'>
                                        {menu.icon ? menu.icon : <RiDashboardFill />}
                                    </span>
                                    {/* <span className='font-medium flex-1 duration-200 ms-[20px] text-[14px]'>
                                        {menu.title}
                                    </span> */}
                                </li>
                            ))}
                            <span className='text-2xl -ms-2 mt-[3rem]'><img src={logout} className={`cursor-pointer lg:w-[20px] xs:w-[35px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} onClick={handleLogout} /></span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Sidebar;