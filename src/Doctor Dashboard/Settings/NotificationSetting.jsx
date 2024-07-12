import React, { useState } from 'react'
import { useTheme } from '../Components/ThemeContext'

const NotificationSetting = () => {
  const { theme, appearance } = useTheme();
  const [check, setCheck] = useState(false)
  return (
    <div>
      <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <p className='font-medium text-xl mt-9'>When CareSync is Closed</p>
        <span className='flex justify-between items-center'>
          <p className='text-xl mt-8'>When CareSyn web page is closed continue to show notifications</p>
          <label className="switch">
            <div className="toggle-switch relative w-[4rem] h-[1.8rem]">
              <input
                checked={check}
                onChange={() => setCheck(!check)}
                id="switch"
                type="checkbox"
                className="hidden"
              />
              <label htmlFor="switch" className={`border  border-[#A6FFF2] absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-lg transition-all duration-300 before:absolute before:h-[1.55rem] before:w-[1.55rem] before:left-[2px] before:bottom-[2px] before:rounded-lg before:bg-[#A6FFF2] before:shadow-md before:transition-all before:duration-300 ${check ? 'before:translate-x-[2.15rem] before:bg-[#A6FFF2]' : ''}`} ></label>
            </div>
          </label>
        </span>
      </div>
    </div>
  )
}

export default NotificationSetting