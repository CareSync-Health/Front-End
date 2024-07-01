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
      <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12}/>
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          
          {/*FILTER BOX */}

          <div className='px-[50px] '>
          <div className=' bg-white w-[190px] h-[40px] rounded-[9px] px-[50px] ml-[77%] mt-[20px] '>
  
  <div className=' flex items-center justify-items-center w-[110px] h-[40px] gap-[9px]'>
    <h1 className='text-[#17B978] text-[14px] font-Inter font-bold leading-[20px] text-justify'>Filter Patient</h1>
    <RiArrowDropDownLine />
  </div>
</div>
 {/*ENDS HERE */}

  {/*DOCTOR'S STATS */}

          <div className='flex items-center mt-[2rem] gap-[5rem] ml-[1rem]'>
            <div className='bg-white w-[250px] h-[88px] rounded-[10px] px-[15px] flex items-center justify-start gap-[1rem]'>
              <img src={crutch} />
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>All Patients</h1>
                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
              </div>
            </div>
            <div className='bg-white w-[145px] h-[88px] rounded-[12px] px-[15px] flex items-center justify-center gap-[1rem]'>
  
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Online</h1>
                <div className="flex gap-[0.5rem] mr[3rem]">
                <h2 className='text-[#000] text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                <BiUpArrowAlt className='mt-[8px] fill-green-500' />
                </div>
              </div>
            </div>
            <div className='bg-white w-[145px] h-[88px] rounded-[12px] px-[15px] flex items-center justify-center gap-[1rem]'>
  
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Offline</h1>
                <div className="flex gap-[0.5rem] mr[3rem]">
                <h2 className='text-[#000] text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                <BiDownArrowAlt className='mt-[8px] fill-red-500' />
                </div>
              </div>
            </div>


            <div className='bg-[#F8DEBD] w-[145px] h-[88px] rounded-[12px] px-[15px] flex items-center justify-center gap-[1rem]'>
  
                <div>
               <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-center'>Currently attending to</h1>
             <div className="flex items-center justify-center gap-[0.5rem] ">
            <h2 className='text-[#000] text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
              <BsFillHeartPulseFill  className='mt-[8px] fill-red-500' />
                    </div>
                </div>
           </div>

          <div className='bg-[#D0FBFF] w-[145px] h-[88px] rounded-[12px] px-[15px] flex items-center justify-center gap-[1rem]'>
  
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Offline</h1>
                <div className="flex gap-[0.5rem] mr[3rem]">
                <h2 className='text-[#000] text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                <BiDownArrowAlt className='mt-[8px] fill-red-500' />
                </div>
              </div>
            </div>

      

            
          </div>

           {/*ENDS HERE */}

            {/*TABLE PART */}
            
          </div>
          <div className='mt-[3rem] ml-[1.9rem]'>
          <h1 className='text-[#25282B] text-[2rem] font-Inter font-bold leading-[10px]'> Patient</h1>
        <h1 className='text-[#25282B] text-[2rem] font-Inter font-bold leading-[35px] mt-[3rem]'>No any attending patient yet, once you start attending to <br></br> any patient, they will appear in the table below </h1>
          </div>
          <div className='  bg-white w-[85%] h-[15rem] ml-[1.9rem] mt-[2rem]  rounded-[10px]'>
          <table className=" w-full table-auto">
  <thead className='bg-gray-50 border-b-2 border-gray-200'>
    <tr>
      <th className='p-3 text-sm font-semibold tracking-wide text-left'>Patient Name</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left'>Email</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left'>Inbox</th>
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
    {/*ENDS HERE */}
          </div>
       
        </div>

      </div>
    </div>
  )
}

export default PatientPages