import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import PaymentTable from './PaymentTable'

const Payment = () => {
  return (
    <div>
        <div className='flex'>
        <Sidebar/>
      <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto bg-[#E2F3F5]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12}/>
        <div>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <div className='px-[30px] mt-[1rem]'>
            <h2 className='text-[#25282B] text-[40px] font-bold font-Lato'>Earnings</h2>
            <hr className='w-full h-[1.5px] bg-[#C7C7C7] mt-[1rem]'/>
            <h3 className='text-[#000] text-[14px] font-bold font-Lato mt-[2rem]'>Available Funds</h3>
            <div className='mt-[2rem] flex flex-wrap justify-between items-center'>
                <div className='border-[1px] border-solid border-[#C7C7C7] w-[315px]  rounded-[10px] p-[15px]'>
                    <h2 className='text-[#000] text-[14px] font-Lato font-medium leading-[20px]'>Balance available for use</h2>
                    <h2 className='text-[#000] text-[32px] font-Inter font-bold mt-[0.5rem]'>$0.00</h2>
                    <h3 className='text-[#000] text-[14px] font-Lato font-medium leading-[20px]'>Withdrawn to date:</h3>
                    <h3 className='text-[#000] text-[14px] font-Lato font-medium leading-[20px]'>$0.00</h3>
                    <button className='bg-[#A9A9A9] w-[264px] py-[10px] px-[10px] rounded-[10px] text-[#fff] text-[18px] font-Inter font-medium text-center mt-[3.2rem]'>Withdraw balance</button>
                    <h3 className='text-[#17B978] text-[15px] font-Inter font-medium text-start mt-[1rem]'><Link to='' className='underline'>Manage Payout Methods</Link></h3>
                </div>
                <div className='border-[1px] border-solid border-[#C7C7C7] w-[315px] rounded-[10px] p-[15px] lg:mt-0 xs:mt-[2rem]'>
                    <h2 className='text-[#000] text-[14px] font-Lato font-medium'>Payments being cleared</h2>
                    <h2 className='text-[#000] text-[32px] font-Inter font-bold mt-[0.5rem]'>$0.00</h2>
                    <hr className='w-full h-[2px] bg-[#DDDCDC] mt-[3rem]' />
                    <h3 className='text-[#000] text-[14px] font-Lato font-medium leading-[20px] mt-[1rem]'>Payments for active treatment:</h3>
                    <h3 className='text-[#000] text-[14px] font-Lato font-medium leading-[20px] mt-[10px]'>. . .</h3>
                    <h3 className='text-[#000] text-[14px] font-Lato font-medium leading-[20px] mt-[2.5rem]'>Available soon</h3>
                </div> 
                <div className='border-[1px] border-solid border-[#C7C7C7] w-[315px] rounded-[10px] p-[15px] lg:mt-0 xs:mt-[2rem]'>
                    <h2 className='text-[#000] text-[14px] font-Lato font-medium'>Earning to date</h2>
                    <h2 className='text-[#000] text-[32px] font-Inter font-bold mt-[0.5rem]'>$0.00</h2>
                    <h3 className='text-[#000] text-[14px] font-Lato font-medium leading-[20px] mt-[1.5rem]'>Your earnings since Joining</h3>
                    <hr className='w-full h-[2px] bg-[#DDDCDC] mt-[2rem]' />
                    <h3 className='text-[#000] text-[14px] font-Lato font-medium leading-[20px] mt-[5rem]'>Total Sum of Earning since you Joined</h3>
                </div>
            </div>

            <PaymentTable/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Payment