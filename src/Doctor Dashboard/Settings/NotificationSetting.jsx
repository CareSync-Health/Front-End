import React, { useState } from 'react'
import { useTheme } from '../Components/ThemeContext'
import play from "../../assets/Group 195.svg"

const NotificationSetting = () => {
  const { theme, appearance } = useTheme();
  const [check, setCheck] = useState(false)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  return (
    <div>
      <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <p className='font-medium text-xl mt-9'>When CareSync is Closed</p>
        <span className='flex mt-8 justify-between items-center'>
          <p className='text-xl'>When CareSyn web page is closed continue to show notifications</p>
          <label className="switch">
            <div className="toggle-switch relative w-[4rem] h-[1.8rem]">
              <input
                checked={check}
                onChange={() => setCheck(!check)}
                id="switch"
                type="checkbox"
                className="hidden"
              />
              <label htmlFor="switch" className={`border  border-[#22D1EE] absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-lg transition-all duration-300 before:absolute before:h-[1.55rem] before:w-[1.55rem] before:left-[2px] before:bottom-[2px] before:rounded-lg before:bg-[#22D1EE] before:shadow-md before:transition-all before:duration-300 ${check ? 'before:translate-x-[2.15rem] before:bg-[#22D1EE]' : ''}`} ></label>
            </div>
          </label>
        </span>
        <span className='flex mt-8 justify-between items-center'>
          <p className='text-xl'>Messages</p>
          <label className="switch1">
            <div className="toggle-switch relative w-[4rem] h-[1.8rem]">
              <input
                checked={check1}
                onChange={() => setCheck1(!check1)}
                id="switch1"
                type="checkbox"
                className="hidden"
              />
              <label htmlFor="switch1" className={`border  border-[#22D1EE] absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-lg transition-all duration-300 before:absolute before:h-[1.55rem] before:w-[1.55rem] before:left-[2px] before:bottom-[2px] before:rounded-lg before:bg-[#22D1EE] before:shadow-md before:transition-all before:duration-300 ${check1 ? 'before:translate-x-[2.15rem] before:bg-[#22D1EE]' : ''}`} ></label>
            </div>
          </label>
        </span>
        <span className='flex mt-8 justify-between items-center'>
          <p className='text-xl'>Appointment Schedule</p>
          <label className="switch2">
            <div className="toggle-switch relative w-[4rem] h-[1.8rem]">
              <input
                checked={check2}
                onChange={() => setCheck2(!check2)}
                id="switch2"
                type="checkbox"
                className="hidden"
              />
              <label htmlFor="switch2" className={`border  border-[#22D1EE] absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-lg transition-all duration-300 before:absolute before:h-[1.55rem] before:w-[1.55rem] before:left-[2px] before:bottom-[2px] before:rounded-lg before:bg-[#22D1EE] before:shadow-md before:transition-all before:duration-300 ${check2 ? 'before:translate-x-[2.15rem] before:bg-[#22D1EE]' : ''}`} ></label>
            </div>
          </label>
        </span>
        <span className='flex mt-8 justify-between items-center border-b pb-20'>
          <p className='text-xl'>Calls</p>
          <label className="switch3">
            <div className="toggle-switch relative w-[4rem] h-[1.8rem]">
              <input
                checked={check3}
                onChange={() => setCheck3(!check3)}
                id="switch3"
                type="checkbox"
                className="hidden"
              />
              <label htmlFor="switch3" className={`border  border-[#22D1EE] absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-lg transition-all duration-300 before:absolute before:h-[1.55rem] before:w-[1.55rem] before:left-[2px] before:bottom-[2px] before:rounded-lg before:bg-[#22D1EE] before:shadow-md before:transition-all before:duration-300 ${check3 ? 'before:translate-x-[2.15rem] before:bg-[#22D1EE]' : ''}`} ></label>
            </div>
          </label>
        </span>
        <p className='font-medium text-xl mt-9'>Notification Sound</p>
        <div>
          <p className='text-xl'>Message</p>
          <span className='text-xl flex items-center'>
            <img className='w-14' src={play} alt="" />
            Play Sound
          </span>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default NotificationSetting