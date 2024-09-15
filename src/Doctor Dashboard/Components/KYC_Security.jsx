import React, { useState } from 'react'
import { IoHelpOutline } from 'react-icons/io5'

const KYC_Security = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='flex justify-center items-center h-screen text-start'>
                <div className='bg-[#ecebeb] py-[25px] px-[15px]'>
                    <h1 className='lg:text-[28px] xs:text-[25px] font-bold font-Nunito lg:leading-[46px]'>Hang tight, we're reviewing your application now</h1>
                    <hr className='w-full h-[2px] bg-[#d6d6d6] mt-3' />
                    <p className='text-[16px] font-Nunito font-medium mt-[1rem]'>Thank you so much for taking time to submit your application to join caresync as a medical practitioner!</p>
                    <p className='text-[16px] font-Nunito font-medium mt-[0.8rem]'>Expect a decision back to you very soon. In the interim, please reach out to our Support Team with any questions via the Need</p>
                    <p className='text-[16px] font-Nunito font-medium lg:mt-o xs:mt-2'>Help? button and we will get back to you as soon as possible.</p>
                </div>
            </div>
            <div className='fixed z-50 lg:right-[3rem] xs:right-[1rem] lg:bottom-[2rem] xs:bottom-[2rem]'>
                <div>
                    <div
                        className='w-[46px] text-[24px] py-[10px] text-center px-[11px] text-white bg-[#17B978] rounded-[100px] cursor-pointer'
                        onClick={toggleChat}
                    >
                        <IoHelpOutline />
                    </div>

                    {isOpen && (
                        <div className="rounded-[10px] shadow-lg fixed lg:bottom-20 xs:bottom-[6rem] lg:right-12 xs:right-0 z-50 flex flex-col">
                            <iframe src="https://app.fastbots.ai/embed/clxz8mllh00aunibbb63ntw1p" className='rounded-[10px] lg:w-[400px] lg:h-[80vh] xs:w-[378px] xs:h-[73vh]'></iframe>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default KYC_Security