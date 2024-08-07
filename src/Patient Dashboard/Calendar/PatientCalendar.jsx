import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import MiniNavbar from '../Components/MiniNavbar'

const PatientCalendar = () => {

    const date = [
        {
            id: 1,
            time: '08 AM'
        },
        {
            id: 2,
            time: '09 AM'
        },
        {
            id: 3,
            time: '10 AM'
        },
        {
            id: 4,
            time: '11 AM'
        },
        {
            id: 5,
            time: '12 PM'
        }
    ]

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <Navbar />
                <MiniNavbar />
                <div className='lg:px-[30px] xs:px-[5px] mt-[5rem] pb-[3rem]'>
                    <div className='border border-[#A6FFF2]'>
                        <div className='border-b border-[#A6FFF2] pb-[1rem]'>
                            <div className='flex items-center gap-[15rem] py-1 pt-[1.3rem] px-4'>
                                <h2 className='text-[20px] font-bold font-Mulish'>Time</h2>
                                <h2 className='text-[20px] font-bold font-Mulish'>Day (Monday 29)</h2>
                            </div>
                        </div>
                        {date.map((date) => (
                            <>
                                <div className='border-b-[0.2px] border-b-[#A6FFF2]'>
                                    <div className=''>
                                        <h2 className='text-[18px] font-bold font-Mulish border-[0.2px] w-[7rem] border-[#A6FFF2] border-b-[0px] border-t-0 border-l-0 py-5 px-3'>{date.time}</h2>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientCalendar