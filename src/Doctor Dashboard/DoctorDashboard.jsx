import React from 'react';
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

const DoctorDashboard = () => {

//   const products = [
//     {
//       id: 1,
//       name: 'First Aid',
//       email: 'jephthahndukwe@gmail.com',
//       date: '10/10/2024',
//       visitTime: '09:15-09:45am',
//       doctor: 'Dr. Jacob Jones',
//       condition: "Mumps Stage II"
//     }
//   ]

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 h-[99.9vh] overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <Navbar messageCount={5} notificationCount={12} />
                <div className='px-[30px]'>
                    <div className='flex items-center mt-[1rem] gap-[2rem]'>
                        <div className='bg-white w-[250px] h-[88px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]'>
                            <img src={firstaid} alt="first aid" />
                            <div>
                                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Appointments</h1>
                                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>213</h2>
                            </div>
                        </div>
                        <div className='bg-white w-[250px] h-[88px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]'>
                            <img src={crutch} alt="crutch" />
                            <div>
                                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>New Patients</h1>
                                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>104</h2>
                            </div>
                        </div>
                        <div className='bg-white w-[250px] h-[88px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]'>
                            <img src={operationtheater} alt="operation theater" />
                            <div>
                                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Operations</h1>
                                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>24</h2>
                            </div>
                        </div>
                        <div className='bg-white w-[250px] h-[88px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]'>
                            <img src={bank} alt="bank" />
                            <div>
                                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Your Earnings</h1>
                                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>$ 12,174</h2>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#fff] rounded-[10px] py-[20px] px-[10px] mt-[3rem]">
                        <AreaChartHero />
                    </div>
                    <div className='flex items-center gap-[2rem]'>
                        <div className='mt-[3rem] bg-[#fff] rounded-[10px] py-[30px] px-[30px] w-[50%]'>
                            <LineChartHero />
                        </div>
                        <div className='mt-[3rem] bg-[#fff] rounded-[10px] py-[30px] px-[30px] w-[50%]'>
                            <LineChartHero2 />
                        </div>
                    </div>
                </div>
                <div className="bg-[#fff] w-[95%] rounded-[10px] pt-[1.5rem] mt-[3rem] ms-[2rem] mb-[2rem]">
                    <DashboardTable/>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;



