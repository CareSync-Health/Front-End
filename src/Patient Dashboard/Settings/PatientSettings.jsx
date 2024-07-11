import React from 'react'
import Sidebar from '../Components/Sidebar'

const PatientSettings = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        PatientSettings
      </div>
    </div>
  )
}

export default PatientSettings