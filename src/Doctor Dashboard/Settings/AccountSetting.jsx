import React from 'react'
import { useTheme } from '../Components/ThemeContext'

const AccountSetting = () => {
  const { theme, appearance } = useTheme()

  return (
    <div>
         <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            Account Setting
        </div>
    </div>
  )
}

export default AccountSetting