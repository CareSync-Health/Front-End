import React, { useState } from 'react'
import { useTheme } from '../Components/ThemeContext'

const NotificationSetting = () => {
  const { theme, appearance } = useTheme();
const [check, setCheck] = useState(false)
  return (
    <div>
      <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <p className='font-medium text-xl mt-9'>When CareSync is Closed</p>
        <span>
          <p className='text-xl mt-8'>When CareSyn web page is closed continue to show notifications</p>
          <label class="switch">
            <div class="toggle-switch relative w-[80px] h-[40px]">
              <input checked={check} onChange={()=>setCheck(!check)} id="switch" type="checkbox" className='hidden'/>
              <label style={{background:`${check ? "linear-gradient(to right, #66bb6a, #43a047)" : 'linear-gradient(to right, #2e2e2e, #4a4a4a)'}`, transition:"background 0.3s"}} for="switch" className={`${check ? "before:translate-x-[40px] before:bg-[" : ""}absolute cursor-pointer before:absolute before:h-[36px] before:shadow-md before:duration-300 before:transition-all  before:w-[36px] before:left-[2px] before:bg-[#fff] before:-bottom-[2px] before:content-none top-0 left-0 right-0 bottom-0`}></label>
            </div>
          </label>
        </span>
      </div>
    </div>
  )
}

export default NotificationSetting