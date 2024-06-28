import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import avatar from '../assets/avatar.png';
import doc from '../assets/doctor 2.svg';

const DoctorAppointment = () => {
  const [page, setPage] = useState(1)
  const details = [
    {
      image: avatar,
      name: "Leslie Alexander",
      email: "lesie.alexander@example.com",
      date: "10/10/2020",
      time: "09:15-09:45am",
      doctor: "Dr. Jacob Jones",
      condition: "Mumps Stage II"
    },
    {
      image: avatar,
      name: "Leslie Alexander",
      email: "lesie.alexander@example.com",
      date: "10/10/2020",
      time: "09:15-09:45am",
      doctor: "Dr. Jacob Jones",
      condition: "Mumps Stage II"
    }
  ]

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12} />
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 - i get coconut head 💀*/}
          <div className='px-[30px] mb-5'>
            <h1 className='text-4xl font-semibold mt-5'>Appointments</h1>
            <section className='bg-white shadow-md rounded-md bord w-full mt-5 overflow-auto'>
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
                  {details.map((det, index) => (
                    <tr key={index} className='border-b'>
                      <td className='py-2 px-5 align-middle whitespace-nowrap'><span className='flex w-max gap-4 items-center'><img className='w-8' src={det.image} alt="" />{det.name}</span></td>
                      <td className='px-5 py-2 align-middle whitespace-nowrap'>{det.email}</td>
                      <td className='px-5 py-2 align-middle whitespace-nowrap'>{det.date}</td>
                      <td className='px-5 py-2 align-middle whitespace-nowrap'>{det.time}</td>
                      <td className='px-5 py-2 align-middle whitespace-nowrap'>{det.doctor}</td>
                      <td className='px-5 py-2 align-middle whitespace-nowrap'>{det.condition}</td>
                      <td className='px-5 py-2 align-middle whitespace-nowrap'><a href=""><FaPencilAlt className="h-5 text-gray-400" aria-hidden="true" /></a></td>
                      <td className='px-5 py-2 align-middle whitespace-nowrap'><a href=""><FaTrashAlt className="h-5 text-red-400" aria-hidden="true" /></a></td>
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
            <div className='bg-[#17B978] w-fit rounded-full p-4 float-end -mt-12'>
              <img src={doc} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorAppointment