import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'

const DoctorDashboard = () => {
  return (
    <div className='flex bg-[#E2F3F5]'>
        <Sidebar/>
      <div className='w-full'>
        <Navbar messageCount={5} notificationCount={12}/>
        <div className=''>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <div className='px-[30px]'>
            DASHBOARD
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard