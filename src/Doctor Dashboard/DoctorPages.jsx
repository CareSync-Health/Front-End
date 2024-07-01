import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import { RiMessage3Line, RiArrowDropDownLine } from 'react-icons/ri';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import avatar from '../assets/avatar.png';
import crutch from '../assets/crutch.png'

const DoctorPages = () => {
  const [page, setPage] = useState(1)
  const details = [
    {
      image: avatar,
      name: "Leslie Alexander",
      email: "lesie.alexander@example.com",
      
    },
    {
      image: avatar,
      name: "Leslie Alexander",
      email: "lesie.alexander@example.com",
      
    }
  ]

  return (
    <div className='flex'>
        <Sidebar/>
      <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12}/>
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <div className='lg:px-[30px] xs:px-[10px]'>
          <div className='flex items-center flex-wrap mt-[2rem] lg:gap-[5rem] xs:gap-[1rem]'>

            <div className='bg-white lg:w-[200px] xs:w-full py-[15px] rounded-[10px] px-[15px] flex items-center justify-start gap-[0.5rem]'>
              <img src={crutch} />
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>All Patients</h1>
                <h2 className='text-[#22D1EE] text-[16px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
              </div>
            </div>
            <div className='bg-white lg:w-[145px] xs:w-full py-[15px] rounded-[12px] px-[15px] flex lg:items-center lg:justify-center lg:gap-[1rem] xs:gap-[2rem]'>
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Online</h1>
                <div className="flex gap-[0.5rem] mr[3rem]">
                <h2 className='text-[#000] text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                <BiUpArrowAlt className='mt-[8px] fill-green-500' />
                </div>
              </div>
            </div>
            <div className='bg-white lg:w-[145px] xs:w-full py-[15px] rounded-[12px] px-[15px] flex lg:items-center lg:justify-center lg:gap-[1rem] xs:gap-[2rem]'>
              <div>
                <h1 className='text-[#25282B] text-[14px] font-Inter font-bold leading-[20px] text-start'>Offline</h1>
                <div className="flex gap-[0.5rem] mr[3rem]">
                <h2 className='text-[#000] text-[20px] font-Inter font-normal leading-[24px] text-start mt-[5px]'>0</h2>
                <BiDownArrowAlt className='mt-[8px] fill-red-500' />
                </div>
              </div>
            </div>
            <div className='bg-white  rounded-[12px] flex items-center justify-center w-[150px] h-[40px]'>
              <h1 className='text-[#17B978] text-[14px] font-Inter font-bold leading-[20px] text-justify'>Filter Patient</h1>
              <RiArrowDropDownLine />
            </div>
          </div>
          <div>
            <div className='mt-[5rem]'>
              <h1 className='text-[32px] text-[#000] font-bold font-Lato'>Doctors</h1>
            </div>
          <section className='bg-white shadow-md rounded-md lg:w-full mt-[1.5rem] overflow-auto mb-[3rem]'>
              <table className='lg:w-full text-left text-[14px]'>
                <thead className='bg-[#E8E8E8]'>
                  <tr className='border-b'>
                    <th className='font-medium px-5 py-4 align-middle'>Name</th>
                    <th className='font-medium px-5 py-4 align-middle'>Email</th>
                    <th className='font-medium px-5 py-4 align-middle'>Inbox</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((det, index) => (
                    <tr key={index} className='border-b'>
                      <td className='py-2 px-5 align-middle whitespace-nowrap'><span className='flex w-max gap-4 items-center'><img className='w-8' src={det.image} alt="" />{det.name}</span></td>
                      <td className='px-5 py-2 align-middle whitespace-nowrap'>{det.email}</td>      
                      <td className='px-5 py-2 align-middle whitespace-nowrap'><a href=""><RiMessage3Line className="h-5 text-green-500 w-10" aria-hidden="true" /></a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='p-5 flex gap-1'>
                <a onClick={() => page > 1 ? setPage(page - 1) : ""} className={`border p-[0.45rem] rounded-md ${page > 1 ? "cursor-pointer" : "cursor-not-allowed"}`}>
                  <svg className='w-3' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.7">
                      <path d="M9.71199 2.93311L4.91199 7.73311L9.71199 12.5331L11.088 11.1731L7.64799 7.73311L11.088 4.29311L9.71199 2.93311Z" fill={`${page > 1 ? "#A6FFF2" : "#E8E8E8"}`} />
                    </g>
                  </svg>
                </a>
                {Array.from({ length: 5 }).map((num, index) => (
                  <a key={index} onClick={() => setPage(index + 1)} className={`cursor-pointer text-xs leading-none p-[0.45rem] rounded-md ${page === index + 1 ? "text-white bg-[#17B978]" : "text-black border"}`}><span className='leading-none min-w-3 inline-block text-center'>{index + 1}</span></a>
                ))}
                <a onClick={() => page < 5 ? setPage(page + 1) : ""} className={`border p-[0.45rem] rounded-md ${page < 5 ? "cursor-pointer" : "cursor-not-allowed"}`}>
                  <svg className='w-3' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.288 12.5331L11.088 7.73311L6.288 2.93311L4.928 4.29311L8.352 7.73311L4.912 11.1731L6.288 12.5331Z" fill={`${page < 5 ? "#A6FFF2" : "#E8E8E8"}`} />
                  </svg>
                </a>
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