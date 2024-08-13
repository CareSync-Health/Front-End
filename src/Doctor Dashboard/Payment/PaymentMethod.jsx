import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { useTheme } from '../Components/ThemeContext'
import vector80 from '../../assets/Icons/vector80.svg'
import bankcard from '../../assets/Icons/bankcard.svg'
import stripe from '../../assets/Icons/stripe.svg'

// import vector80 from '../../assets/Icons/vector80.svg'

const PaymentMethod = () => {
    const { theme, appearance } = useTheme();

    return (
        <div>
            <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <Sidebar />
                <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                    <Navbar messageCount={5} notificationCount={12} />
                    <div>
                        {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
                        <div className="lg:px-[30px] xs:px-[10px] mt-[1rem]">
                            <h2 className="text-[32px] font-bold font-Lato">Withdrawal</h2>
                            <hr className="w-full h-[1.5px] bg-[#C7C7C7] mt-[1rem]" />
                            <div className='mt-[2rem]'>
                                <h1 className='lg:text-[23px] xs:text-[20px] font-Mulish font-bold'>My saved methods</h1>

                                <div className={`w-[21rem] p-6 mt-[1rem] rounded-[0.5rem] flex gap-[2rem] items-center shadow-lg ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#EEEEEE]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                    <div className='mt-2'>
                                        <img src={vector80} className="w-[2rem] text-white" alt="vector80" />
                                        <h2 className='text-[15px] leading-[22.5px] mt-1 font-bold font-Mulish'>NGN</h2>
                                    </div>

                                    <div className=''>
                                        <h2 className='text-[15px] font-Mulish font-medium'>Online Bank Transfer</h2>
                                        <h2 className='text-[15px] font-bold font-Mulish'>08...23......2424</h2>
                                    </div>
                                </div>

                                {/*THIS IS THE ALL PAYMENT METHODS PART */}
                                <h1 className='lg:text-[23px] xs:text-[20px] font-bold mt-[4rem] font-Mulish'>All payment methods</h1>

                                <div className='flex flex-wrap justify-between lg:pr-[10rem] mt-[2rem]'>
                                    <div className={`lg:w-[375px] xs:w-full rounded-[0.5rem] shadow-lg ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#EEEEEE]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                        <div className='px-4 py-3 pt-[1.5rem] justify-between items-center flex '>
                                            <img src={vector80} alt="vector80" />
                                            <h2 className='text-[15px] font-Mulish font-extrabold'>Online Bank Transfer</h2>
                                            <p className='bg-[rgba(121,255,175,0.2)] w-[90px] rounded-[1rem] p-[3px] text-center text-[#17B978] text-[14px] font-normal font-Mulish'>Most used</p>
                                        </div>
                                        <hr className='w-full h-[2px] bg-gray-400' />

                                        <div className='p-3'>
                                            <h2 className='text-[15px] font-normal font-Mulish flex items-center gap-[10px]'>Processing - <span className='font-bold '>Instant 30 minutes</span></h2>
                                            <h2 className='text-[15px] font-normal font-Mulish flex items-center gap-[15px] mt-2'>Fee  <span className='font-bold'>0%</span></h2>
                                        </div>
                                    </div>

                                    <div className={`lg:w-[375px] xs:w-full rounded-[0.5rem] lg:mt-0 xs:mt-[2rem] shadow-lg ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#EEEEEE]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                        <div className='px-4 py-3 pt-[1.5rem] gap-[1.5rem] items-center flex '>
                                            <img src={bankcard} alt="bankcard" />
                                            <h2 className='text-[15px] font-Mulish font-extrabold'>Bank Card</h2>
                                        </div>
                                        <hr className='w-full h-[2px] bg-gray-400' />

                                        <div className='p-3'>
                                            <h2 className='text-[15px] font-normal font-Mulish flex items-center gap-[10px]'>Processing - <span className='font-bold '>Instant 30 minutes</span></h2>
                                            <h2 className='text-[15px] font-normal font-Mulish flex items-center gap-[15px] mt-2'>Fee  <span className='font-bold'>2%</span></h2>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-wrap justify-between lg:pr-[10rem] mt-[2rem] mb-[3rem]'>
                                    <div className={`lg:w-[375px] xs:w-full rounded-[0.5rem] shadow-lg ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#EEEEEE]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                        <div className='px-4 py-[5px] gap-[1.5rem] items-center flex '>
                                            <img src={stripe} alt="bankcard" />
                                            <h2 className='text-[16px] font-Mulish font-extrabold'>Stripe</h2>
                                        </div>
                                        <hr className='w-full h-[2px] bg-gray-400' />

                                        <div className='p-3'>
                                            <h2 className='text-[15px] font-normal font-Mulish flex items-center gap-[10px]'>Processing - <span className='font-bold '>Instant 30 minutes</span></h2>
                                            <h2 className='text-[15px] font-normal font-Mulish flex items-center gap-[15px] mt-2'>Fee  <span className='font-bold'>5%</span></h2>
                                        </div>
                                    </div>

                                    <div className={`lg:w-[375px] xs:w-full rounded-[0.5rem] lg:mt-0 xs:mt-[2rem] shadow-lg ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#EEEEEE]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                        <div className='px-4 py-3 pt-[1.5rem] gap-[1.5rem] items-center flex '>
                                            <img src={bankcard} alt="bankcard" />
                                            <h2 className='text-[15px] font-Mulish font-extrabold'>Pay with Bank</h2>
                                        </div>
                                        <hr className='w-full h-[2px] bg-gray-400' />

                                        <div className='p-3'>
                                            <h2 className='text-[15px] font-normal font-Mulish flex items-center gap-[10px]'>Processing - <span className='font-bold '>30 minutes</span></h2>
                                            <h2 className='text-[15px] font-normal font-Mulish flex items-center gap-[15px] mt-2'>Fee  <span className='font-bold'>0%</span></h2>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod