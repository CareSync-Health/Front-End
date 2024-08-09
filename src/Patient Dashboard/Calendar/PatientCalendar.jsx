import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import MiniNavbar from '../Components/MiniNavbar'
import { PiCalendarDotsLight } from "react-icons/pi";

const PatientCalendar = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <Navbar />
                <MiniNavbar />
                <div className='lg:px-[30px] xs:px-[5px] mt-[5rem] pb-[3rem] mb-[2.5rem] flex flex-row-reverse gap-[1rem]'>
                   <button className=' bg-[#E2F3F5] w-[3rem] h-[40px] rounded-[6px]'><PiCalendarDotsLight className='w-[2rem] h-[2rem] ml-[0.5rem]' /></button>
                   <button className='bg-[#E2F3F5] w-[8rem] h-[40px] rounded-[6px] text-[15px] font-Mulish font-medium text-[#17B978]'>July, 29</button>
                </div>
            
            <div className='bg-gray-50 w-[80rem] h-[20rem] ml-[3rem] flex flex-row mb-[3rem] gap-[2.6rem]'>
          <div className='bg-[#FFFCF8] w-[262px] h-[275px] border-l-8 border-[#22D1EE]  shadow-lg rounded-[10px]'>
            <h3 className='text-[25px] text-center font-Lato font-normal leading-[10px] mt-[2rem]'>Dr. Ronald Richards</h3>
            <p className='text-[15px] text-[#3D3D3D] ml-[1.4rem] font-Lato font-normal leading-[10px] mt-[2rem]'>08 AM - 10AM (1.5hrs)</p>
            <p className='text-[15px] text-[#000000] ml-[1.4rem] font-Lato font-normal leading-[10px] mt-[4rem]'>Diabetes Control Appointment</p>
            <p className='text-[15px] text-[#3D3D3D] ml-[1.4rem] font-Lato font-normal leading-[20px] mt-[2rem]'>Sed ut perspiciatis unde <br /> omnis iste natus error sit voluptatem .............</p>
            </div>  

            <div className='bg-[#FFFCF8] w-[262px] h-[275px] border-l-8 border-[#22D1EE]  shadow-lg rounded-[10px]'>
            <h3 className='text-[25px] text-center font-Lato font-normal leading-[10px] mt-[2rem]'>Dr. Marshall Cook</h3>
            <p className='text-[15px] text-[#3D3D3D] ml-[1.4rem] font-Lato font-normal leading-[10px] mt-[2rem]'>09 AM - 11 AM (1.5hrs)</p>
            <p className='text-[15px] text-[#000000] ml-[1.4rem] font-Lato font-normal leading-[10px] mt-[4rem]'>Diabetes Control Appointment</p>
            <p className='text-[15px] text-[#3D3D3D] ml-[1.4rem] font-Lato font-normal leading-[20px] mt-[2rem]'>Sed ut perspiciatis unde <br /> omnis iste natus error sit voluptatem .............</p>
            </div> 

            <div className='bg-[#FFFCF8] w-[262px] h-[275px] border-l-8 border-[#22D1EE]  shadow-lg rounded-[10px]'>
            <h3 className='text-[25px] text-center font-Lato font-normal leading-[10px] mt-[2rem]'>Dr. Robert Fox</h3>
            <p className='text-[15px] text-[#3D3D3D] ml-[1.4rem] font-Lato font-normal leading-[10px] mt-[2rem]'>10 AM - 12 AM (1.5hrs)</p>
            <p className='text-[15px] text-[#000000] ml-[1.4rem] font-Lato font-normal leading-[10px] mt-[4rem]'>Diabetes Control Appointment</p>
            <p className='text-[15px] text-[#3D3D3D] ml-[1.4rem] font-Lato font-normal leading-[20px] mt-[2rem]'>Sed ut perspiciatis unde <br /> omnis iste natus error sit voluptatem .............</p>
            </div> 

            <div className='bg-[#FFFCF8] w-[262px] h-[275px] border-l-8 border-[#22D1EE]  shadow-lg rounded-[10px]'>
            <h3 className='text-[25px] text-center font-Lato font-normal leading-[10px] mt-[2rem]'>Dr. John Wick</h3>
            <p className='text-[15px] text-[#3D3D3D] ml-[1.4rem] font-Lato font-normal leading-[10px] mt-[2rem]'>1 PM - 2 PM (1.5hrs)</p>
            <p className='text-[15px] text-[#000000] ml-[1.4rem] font-Lato font-normal leading-[10px] mt-[4rem]'>Death Control Appointment</p>
            <p className='text-[15px] text-[#3D3D3D] ml-[1.4rem] font-Lato font-normal leading-[20px] mt-[2rem]'>Sed ut perspiciatis unde <br /> omnis iste natus error sit voluptatem .............</p>
            </div> 

</div>

            </div>
        </div>
    )
}

export default PatientCalendar