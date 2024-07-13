import React from 'react'
import Sidebar from '../Components/Sidebar'
import avatar from '../../assets/av.jpeg'

const PatientSettings = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <section>
          <div>
            <span>
              <img src={avatar} alt="" className='rounded-full w-32 h-32 border-[#E2F3F5] border-[6px]'/>
              <span >
                <p className='text-[#384D6C] text-lg font-bold'>Ay Tech, Abdul</p>
                <p className='text-[#384D6C] text-lg'>Product Design</p>
                <p className='text-[#384D6C] text-sm'>{"Eastern European Time (EET), Cairo UTC +3"}</p>
              </span>
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PatientSettings