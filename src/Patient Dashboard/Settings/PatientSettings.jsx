import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import avatar from '../../assets/av.jpeg'
import { useSelector } from 'react-redux';

const PatientSettings = () => {
  const patient = useSelector((state) => state.patientAuth.patient || state.patientSignin.patient);


  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [time, setTime] = useState("")

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <section className='md:px-7 px-4'>
          <div className='flex justify-between flex-wrap items-center'>
            <span className='flex items-center gap-5 md:gap-10'>
              <img src={avatar} alt="" className='rounded-full mt-4 md:w-32 md:h-32 w-24 h-24 border-[#E2F3F5] border-[6px]' />
              <span className='mt-4'>
                <p className='text-[#384D6C] text-lg font-bold'>{patient?.firstName} {patient?.lastName}</p>
                <p className='text-[#384D6C] text-lg'>Product Design</p>
                <p className='text-[#384D6C] text-sm'>Eastern European Time (EET), Cairo UTC +3</p>
              </span>
            </span>
            <span className='flex gap-5 flex-wrap items-center mt-4'>
              <a className='px-4 font-bold text-white text-xs py-3 bg-[#22D1EE] border border-[#A6FFF2] rounded-lg'>Upload New Photo</a>
              <a className='px-12 font-bold text-[#384D6C] text-xs py-3 bg-[#E2F3F5] border border-[#384D6C] rounded-lg'>Delete</a>
            </span>
          </div>
          <div className='mt-12 flex md:px-12 px-2 md:gap-9 flex-wrap md:flex-nowrap'>
            <div className='flex flex-col w-full md:w-1/2 mt-3'>
              <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">First Name</label>
              <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.firstName} />
            </div>
            <div className='flex flex-col w-full md:w-1/2 mt-3'>
              <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Last Name</label>
              <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.lastName} />
            </div>
          </div>
          <div className='mt-3 border-b pb-9 flex md:px-12 px-2 gap-9 flex-wrap md:flex-nowrap'>
            <div className='flex flex-col w-full'>
              <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">User Name</label>
              <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder='eg. alaa.mohamed' />
            </div>
          </div>
          <div className='mt-10 border-b pb-9 flex md:px-12 px-2 md:gap-9 flex-wrap md:flex-nowrap'>
            <div className='flex flex-col w-full md:w-1/2 mt-3'>
              <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Email Address</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className={`border ps-[4rem] ${email.length < 1 ? "ll" : ""} outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-3 py-3 rounded-lg mt-3`} type="text" placeholder={patient?.email} />
            </div>
            <div className='flex flex-col w-full md:w-1/2 mt-3'>
              <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Phone Number</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className={`border ps-[4rem] ${phone.length < 1 ? "mm" : ""} outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3`} type="text" placeholder={patient?.PhoneNumber} />
            </div>
          </div>
          <div className='mt-12 md:px-12 px-2'>
            <div className='flex flex-col w-full mt-3'>
              <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Location</label>
              <input value={location} onChange={(e) => setLocation(e.target.value)} className={`border ${location.length < 1 ? "nn" : ""} outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3`} type="text" placeholder='' />
            </div>
            <div className='flex flex-col w-full mt-3'>
              <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Time Zone</label>
              <input value={time} onChange={(e) => setTime(e.target.value)} className={`border ${time.length < 1 ? "oo" : ""} outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3`} type="text" placeholder='' />
            </div>
          </div>
          <div className='md:pl-12 pl-2 mt-12 pb-10 flex flex-wrap justify-between items-end'>
            <div>
              <p className='text-[0.87rem] font-bold text-[#384D6C]'>Companies</p>
              <span className='flex gap-4 mt-5 items-center'>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21" cy="21" r="21" fill="#D0D0D0" />
                  <path d="M18.7823 9.50438H23.2177C23.7426 9.50438 24.1681 9.9299 24.1681 10.4548V12.6725H17.8319V10.4548C17.8319 9.9299 18.2574 9.50438 18.7823 9.50438ZM15.9311 10.4548V12.6725H13.7134C11.4388 12.6725 9.59485 14.5164 9.59485 16.791V18.6919C9.59485 19.9167 10.5877 20.9095 11.8125 20.9095H18.4655V20.2759C18.4655 19.576 19.0329 19.0087 19.7328 19.0087H22.2673C22.9672 19.0087 23.5345 19.576 23.5345 20.2759V20.9095H30.1875C31.4123 20.9095 32.4052 19.9167 32.4052 18.6919V16.791C32.4052 14.5164 30.5612 12.6725 28.2867 12.6725H26.069V10.4548C26.069 8.88008 24.7924 7.60352 23.2177 7.60352H18.7823C17.2076 7.60352 15.9311 8.88008 15.9311 10.4548ZM32.4052 22.163C31.7651 22.5728 31.004 22.8104 30.1875 22.8104H23.5345C23.5345 23.5103 22.9672 24.0777 22.2673 24.0777H19.7328C19.0329 24.0777 18.4655 23.5103 18.4655 22.8104H11.8125C10.996 22.8104 10.235 22.5728 9.59485 22.163V26.2953C9.59485 28.5699 11.4388 30.4139 13.7134 30.4139H28.2867C30.5612 30.4139 32.4052 28.5699 32.4052 26.2953V22.163Z" fill="#384D6C" />
                </svg>
                <p className='text-[1.25rem] font-bold text-[#384D6C]'>ProCrew</p>
              </span>
              <span className='flex gap-4 mt-5 items-center'>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21" cy="21" r="21" fill="#D0D0D0" />
                  <path d="M18.7823 9.50438H23.2177C23.7426 9.50438 24.1681 9.9299 24.1681 10.4548V12.6725H17.8319V10.4548C17.8319 9.9299 18.2574 9.50438 18.7823 9.50438ZM15.9311 10.4548V12.6725H13.7134C11.4388 12.6725 9.59485 14.5164 9.59485 16.791V18.6919C9.59485 19.9167 10.5877 20.9095 11.8125 20.9095H18.4655V20.2759C18.4655 19.576 19.0329 19.0087 19.7328 19.0087H22.2673C22.9672 19.0087 23.5345 19.576 23.5345 20.2759V20.9095H30.1875C31.4123 20.9095 32.4052 19.9167 32.4052 18.6919V16.791C32.4052 14.5164 30.5612 12.6725 28.2867 12.6725H26.069V10.4548C26.069 8.88008 24.7924 7.60352 23.2177 7.60352H18.7823C17.2076 7.60352 15.9311 8.88008 15.9311 10.4548ZM32.4052 22.163C31.7651 22.5728 31.004 22.8104 30.1875 22.8104H23.5345C23.5345 23.5103 22.9672 24.0777 22.2673 24.0777H19.7328C19.0329 24.0777 18.4655 23.5103 18.4655 22.8104H11.8125C10.996 22.8104 10.235 22.5728 9.59485 22.163V26.2953C9.59485 28.5699 11.4388 30.4139 13.7134 30.4139H28.2867C30.5612 30.4139 32.4052 28.5699 32.4052 26.2953V22.163Z" fill="#384D6C" />
                </svg>
                <p className='text-[1.25rem] font-bold text-[#384D6C]'>Noon</p>
              </span>
              <span className='flex gap-4 mt-5 items-center'>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="21" cy="21" r="21" fill="#D0D0D0" />
                  <path d="M18.7823 9.50438H23.2177C23.7426 9.50438 24.1681 9.9299 24.1681 10.4548V12.6725H17.8319V10.4548C17.8319 9.9299 18.2574 9.50438 18.7823 9.50438ZM15.9311 10.4548V12.6725H13.7134C11.4388 12.6725 9.59485 14.5164 9.59485 16.791V18.6919C9.59485 19.9167 10.5877 20.9095 11.8125 20.9095H18.4655V20.2759C18.4655 19.576 19.0329 19.0087 19.7328 19.0087H22.2673C22.9672 19.0087 23.5345 19.576 23.5345 20.2759V20.9095H30.1875C31.4123 20.9095 32.4052 19.9167 32.4052 18.6919V16.791C32.4052 14.5164 30.5612 12.6725 28.2867 12.6725H26.069V10.4548C26.069 8.88008 24.7924 7.60352 23.2177 7.60352H18.7823C17.2076 7.60352 15.9311 8.88008 15.9311 10.4548ZM32.4052 22.163C31.7651 22.5728 31.004 22.8104 30.1875 22.8104H23.5345C23.5345 23.5103 22.9672 24.0777 22.2673 24.0777H19.7328C19.0329 24.0777 18.4655 23.5103 18.4655 22.8104H11.8125C10.996 22.8104 10.235 22.5728 9.59485 22.163V26.2953C9.59485 28.5699 11.4388 30.4139 13.7134 30.4139H28.2867C30.5612 30.4139 32.4052 28.5699 32.4052 26.2953V22.163Z" fill="#384D6C" />
                </svg>
                <p className='text-[1.25rem] font-bold text-[#384D6C]'>LamasaTech</p>
              </span>
            </div>
            <div>
              <span className='flex gap-5 flex-wrap items-center mt-6'>
                <a className='px-12 font-bold text-[#384D6C] text-xs py-3 bg-[#E2F3F5] border border-[#384D6C] rounded-lg'>Cancel</a>
                <a className='px-4 font-bold text-white text-xs py-3 bg-[#22D1EE] border border-[#A6FFF2] rounded-lg'>Save Changes</a>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PatientSettings