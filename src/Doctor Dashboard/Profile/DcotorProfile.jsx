import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

const DcotorProfile = () => {
  return (
    <div className='flex'>
        <Sidebar/>
      <div className='flex-1 h-[99.9vh] overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12}/>
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <div className='px-[30px]'>

            PROFILE
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DcotorProfile