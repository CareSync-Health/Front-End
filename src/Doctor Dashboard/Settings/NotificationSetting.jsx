import React from 'react'
import { useTheme } from '../Components/ThemeContext'

const NotificationSetting = () => {
  const { theme, appearance } = useTheme();
const 
  return (
    <div>
      <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <p className='font-medium text-xl mt-9'>When CareSync is Closed</p>
        <span>
          <p className='text-xl mt-8'>When CareSyn web page is closed continue to show notifications</p>
          <label class="switch">
            <div class="toggle-switch relative w-[80px] h-[40px]">
              <input id="switch" type="checkbox" className='hidden group'/>
              <label style={{background:"linear-gradient(to right, #2e2e2e, #4a4a4a)", transition:"background 0.3s"}} for="switch" className='absolute group-checked: cursor-pointer top-0 left-0 right-0 bottom-0'></label>
            </div>
          </label>
        </span>
      </div>
    </div>
  )
}

export default NotificationSetting