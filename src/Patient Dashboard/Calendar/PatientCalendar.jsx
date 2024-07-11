import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import MiniNavbar from '../Components/MiniNavbar'

const PatientCalendar = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          <Navbar/>
          <MiniNavbar/>
          <div>
            Patient Calendar
          </div>
      </div>
    </div>
  )
}

export default PatientCalendar