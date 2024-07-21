import React from 'react'
import Sidebar from '../Components/Sidebar'
import avatar from '../../assets/av.jpeg'

const PatientSettings = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <section className='md:px-7 px-4'>
          <div className='flex justify-between flex-wrap items-center'>
            <span className='flex items-center gap-5 md:gap-10'>
              <img src={avatar} alt="" className='rounded-full mt-4 md:w-32 md:h-32 w-24 h-24 border-[#E2F3F5] border-[6px]' />
              <span className='mt-4'>
                <p className='text-[#384D6C] text-lg font-bold'>Ay Tech, Abdul</p>
                <p className='text-[#384D6C] text-lg'>Product Design</p>
                <p className='text-[#384D6C] text-sm'>Eastern European Time (EET), Cairo UTC +3</p>
              </span>
            </span>
            <span className='flex gap-5 flex-wrap items-center mt-4'>
              <a className='px-4 font-bold text-white text-xs py-3 bg-[#22D1EE] border border-[#A6FFF2] rounded-lg'>Upload New Photo</a>
              <a className='px-12 font-bold text-[#384D6C] text-xs py-3 bg-[#E2F3F5] border border-[#384D6C] rounded-lg'>Delete</a>
            </span>
          </div>
          <div>
            <div>
              <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">First Name</label>
              <input type="text" placeholder='e.g Alaa'/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PatientSettings