import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import profilebg from '../../assets/profile-bg.png'
import profileavatar from '../../assets/profile_avatar.png'

const DcotorProfile = () => {
  return (
    <div className='flex'>
        <Sidebar/>
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh]  overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12}/>
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <div className='px-[15px] mt-[1rem]'>
          <div className='bg-[#fff] pb-[2rem] rounded-[10px]'>
            <div style={{ backgroundImage: `url(${profilebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} className='h-[280px]'>
                <div className='flex items-center justify-between px-[50px] pt-[8rem]'>
                   <img src={profileavatar} />
                   <button className='bg-[#fff] w-[172px] py-[10px] px-[10px] text-center text-[#17B978] hover:bg-[#17B978] hover:text-[#fff] duration-300 text-[16px] font-Poppins font-semibold rounded-[10px]'>Edit Cover Photo</button>
                </div>
            </div>
            <div className='flex items-center justify-between px-[50px] pt-[1rem]'>
                <div className='ms-[11rem]'>
                    <h2 className='text-[30px] text-[#22D1EE] font-bold font-Inter'>Charles Deo</h2>
                    <h3 className='text-[#17B978] text-[15px] font-Inter font-normal'>Doctor Profession</h3>
                </div>
                <button className='border-[#22D1EE] border-[1px] border-solid rounded-[10px] w-[172px] h-[44px] py-[5px] px-[10px] text-center text-[#22D1EE] hover:bg-[#22D1EE] hover:text-[#fff] duration-300 text-[16px] font-Poppins font-semibold'>Edit Profile</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DcotorProfile