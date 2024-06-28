import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import avatar from '../assets/avatar.png';

const DoctorAppointment = () => {
  return (
    <div className='flex'>
        <Sidebar/>
      <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12}/>
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 - i get coconut head 💀*/}
          <div className='px-[30px]'>
            <h1 className='text-4xl font-semibold mt-5'>Appointments</h1>
            <div className='bg-white rounded-xl w-full'>
              <table className='w-full text-left text-xs'>
                <thead className=''>
                  <tr className='border-b'>
                    <th className='font-medium p-4 align-middle'>Name</th>
                    <th className='font-medium p-4 align-middle'>Email</th>
                    <th className='font-medium p-4 align-middle'>Date</th>
                    <th className='font-medium p-4 align-middle'>Visit Time</th>
                    <th className='font-medium p-4 align-middle'>Doctor</th>
                    <th className='font-medium p-4 align-middle'>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='flex gap-4 align-middle items-center p-4'>
                      <img className='w-8' src={avatar} alt="" />
                      Leslie Alexander
                    </td>
                    <td className='p-4 align-middle'>lesie.alexander@example.com</td>
                    <td className='p-4 align-middle'>10/10/2020</td>
                    <td className='p-4 align-middle'>09:15-09:45am</td>
                    <td className='p-4 align-middle'>Dr. Jacob Jones</td>
                    <td className='p-4 align-middle'>Mumps Stage II</td>
                    <td className='p-4 align-middle'><a href=""><FaPencilAlt className="h-5" aria-hidden="true" /></a></td>
                    <td className='p-4 align-middle'><a href=""><FaTrashAlt className="h-5" aria-hidden="true" /></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorAppointment