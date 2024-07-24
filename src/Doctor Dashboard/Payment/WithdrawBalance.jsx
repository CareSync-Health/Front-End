import React from 'react'
import { useTheme } from './../Components/ThemeContext';
import Sidebar from './../Components/Sidebar';
import Navbar from './../Components/Navbar';

const WithdrawBalance = () => {

  const { theme, appearance } = useTheme();

  return (
    <div>
      <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        <Sidebar />
        <div className='flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          <Navbar messageCount={5} notificationCount={12} />
          <div>
            {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}

            <div className='lg:px-[30px] xs:px-[10px] mt-[1rem]'>
              WithdrawBalance
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawBalance