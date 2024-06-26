import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import profilebg from '../../assets/profile-bg.png'
import profileavatar from '../../assets/profile_avatar.png'
import ProfilePost from './ProfilePost'
import { FaPencil } from 'react-icons/fa6'

const DcotorProfile = () => {
  return (
    <div className='flex'>
        <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] w-full  overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12}/>
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <div className='lg:px-[15px] lg:mt-[1rem]'>
          <div className='bg-[#fff] pb-[2rem] rounded-[10px]'>
            <div style={{ backgroundImage: `url(${profilebg})`, backgroundRepeat: 'no-repeat', backgroundSize: '' }} className='lg:h-[280px] w-full'>
              <button className='text-[#22D1EE] bg-[#fff] mt-4 mr-5 p-[10px] rounded-[100px] text-[22px] lg:hidden xs:block float-end'><FaPencil/></button>
                <div className='flex items-center justify-between lg:px-[50px] xs:px-[10px] pt-[8rem]'>
                   <img src={profileavatar} className='rounded-[100px] object-contain w-[180px]' />
                   <button className='bg-[#fff] w-[172px] py-[10px] px-[10px] text-center text-[#17B978] hover:bg-[#17B978] hover:text-[#fff] duration-300 text-[16px] font-Poppins font-semibold rounded-[10px] lg:block xs:hidden'>Edit Cover Photo</button>
                </div>
            </div>
            <div className='flex lg:items-center xs:items-start justify-between lg:px-[50px] xs:px-[15px] pt-[1rem]'>
                <div className='lg:ms-[11rem]'>
                    <h2 className='text-[30px] text-[#22D1EE] font-bold font-Inter'>Charles Deo</h2>
                    <h3 className='text-[#17B978] text-[15px] font-Inter font-normal'>Doctor Profession</h3>
                </div>
                <button className='border-[#22D1EE] border-[1px] border-solid rounded-[10px] w-[172px] h-[44px] py-[5px] px-[10px] text-center text-[#22D1EE] hover:bg-[#22D1EE] hover:text-[#fff] duration-300 text-[16px] font-Poppins font-semibold lg:block xs:hidden'>Edit Profile</button>
                <button className='text-[#22D1EE] text-[21px] lg:hidden xs:block'><FaPencil /></button>
            </div>
            </div>

            <ProfilePost/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DcotorProfile