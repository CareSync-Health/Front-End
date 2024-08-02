import React from 'react'

const PatientSecurity = () => {

  return (
    <div>
         <div className='lg:px-[30px] xs:px-[10px] mt-[5rem]'>
          <div className='mt-[3rem]'>
            <h1 className='text-[25px] font-Nunito font-bold leading-[10px]'>Authorization</h1>
            <p className='mt-[2rem] lg:text-[19px] xs:text-[17px] font-Nunito font-medium lg:leading-[40px]'>Information for login in to your Caresync account</p>
            <p className='lg:text-[19px] xs:text-[17px] lg:mt-0 xs:mt-3 font-Nunito font-medium lg:leading-[40px]'>Regularly change your password if you suspect it may have been compromised</p>
          </div>
          <div className='border border-gray-400 rounded-lg mt-[3rem] mb-[3rem]'>
           
              <div className='flex border-b-2 border-b-gray-400 lg:gap-[29rem] xs:gap-[9rem] py-4 px-4'>
                  <h2 className='text-[16px] font-Mulish font-semibold tracking-wide text-left'>Email</h2>
                  <h2 className='text-[16px] font-Mulish font-semibold tracking-wide text-left'>user....@gmail.com</h2>
              </div>
                <div className='flex justify-between items-center py-[10px] px-4'>
                  <h2 className='text-[14px] font-Mulish font-normal'>Password</h2>
                  <h2 className='text-[14px] font-Mulish font-normal'>************</h2>
                  <button className='bg-[#A9A9A9] w-[100px] px-[10px] py-[5px] rounded-[6px]'><p className='text-white'>Change</p></button>
                </div>
            
          </div>
    
          <div className='mt-[3.5rem]'>
            <h1 className='text-[25px] font-Mulish font-bold leading-[10px]'>2-Step verification</h1>
            <h2 className='mt-[3rem] lg:text-[19px] xs:text-[17px] font-Mulish font-medium lg:leading-[3rem]'>2-Step Verification ensures that all sensitive transaction are authorized by you.</h2>
          </div>

          <div className='flex justify-between items-center border border-gray-400 py-[15px] lg:px-4 xs:px-2 rounded-lg mt-[3rem] mb-[3rem]'>
            <h3 className='text-[15px] font-Mulish font-medium'>Security Type</h3>
            <h3 className='text-[15px] font-Mulish font-medium'>Authenticator App</h3>
            <button className='bg-[#A9A9A9] w-[100px] px-[10px] py-[7px] rounded-[6px]'><p className='text-white'>Change</p></button>
          </div>


        </div>
    </div>
  )
}

export default PatientSecurity