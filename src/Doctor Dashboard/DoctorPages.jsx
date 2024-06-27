import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'

const DoctorPages = () => {
  return (
    <div className='flex'>
        <Sidebar/>
      <div className='flex-1 h-screen overflow-y-auto bg-[#E2F3F5]'>
        <Navbar messageCount={5} notificationCount={12}/>
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <div className='px-[30px]'>

            DOCTOR PAGE
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorPages