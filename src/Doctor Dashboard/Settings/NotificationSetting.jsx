import React from 'react'
import { useTheme } from '../Components/ThemeContext'

const NotificationSetting = () => {
  const { theme, appearance } = useTheme();

  return (
    <div>
         <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <p className='font-medium text-xl mt-9'>When CareSync is Closed</p>
            <span>
              <p className='text-xl'>When CareSyn web page is closed continue to show notifications</p>

            </span>
        </div>
    </div>
  )
}

export default NotificationSetting