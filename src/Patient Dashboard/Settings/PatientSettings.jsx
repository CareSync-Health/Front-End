import React from 'react'
import Sidebar from '../Components/Sidebar'
import avatar from '../../assets/avatar.png'

const PatientSettings = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <section>
          <div>
            <span>
              <img src={avatar} alt="" />
              <span>
                <p className='text-[#384D6C]'>Ay Tech, Abdul</p>
                <p>Product Design</p>
                <p>{"Eastern European Time (EET), Cairo UTC +3"}</p>
              </span>
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PatientSettings