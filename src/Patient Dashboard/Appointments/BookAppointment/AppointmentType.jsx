import React from 'react'
import { FaUser } from 'react-icons/fa';
import { FaVideo } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const AppointmentType = () => {
  return (
    <div>
        <h1 className='text-[30px] font-bold font-Mulish'>Book Appointment</h1>
        <div className='mt-[3rem] mb-[4rem]'>
            <h1 className='text-[20px] font-medium font-Mulish'>Select Appointment Preference:</h1>
            <div className='flex flex-wrap items-center justify-between lg:pr-[15rem]'>
                <div className='bg-[#fff] shadow-lg lg:w-[400px] xs:w-full py-5 px-5 rounded-[12px] mt-[2rem]'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[20px] font-medium font-Mulish'>Video Visit</h1>
                        <FaVideo className='text-[35px] text-[#22D1EE]' />
                    </div>
                    <h2 className='text-[18px] font-medium font-Mulish leading-[22px] mt-[2.5rem]'>Book a video appointment with a doctor </h2>
                    <button className='w-full bg-[#22D1EE] p-2.5 mt-[1.5rem] rounded-[7px] text-[#fff] text-[16px] font-bold font-Mulish'><Link to='/patient_appointment/verifyIdentity'>Book Visit</Link></button>
                </div>
                <div className='bg-[#fff] shadow-lg lg:w-[400px] xs:w-full py-5 px-5 rounded-[12px] mt-[2rem]'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[20px] font-medium font-Mulish'>In Person Visit</h1>
                        <FaUser className='text-[35px] text-[#22D1EE]' />
                    </div>
                    <h2 className='text-[18px] font-medium font-Mulish leading-[22px] mt-[2.5rem]'>Book an in-person appointment with a doctor </h2>
                    <button className='w-full bg-[#22D1EE] p-2.5 mt-[1.5rem] rounded-[7px] text-[#fff] text-[16px] font-bold font-Mulish'><Link to='/patient_appointment/verifyIdentity'>Book Visit</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppointmentType

// const data = [
//     {
//       id: 1,
//       image: Ellipse ? Ellipse : CareSync,
//       title: 'Dr.',
//       firstName: patient?.firstName,
//       lastName: patient?.lastName,
//       profession: 'Dermatologist',
//       experience: '5 years',
//       location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
//       description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
//     },
//     {
//       id: 2,
//       image: Ellipse ? Ellipse : CareSync,
//       title: 'Dr.',
//       firstName: patient?.firstName,
//       lastName: patient?.lastName,
//       profession: 'Dermatologist',
//       experience: '5 years',
//       location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
//       description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
//     },
//     {
//       id: 3,
//       image: Ellipse ? Ellipse : CareSync,
//       title: 'Dr.',
//       firstName: patient?.firstName,
//       lastName: patient?.lastName,
//       profession: 'Dermatologist',
//       experience: '5 years',
//       location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
//       description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
//     },
//     {
//       id: 4,
//       image: Ellipse ? Ellipse : CareSync,
//       title: 'Dr.',
//       firstName: patient?.firstName,
//       lastName: patient?.lastName,
//       profession: 'Dermatologist',
//       experience: '5 years',
//       location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
//       description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
//     },
//     {
//       id: 5,
//       image: Ellipse ? Ellipse : CareSync,
//       title: 'Dr.',
//       firstName: patient?.firstName,
//       lastName: patient?.lastName,
//       profession: 'Dermatologist',
//       experience: '5 years',
//       location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
//       description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
//     },
//     {
//       id: 6,
//       image: Ellipse ? Ellipse : CareSync,
//       title: 'Dr.',
//       firstName: patient?.firstName,
//       lastName: patient?.lastName,
//       profession: 'Dermatologist',
//       experience: '5 years',
//       location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
//       description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
//     },
//     {
//       id: 7,
//       image: Ellipse ? Ellipse : CareSync,
//       title: 'Dr.',
//       firstName: patient?.firstName,
//       lastName: patient?.lastName,
//       profession: 'Dermatologist',
//       experience: '5 years',
//       location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
//       description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
//     },
//     {
//       id: 8,
//       image: Ellipse ? Ellipse : CareSync,
//       title: 'Dr.',
//       firstName: patient?.firstName,
//       lastName: patient?.lastName,
//       profession: 'Dermatologist',
//       experience: '5 years',
//       location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
//       description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
//     },
//     {
//       id: 9,
//       image: Ellipse ? Ellipse : CareSync,
//       title: 'Dr.',
//       firstName: patient?.firstName,
//       lastName: patient?.lastName,
//       profession: 'Dermatologist',
//       experience: '5 years',
//       location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
//       description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
//     },
//     {
//       id: 10,
//       image: Ellipse ? Ellipse : CareSync,
//       title: 'Dr.',
//       firstName: patient?.firstName,
//       lastName: patient?.lastName,
//       profession: 'Dermatologist',
//       experience: '5 years',
//       location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
//       description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
//     }
//   ]