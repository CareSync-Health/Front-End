import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import MiniNavbar from '../Components/MiniNavbar'

const PatientCalendar = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <Navbar />
                <MiniNavbar />
                <div className='lg:px-[30px] xs:px-[5px] mt-[5rem] pb-[3rem]'>PatientCalendar
                </div>
            </div>
        </div>
    )
}

export default PatientCalendar