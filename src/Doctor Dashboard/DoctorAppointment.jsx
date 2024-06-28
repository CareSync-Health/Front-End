import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'

const DoctorAppointment = () => {
  return (
    <div className='flex'>
        <Sidebar/>
      <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12}/>
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 - i get coconut head 💀*/}
          <div className='px-[30px]'>

            APPOINTMENT
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorAppointment