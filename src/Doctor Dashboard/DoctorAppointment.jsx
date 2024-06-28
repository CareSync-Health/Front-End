import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import avatar from '../assets/avatar.png';

const DoctorAppointment = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12} />
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 - i get coconut head 💀*/}
          <div className='px-[30px]'>
            <h1 className='text-4xl font-semibold mt-5'>Appointments</h1>
            <section className='bg-white rounded-md w-full mt-5'>
              <table className='w-full text-left text-xs'>
                <thead className=''>
                  <tr className='border-b'>
                    <th className='font-medium px-5 py-4 align-middle'>Name</th>
                    <th className='font-medium px-5 py-4 align-middle'>Email</th>
                    <th className='font-medium px-5 py-4 align-middle'>Date</th>
                    <th className='font-medium px-5 py-4 align-middle'>Visit Time</th>
                    <th className='font-medium px-5 py-4 align-middle'>Doctor</th>
                    <th className='font-medium px-5 py-4 align-middle'>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='flex gap-4 align-middle items-center py-2 px-5'><img className='w-8' src={avatar} alt="" />Leslie Alexander</td>
                    <td className='px-5 py-2 align-middle'>lesie.alexander@example.com</td>
                    <td className='px-5 py-2 align-middle'>10/10/2020</td>
                    <td className='px-5 py-2 align-middle'>09:15-09:45am</td>
                    <td className='px-5 py-2 align-middle'>Dr. Jacob Jones</td>
                    <td className='px-5 py-2 align-middle'>Mumps Stage II</td>
                    <td className='px-5 py-2 align-middle'><a href=""><FaPencilAlt className="h-5 text-gray-400" aria-hidden="true" /></a></td>
                    <td className='px-5 py-2 align-middle'><a href=""><FaTrashAlt className="h-5 text-red-400" aria-hidden="true" /></a></td>
                  </tr>
                </tbody>
              </table>
              <div className='p-5 flex'>
                <a href="" className='border p-[0.45rem] rounded-md'>
                  <svg className='w-3' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.7">
                      <path d="M9.71199 2.93311L4.91199 7.73311L9.71199 12.5331L11.088 11.1731L7.64799 7.73311L11.088 4.29311L9.71199 2.93311Z" fill="#E8E8E8" />
                    </g>
                  </svg>
                </a>
                <a href="" className='border text-xs  rounded-md'>1</a>
                <a href="" className='border p-[0.45rem] rounded-md'>
                  <svg className='w-3' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.288 12.5331L11.088 7.73311L6.288 2.93311L4.928 4.29311L8.352 7.73311L4.912 11.1731L6.288 12.5331Z" fill="#A6FFF2" />
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorAppointment