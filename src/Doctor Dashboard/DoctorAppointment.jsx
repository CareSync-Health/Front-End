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
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Visit Time</th>
                    <th>Doctor</th>
                    <th>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={avatar} alt="" />
                      Leslie Alexander
                    </td>
                    <td>lesie.alexander@example.com</td>
                    <td>10/10/2020</td>
                    <td>09:15-09:45am</td>
                    <td>Dr. Jacob Jones</td>
                    <td>Mumps Stage II</td>
                    <td><a href=""><FaPencilAlt className="h-5" aria-hidden="true" /></a></td>
                    <td><a href=""></a></td>
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