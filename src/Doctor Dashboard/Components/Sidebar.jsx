import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import logo2 from "../../assets/CareSync.png";
import { RiDashboardFill } from 'react-icons/ri';
import dash from '../../assets/Icons/dashboard.svg';
import appoint from '../../assets/Icons/appointment.svg';
import message from '../../assets/Icons/message.svg';
import doctor from '../../assets/Icons/doctor.svg';
import patient from '../../assets/Icons/patient.svg';
import payment from '../../assets/Icons/payment.svg';
import setting from '../../assets/Icons/setting.svg';
import help from '../../assets/Icons/help.svg';
import logout from '../../assets/Icons/logout.svg';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const Menus = [
        { title: "Dashboard", Link: '/', icon: <img src={dash} className={`w-[20px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Appointments", Link: '/doctor_appointment', icon: <img src={appoint} className={`w-[20px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Messages", icon: <img src={message} className={`w-[20px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Doctors", Link: '/doctor_pages', icon: <img src={doctor} className={`w-[20px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Patients", Link: '/doctor_patient_page', icon: <img src={patient} className={`w-[20px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Payments", icon: <img src={payment} className={`w-[20px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Settings", spacing: true, icon: <img src={setting} className={`w-[20px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Help", icon: <img src={help} className={`w-[20px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
        { title: "Logout", icon: <img src={logout} className={`w-[20px] duration-200 ${!open && "lg:w-[22px] xs:w-[19px]"}`} /> },
    ];

    useEffect(() => {
        const activeMenuIndex = Menus.findIndex(menu => menu.Link === location.pathname);
        setActiveIndex(activeMenuIndex);
    }, [location.pathname]);

    const handleMenuClick = (index, link) => {
        navigate(link);
        setActiveIndex(index);
    };

    return (
        <div className={`h-full bg-[#fff] pt-4 ${open ? "w-[13rem]" : "lg:w-20 xs:w-12"} duration-300`} style={{ transition: 'width 0.3s ease' }}>
            <div className='fixed top-0 left-0'>
                <BsArrowLeftShort
                    className={`bg-white text-[#22D1EE] text-2xl rounded-full absolute right-[-3.5rem] top-9 border border-[#22D1EE] cursor-pointer lg:flex xs:hidden ${!open && "rotate-180 text-[22px] left-[4rem]"}`}
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
                        <li key={index} className={`text-${activeIndex === index ? '[#22D1EE]' : '[#000]'} font-Lato font-bold flex items-center gap-x-0 cursor-pointer w-[128%] p-2 hover:bg-light-white mt-2  ${menu.spacing ? "mt-6 border-t pt-[2rem] rounded-0" : "mt-2"}`} onClick={() => handleMenuClick(index, menu.Link)}>
                            <span className={`text-4xl block float-left lg:ms-[15px] xs:ms-[5px]`}>
                                {menu.icon ? menu.icon : <RiDashboardFill />}
                            </span>
                            <span className={`font-medium flex-1 duration-200 ms-[20px] text-[14px] ${!open && 'hidden'}`}>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;