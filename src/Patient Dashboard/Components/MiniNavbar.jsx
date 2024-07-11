import React from 'react'
import bloodsugar from '../../assets/Group 31.png' 
import heartrate from '../../assets/Group 33.png'
import bloodpressure from '../../assets/Group 35.png'
import schedule from '../../assets/Group 34.png'


const MiniNavbar = () => {
  return (
    <div className='lg:px-[30px] xs:px-[10px] pt-[3rem] flex items-center justify-between flex-wrap'>
        <div className='bg-[#fff] w-[294px] shadow-lg p-5 rounded-[10px]'>
            <span className='flex items-center gap-[2rem]'>
                <img src={bloodsugar} />
               <span>
                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish'>Blood Sugar</h2>
                    <h2 className='text-[#272927] text-[28px] font-normal font-Mulish flex items-center gap-[5px]'>80<span className='text-[#818181] text-[14px] font-bold'>mg / dL</span></h2>
               </span>
            </span>
        </div>
        <div className='bg-[#fff] w-[294px] shadow-lg p-5 rounded-[10px]'>
            <span className='flex items-center gap-[2rem]'>
                <img src={heartrate} />
               <span>
                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish'>Heart Rate</h2>
                    <h2 className='text-[#272927] text-[28px] font-normal font-Mulish flex items-center gap-[5px]'>98<span className='text-[#818181] text-[14px] font-bold'>bpm</span></h2>
               </span>
            </span>
        </div>
        <div className='bg-[#fff] w-[294px] shadow-lg p-5 rounded-[10px]'>
            <span className='flex items-center gap-[2rem]'>
                <img src={bloodpressure} />
               <span>
                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish'>Blood Sugar</h2>
                    <h2 className='text-[#272927] text-[28px] font-normal font-Mulish flex items-center gap-[5px]'>102<span className='text-[#818181] text-[14px] font-bold'>/ 72 mmhg</span></h2>
               </span>
            </span>
        </div>
        <div className='bg-[#fff] w-[294px] shadow-lg p-5 rounded-[10px]'>
            <span className='flex items-center gap-[2rem]'>
                <img src={schedule} />
               <span>
                    <h2 className='text-[#000] text-[16px] font-medium font-Mulish flex items-center gap-[10px]'><span className='text-[28px] font-normal'>5</span> Scheduled</h2>
                    <h2 className='text-[#22D1EE] text-[17px] font-bold font-Mulish'>Appointments</h2>
               </span>
            </span>
        </div>
    </div>
  )
}

export default MiniNavbar