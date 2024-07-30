import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import firstaid from '../assets/first aid.png';
import crutch from '../assets/crutch.png';
import operationtheater from '../assets/operation theater.png';
import bank from '../assets/bank.png';
import AreaChartHero from './Components/Charts/AreaChartHero';
import LineChartHero from './Components/Charts/LineChartHero';
import LineChartHero2 from './Components/Charts/LineChartHero2';
import DashboardTable from './DasboardTable';
import { useTheme } from './Components/ThemeContext';
import Chatbot from './Components/Chatbot';
import { IoHelpOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';


const DoctorDashboard = () => {
    const { theme, appearance } = useTheme();
    const [user, setUser] = useState(false);
    const doctor = useSelector(state => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);
    

    useEffect(() => {
        console.log(doctor);
    }, [doctor]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {
                doctor ? (
                    <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        <Sidebar />
                        <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto ' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                            <Navbar messageCount={5} notificationCount={12} />
                            <div className='lg:px-[30px] xs:px-[10px] mb-[3rem]'>
                                <div className='flex flex-wrap items-center mt-[1rem] lg:gap-[2rem] xs:gap-[1rem]'>
                                    <div className={`lg:w-[250px] xs:w-full lg:h-[88px] xs:h-[75px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                        {/* xs:w-[169px] */}
                                        <img className='lg:w-[40px] xs:w-[30px]' src={firstaid} alt="first aid" />
                                        <div>
                                            <h1 className='xs:text-[13px] lg:text-[14px] font-Inter font-bold leading-[20px] text-start'>Appointments</h1>
                                            <h2 className={`text-[#22D1EE] xs:text-[14px] lg:text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]`}>213</h2>
                                        </div>
                                    </div>
                                    <div className={`lg:w-[250px] xs:w-full lg:h-[88px] xs:h-[75px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]  ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                        {/* xs:w-[169px] */}
                                        <img className='lg:w-[40px] xs:w-[30px]' src={crutch} alt="crutch" />
                                        <div>
                                            <h1 className='xs:text-[13px] lg:text-[14px] font-Inter font-bold leading-[20px] text-start'>New Patients</h1>
                                            <h2 className='text-[#22D1EE] xs:text-[14px] lg:text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>104</h2>
                                        </div>
                                    </div>
                                    <div className={`lg:w-[250px] xs:w-full lg:h-[88px] xs:h-[75px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                        {/* xs:w-[169px] */}
                                        <img className='lg:w-[40px] xs:w-[30px]' src={operationtheater} alt="operation theater" />
                                        <div>
                                            <h1 className='xs:text-[13px] lg:text-[14px] font-Inter font-bold leading-[20px] text-start'>Operations</h1>
                                            <h2 className='text-[#22D1EE] xs:text-[14px] lg:text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>24</h2>
                                        </div>
                                    </div>
                                    <div className={`lg:w-[250px] xs:w-full lg:h-[88px] xs:h-[75px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                        {/* xs:w-[169px] */}
                                        <img className='lg:w-[40px] xs:w-[30px]' src={bank} alt="bank" />
                                        <div>
                                            <h1 className='xs:text-[13px] lg:text-[14px] font-Inter font-bold leading-[20px] text-start'>Your Earnings</h1>
                                            <h2 className='text-[#22D1EE] xs:text-[14px] lg:text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>$ 12,174</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className={`rounded-[10px] py-[20px] lg:px-[10px] xs:px-[5px] mt-[3rem] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                    <AreaChartHero />
                                </div>
                                <div className='lg:flex items-center gap-[2rem]'>
                                    <div className={`mt-[3rem] rounded-[10px] py-[30px] lg:px-[30px] xs:px-[10px] lg:w-[50%] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                        <LineChartHero />
                                    </div>
                                    <div className={`mt-[3rem] rounded-[10px] py-[30px] lg:px-[30px] xs:px-[10px] lg:w-[50%] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                        <LineChartHero2 />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <DashboardTable />
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='flex justify-center items-center h-screen text-start'>
                            <div className='bg-[#fbfbfbfb] py-[25px] px-[15px]'>
                                <h1 className='lg:text-[28px] xs:text-[25px] font-bold font-Nunito lg:leading-[46px]'>Hang tight, we're reviewing your application now</h1>
                                <hr className='w-full h-[2px] bg-[#d6d6d6] mt-3' />
                                <p className='text-[16px] font-Nunito font-medium mt-[1rem]'>Thank you so much for taking time to submit your application to join caresync as a medical practitioner!</p>
                                <p className='text-[16px] font-Nunito font-medium mt-[0.8rem]'>Expect a decision back to you very soon. In the interim, please reach out to out Support Team with any questions via the Need</p>
                                <p className='text-[16px] font-Nunito font-medium lg:mt-o xs:mt-2'>Help? button and we will get back to you as soon as possible.</p>
                            </div>
                        </div>
                        <div className='fixed z-50 lg:right-[3rem] xs:right-[1rem] lg:bottom-[2rem] xs:bottom-[2rem]'>
                            <div>
                                <div
                                    className='w-[46px] text-[24px] py-[10px] text-center px-[11px] text-white bg-[#17B978] rounded-[100px] cursor-pointer'
                                    onClick={toggleChat}
                                >
                                    <IoHelpOutline />
                                </div>

                                {isOpen && (
                                    <div className="rounded-[10px] shadow-lg fixed lg:bottom-20 xs:bottom-[6rem] lg:right-12 xs:right-0 z-50 flex flex-col">
                                        <iframe src="https://app.fastbots.ai/embed/clxz8mllh00aunibbb63ntw1p" className='rounded-[10px] lg:w-[400px] lg:h-[80vh] xs:w-[378px] xs:h-[73vh]'></iframe>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default DoctorDashboard;
