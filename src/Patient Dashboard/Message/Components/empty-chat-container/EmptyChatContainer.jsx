import React from 'react'
import CareSync from '../../../../assets/CareSync.png'

const EmptyChatContainer = () => {
  return (
    <div className='flex-1 md:flex flex-col justify-center items-center h-[85vh] hidden duration-1000 transition-all'>
      <div>
        <img src={CareSync} className='w-[150px] opacity-50' />
      </div>
        <div className='text-opacity-80 flex flex-col gap-5 items-center lg:text-4xl text-3xl transition-all duration-300 text-center'>
            <h3 className='font-Nunito font-medium relative px-12 py-3 bg-shine-gradient bg-clip-text text-transparent font-poppins animate-shine'>Hi <span className='text-[#22D1EE]'>!</span>Welcome to <span className='text-[#22D1EE]'>CareSync</span> Chat App <span className='text-[#22D1EE]'>.</span></h3>
        </div>
    </div>
  )
}

export default EmptyChatContainer