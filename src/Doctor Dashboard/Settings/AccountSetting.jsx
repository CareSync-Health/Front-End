import React from 'react'
import { useTheme } from '../Components/ThemeContext'

const AccountSetting = () => {
  const { theme, appearance } = useTheme()

  return (
    <div>
         <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
           <div className='mt-[3rem]'>
              <div className='flex items-center gap-[10rem]'>
                <div className={`w-[390px] rounded-[10px] px-[20px] py-[20px] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#A6FFF2]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  <h1 className='text-[20px] font-normal font-inter leading-[46px]'>Verification Status</h1>
                  <h1 className='text-[#17B978] text-[25px] font-extrabold font-Inter lading-[46px]'>Fully Verified</h1>
                  <h1 className='text-[17px] font-normal font-Inter leading-[46px]'>3/3 steps completed</h1>
                </div>
                <div className={`w-[390px] rounded-[10px] px-[20px] py-[20px] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#A6FFF2]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  <h1 className='text-[20px] font-normal font-inter leading-[46px]'>Total Patient attended monthly</h1>
                  <h1 className='text-[#17B978] text-[25px] font-extrabold font-Inter lading-[46px]'>Unlimited</h1>
                  <h1 className='text-[17px] font-normal font-Inter leading-[46px]'>Based on performance</h1>
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default AccountSetting