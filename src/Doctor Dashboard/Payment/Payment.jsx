import React, { useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { Link, useParams } from 'react-router-dom'
import PaymentTable from './PaymentTable'
import { useTheme } from '../Components/ThemeContext'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctorDebts, getDoctorEarnings, loadDoctor } from '@/Redux/Actions/DoctorActions'

const Payment = () => {
  const { theme, appearance } = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();
  const doctorId = id;
  const {earnings = 0} = useSelector((state) => state.getTotalEarnings)
  const debts = useSelector((state) => state.doctorDebt.debts);
  const doctor = useSelector((state) => state.loadDoctor.doctor);

  useEffect(() => {
    dispatch(loadDoctor(id));
    dispatch(getDoctorEarnings(id));
    dispatch(getDoctorDebts(id));
  }, [dispatch, id]);

   // Determine if debt should be displayed as red
   const debtValue = debts?.debt || 0;
   const isDebtNegative = debtValue >= 1;
   const formattedDebt = isDebtNegative ? `- ₦ ${debtValue.toLocaleString()}` : `₦ ${debtValue.toLocaleString()}`;


  return (
    <div>
      <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        <Sidebar />
        <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          <Navbar messageCount={5} notificationCount={12} />
          <div>
            {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
            <div className='lg:px-[30px] xs:px-[10px] mt-[1rem]'>
              <h2 className='text-[40px] font-bold font-Lato'>Earnings</h2>
              <hr className='w-full h-[1.5px] bg-[#C7C7C7] mt-[1rem]' />
              <h3 className='text-[14px] font-bold font-Lato mt-[2rem]'>Available Funds</h3>
              <div className='mt-[2rem] flex flex-wrap justify-between items-center'>
                <div className='border-[1px] border-solid border-[#C7C7C7] lg:w-[315px] xs:w-full rounded-[10px] p-[15px]'>
                  <h2 className='text-[14px] font-Lato font-medium leading-[20px]'>Balance paid</h2>
                  <h2 className='text-[32px] font-Inter font-bold mt-[0.5rem]'>₦ {doctor?.paymentsMade?.toLocaleString()}</h2>
                  <h3 className='text-[14px] font-Lato font-medium leading-[20px]'>Paid till date:</h3>
                  <h3 className='text-[14px] font-Lato font-medium leading-[20px]'>₦ {doctor?.paymentsMade?.toLocaleString()}</h3>
                  <button className={`w-[264px] py-[10px] px-[10px] rounded-[10px] text-[#fff] text-[18px] font-Inter font-medium text-center mt-[3.2rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#A9A9A9]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}> <Link to={`/doctor_payment/${doctor?._id}`}>Pay Debt</Link></button>
                  <h3 className='text-[#17B978] text-[15px] font-Inter font-medium text-start mt-[1rem]'><Link to='/payment_method' className='underline'>Manage Payout Methods</Link></h3>
                </div>
                <div className='border-[1px] border-solid border-[#C7C7C7] lg:w-[315px] xs:w-full rounded-[10px] p-[15px] lg:mt-0 xs:mt-[2rem]'>
                  <h2 className='text-[14px] font-Lato font-medium'>Debts to be cleared</h2>
                  <h2 className={`text-[32px] font-Inter font-bold mt-[0.5rem] ${isDebtNegative ? 'text-red-500' : ''}`}>{formattedDebt}</h2>
                  <hr className='w-full h-[2px] bg-[#DDDCDC] mt-[3rem]' />
                  <h3 className='text-[14px] font-Lato font-medium leading-[20px] mt-[1rem]'>Payments for active treatment:</h3>
                  <h3 className='text-[14px] font-Lato font-medium leading-[20px] mt-[10px]'>. . .</h3>
                  <h3 className='text-[14px] font-Lato font-medium leading-[20px] mt-[2.5rem]'>Available soon</h3>
                </div>
                <div className='border-[1px] border-solid border-[#C7C7C7] lg:w-[315px] xs:w-full rounded-[10px] p-[15px] lg:mt-0 xs:mt-[2rem]'>
                  <h2 className='text-[14px] font-Lato font-medium'>Earning to date</h2>
                  <h2 className='text-[32px] font-Inter font-bold mt-[0.5rem]'>₦ {earnings?.toLocaleString()}</h2>
                  <h3 className='text-[14px] font-Lato font-medium leading-[20px] mt-[1.5rem]'>Your earnings since Joining</h3>
                  <hr className='w-full h-[2px] bg-[#DDDCDC] mt-[2rem]' />
                  <h3 className='text-[14px] font-Lato font-medium leading-[20px] mt-[5rem]'>Total Sum of Earning since you Joined</h3>
                </div>
              </div>

              <PaymentTable doctorId={doctorId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment