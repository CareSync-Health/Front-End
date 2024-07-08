import React from 'react'

const SecuritySetting = () => {
  return (
    <div>
         <div className='lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#E2F3F5] mt-5' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          <div className='mt-[2rem]'>
            <h1 className='text-[#25282B] text-[2rem] font-Inter font-bold leading-[10px]'>Authorization</h1>
            <h2 className='mt-[3rem] text-[#25282B] text-[2rem] font-Inter font-medium leading-[3rem]'>Information for login in to your Caresync account <br /> Regularly change your password if you suspect it may have been compromised</h2>
          </div>
          <div className='bg-[#E2F3F5]  border border-gray-400 h-[6.5rem] rounded-lg mt-[3rem]  mb-[3rem]'>
           
              <div className='flex border-b-2 border-b-gray-400 gap-[32rem]'>
                  <h2 className='px-4 py-3 text-sm font-semibold tracking-wide text-left'>Email</h2>
                  <h2 className='px-4 py-3 text-sm font-semibold tracking-wide text-left'>user.....gmail.com</h2>
              </div>
                <div className='flex justify-between'>
                  <h2 className='p-4 text-sm text-gray-700'>Password</h2>
                  <h2 className='p-4 text-sm text-gray-700'>************</h2>
                  <button className='bg-[#A9A9A9] w-[100px] h-[34px] rounded-[6px] mt-[0.6rem] mr-[1rem]'><p className='text-white'>Change</p></button>
                </div>
            
          </div>
    
          <div className='mt-[3.5rem]'>
            <h1 className='text-[#25282B] text-[2rem] font-Inter font-bold leading-[10px]'>2-Step verification</h1>
            <h2 className='mt-[3rem] text-[#25282B] text-[2rem] font-Inter font-medium leading-[3rem]'>2-Step Verification ensures that all sensitive transaction are authorized</h2>
          </div>

          <div className='bg-[#E2F3F5] flex justify-between items-center border border-gray-400 h-[6.5rem] rounded-lg mt-[3rem]  mb-[3rem]'>
            
                  <h3 className='p-4 text-sm text-gray-700 '>Security Type</h3>
                  <h3 className='p-4 text-sm text-gray-700 '>Authenticator App</h3>
                  <button className='bg-[#A9A9A9] w-[100px] h-[34px] rounded-[6px] mt-[0.6rem] mr-[1rem]'><p className='text-white'>Change</p></button>
              
          </div>


        </div>
    </div>
  )
}

export default SecuritySetting