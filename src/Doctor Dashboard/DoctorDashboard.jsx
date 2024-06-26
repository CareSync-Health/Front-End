import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import firstaid from '../assets/first aid.png'
import crutch from '../assets/crutch.png'
import operationtheater from '../assets/operation theater.png'
import bank from '../assets/bank.png'

const DoctorDashboard = () => {
  return (
    <div className='flex bg-[#E2F3F5]'>
        <Sidebar/>
      <div className='w-full'>
        <Navbar messageCount={5} notificationCount={12}/>
        <div className='px-[30px]'>
          <div className='flex items-center mt-[1rem] gap-[2rem]'>
            <div className='bg-white w-[250px] h-[88px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]'>
              <img src={firstaid} />
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Appointments</h1>
                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>213</h2>
              </div>
            </div>
            <div className='bg-white w-[250px] h-[88px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]'>
              <img src={crutch} />
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>New Patients</h1>
                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>104</h2>
              </div>
            </div>
            <div className='bg-white w-[250px] h-[88px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]'>
              <img src={operationtheater} />
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Operations</h1>
                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>24</h2>
              </div>
            </div>
            <div className='bg-white w-[250px] h-[88px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]'>
              <img src={bank} />
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Your Earnings</h1>
                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>$ 12,174</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard