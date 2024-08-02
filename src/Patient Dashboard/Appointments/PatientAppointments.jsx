import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Appointment from './Appointments'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import MiniNavbar from '../Components/MiniNavbar'
import AppointmentType from './BookAppointment/AppointmentType'
import VerifyIdentity from './BookAppointment/VerifyIdentity'

const PatientAppointments = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <Navbar />
                <MiniNavbar />
                <div className='mt-[3rem] xs:px-[10px] lg:px-[30px]'>
                    <Routes>
                        <Route path='appointments' element={<Appointment />} />
                        <Route path='appointmentType' element={<AppointmentType />} />
                        <Route path='verifyIdentity' element={<VerifyIdentity />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default PatientAppointments