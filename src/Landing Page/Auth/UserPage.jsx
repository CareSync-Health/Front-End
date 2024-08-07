import React from 'react'
import logo from '../../assets/logo.png'
import img1 from '../../assets/undraw_in_love.png'
import img2 from '../../assets/undraw_medical_research.png'
import { Link } from 'react-router-dom'

const UserPage = () => {
  return (
    <div>
       <center>
          <img src={logo} alt='CareSync_Logo' className='w-56' />
          <h1 className='f-style font-medium'>What type of account do you want to create?</h1>
       </center>
       <div className='w-[100%] mt-10 px-[10px] lg:pb-0 xs:pb-[5rem]'>
          <div className='lg:flex justify-center align-center gap-96'>
            <div className=''>
              <img src={img1} alt='patient-img' className='lg:rounded-lg xs:w-full bg-[#b6dee6a1] px-0 py-[10px]'/>
             <Link to='/auth'>
                <div className='bg-black text-white f-style px-4 lg:py-2 xs:py-4 w-86 xs:w-full lg:rounded-md'>
                  <h2 className='text-2xl text-[#22D1EE]'>Patient</h2>
                  <p className='mt-1 text-[#e7e6e6]'>I want to find a professional doctor by <br/> CareSync</p>
                </div>
             </Link>
            </div>
            <div className='sm:mt-10 lg:mt-0'>
              <img src={img2} alt='patient-img' className='xs:w-full lg:mt-0 xs:mt-[5rem] bg-[#b6dee6a1] px-0 py-[10px]' />
              <Link to='/login'>
                <div className='bg-black text-white f-style px-4 lg:py-2 xs:py-4 w-86 xs:w-full lg:rounded-md'>
                  <h2 className='text-2xl text-[#22D1EE]'>Doctor</h2>
                  <p className='mt-1 text-[#e7e6e6]'>I want to earn money by participating in <br/> Patient treatment</p>
                </div>
              </Link>
            </div>
          </div>
       </div>
    </div>
  )
}

export default UserPage