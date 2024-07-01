import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import crutch from '../assets/crutch.png'
import { BsFillHeartPulseFill } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"
import { FaUserDoctor } from "react-icons/fa6"
import bank from '../assets/bank.png'

const PatientPages = () => {
  return (
    <div className='flex'>
        <Sidebar/>
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh]  overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12}/>
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          
          {/*FILTER BOX */}

          <div className='lg:px-[50px]  xs:px-[10px]'>
            <div className='flex justify-end mt-[20px] '>
    
              <div className='bg-white w-[190px] h-[40px] flex items-center justify-between rounded-[12px] px-[20px]'>
                <h1 className='text-[#17B978] text-[14px] font-Inter font-bold leading-[20px]'>Filter Patient</h1>
                <RiArrowDropDownLine className='text-[22px]' />
              </div>
            </div>
 {/*ENDS HERE */}

  {/*DOCTOR'S STATS */}

          <div className='flex items-center justify-between lg:gap-0 xs:gap-[1rem] flex-wrap mt-[2rem] lg:ms-[1rem]'>
            <div className='bg-white lg:w-[250px] xs:w-full py-[15px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]'>
              <img src={crutch} />
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>All Patients</h1>
                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
              </div>
            </div>
            <div className='bg-white lg:w-[145px] xs:w-full py-[15px] rounded-[12px] px-[20px] flex lg:items-center lg:justify-center gap-[1rem]'>
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Online</h1>
                <div className="flex gap-[0.5rem] mr[3rem]">
                <h2 className='text-[#000] text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                <BiUpArrowAlt className='mt-[8px] fill-green-500' />
                </div>
              </div>
            </div>
            <div className='bg-white lg:w-[145px] xs:w-full py-[15px] rounded-[12px] px-[20px] flex lg:items-center lg:justify-center xs:items-start xs:justify-start gap-[1rem]'>
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Offline</h1>
                <div className="flex gap-[0.5rem] mr[3rem]">
                <h2 className='text-[#000] text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                <BiDownArrowAlt className='mt-[8px] fill-red-500' />
                </div>
              </div>
            </div>
            <div className='bg-[#F8DEBD] lg:w-[145px] xs:w-full lg:py-[5px] xs:py-[15px] rounded-[12px] px-[20px] flex g:items-center lg:justify-center gap-[1rem]'>
                <div>
               <h1 className='text-[#25282B] text-[13px] font-Inter font-bold leading-[20px] text-center'>Currently attending to</h1>
             <div className="flex lg:items-center lg:justify-center gap-[0.5rem] ">
            <h2 className='text-[#000] text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
              <BsFillHeartPulseFill  className='mt-[8px] fill-red-500' />
                    </div>
                </div>
           </div>

          <div className='bg-[#D0FBFF] lg:w-[145px] xs:w-full py-[15px] rounded-[12px] px-[20px] flex g:items-center lg:justify-center gap-[1rem]'>
  
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-center'>Completed attended</h1>
                <div className="flex gap-[0.5rem] lg:ms-[2rem]">
                  <h2 className='text-[#000] text-[20px] font-Inter font-normal leading-[24px] mt-[5px]'>0</h2>
                  <BiDownArrowAlt className='mt-[8px] fill-red-500' />
                </div>
              </div>
            </div>

      

            
          </div>

           {/*ENDS HERE */}

            {/*TABLE PART */}
            
          </div>
          <div className='mt-[5rem] lg:ms-[3.5rem] px-[10px]'>
            <h1 className='text-[#25282B] text-[2rem] font-Inter font-bold leading-[10px]'> Patient</h1>
            <h1 className='text-[#25282B] lg:w-[1000px] lg:text-[1.5rem] xs:text-[1.2rem] font-Inter font-bold leading-[35px] mt-[3rem]'>No any attending patient yet, once you start attending to any patient, they will appear in the table below </h1>
          </div>
          <div className='bg-white lg:w-[90%] xs:w-[95%] lg:ms-[4rem] xs:ms-[0.5rem] mt-[3rem] rounded-[10px] mb-[3rem]'>
            <table className=" w-full table-auto">
              <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr>
                  <th className='px-4 py-3 text-sm font-semibold tracking-wide text-left'>Patient Name</th>
                  <th className='px-4 py-3 text-sm font-semibold tracking-wide text-left'>Email</th>
                  <th className='px-4 py-3 text-sm font-semibold tracking-wide'>Inbox</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b-2'>
                  <td className='p-4 text-sm text-gray-700 '></td>
                  <td className='p-4 text-sm text-gray-700 '></td>
                  <td className='p-4 text-sm text-gray-700 '></td>
                </tr>
                <tr className='bg-white border-b-2'>
                  <td className='p-4 text-sm text-gray-700 '></td>
                  <td className='p-4 text-sm text-gray-700 '></td>
                  <td className='p-4 text-sm text-gray-700 '></td>
                </tr>
                <tr className='bg-white border-b-2'>
                  <td className='p-4 text-sm text-gray-700 '></td>
                  <td className='p-4 text-sm text-gray-700 '></td>
                  <td className='p-4 text-sm text-gray-700 '></td>
                </tr>
                <tr className='bg-white border-b-2'>
                  <td className='p-4 text-sm text-gray-700 '></td>
                  <td className='p-4 text-sm text-gray-700 '></td>
                  <td className='p-4 text-sm text-gray-700 '></td>
                </tr>
              </tbody>
            </table>
            <button className= 'bg-[#17B978] w-[60px] h-[60px] rounded-full ml-[72rem] mt-[1rem] fixed'><FaUserDoctor className='ml-[1.4rem]' /></button>
          </div>
    {/*ENDS HERE */}
       
        </div>

      </div>
    </div>
  )
}

export default PatientPages