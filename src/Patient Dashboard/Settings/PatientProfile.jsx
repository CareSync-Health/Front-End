import React, { useEffect, useState } from 'react'
import avatar from '../../assets/avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { FaEnvelope } from 'react-icons/fa';
import { State } from 'country-state-city';
import { loadPatient } from '@/Redux/Actions/PatientActions';

const PatientProfile = () => {
  const patient = useSelector((state) => state.loadPatient.patient);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(loadPatient());
    }, [dispatch])

  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [time, setTime] = useState("")

  return (
    <div className='mt-[3rem]'>
      <div>
        <section className='md:px-7 px-4'>
          <div className='flex justify-between flex-wrap items-center'>
            <span className='flex items-center gap-5 md:gap-10'>
              <img src={patient?.profilePic || avatar} alt="" className='rounded-full mt-4 md:w-32 md:h-32 w-24 h-24 object-cover border-[#E2F3F5] border-[6px]' />
              <span className='mt-4'>
                <p className='text-[#384D6C] text-lg font-bold'>{patient?.firstName} {patient?.lastName}</p>
                <p className='text-[#384D6C] text-lg'>{patient?.occupation || 'Occupation'}</p>
                <p className='text-[#384D6C] text-sm'>{patient?.country} {patient?.state} {patient?.city}</p>
              </span>
            </span>
            <span className='flex gap-5 flex-wrap items-center mt-4'>
              <a className='px-4 font-bold text-white text-xs py-3 bg-[#22D1EE] border border-[#A6FFF2] rounded-lg'>Upload New Photo</a>
              <a className='px-12 font-bold text-[#384D6C] text-xs py-3 bg-[#E2F3F5] border border-[#384D6C] rounded-lg'>Delete</a>
            </span>
          </div>
          <form>
            <h2 className='text-[28px] font-Mulish font-medium mt-12 px-2'>Profile Information</h2>
            <div className='flex md:px-12 lg:px-2 md:gap-9 lg:flex-wrap mt-5 md:flex-nowrap'>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">First Name</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.firstName} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Last Name</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.lastName} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Phone Number</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.phoneNumber} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Home Number</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.homeNumber} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Occupation</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.occupation} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">User Name</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.userName} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Address Line 1</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.addressLine1} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Address Line 2</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.addressLine2} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Country</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.country} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">State</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.state} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">City</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.city} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Zip/Postal Code</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.zipCode} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Date Of Birth</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.dob} />
              </div>
            </div>
            <div className='flex items-end justify-end mt-[2rem]'>
              <button type='submit' className='px-4 font-bold w-[20%] text-white font-Mulish text-[14px] py-3 bg-[#22D1EE] border border-[#A6FFF2] rounded-lg'>Save Changes</button>
            </div>
          </form>

          {/*  */}
          <form>
            <h2 className='text-[28px] font-Mulish font-medium mt-12 px-2'>Health Information</h2>
            <div className='mt-5 flex md:px-12 lg:px-2 md:gap-9 lg:flex-wrap md:flex-nowrap'>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Blood Type</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.bloodType} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Allergies</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.allergies} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Blood Type</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.bloodType} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Medications</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.medications} />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Blood Type</label>
                <input className='border outline-none placeholder:italic placeholder:font-light border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder={patient?.bloodType} />
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default PatientProfile