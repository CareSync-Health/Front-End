import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../Components/ThemeContext';

const Navbar = () => {
  const { theme, appearance } = useTheme();

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const linkClasses = 'text-[19px] font-medium font-Inter pb-1';
  const activeClass = `border-b-2 ${appearance === 'green' ? 'border-[#17B978]' : appearance === 'blue' ? 'border-[#22D1EE]' : appearance === 'accent' ? 'border-[#A6FFF2]' : theme === 'dark' ? 'border-white' : 'border-black'}`;

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className={`flex items-center gap-[6rem] mt-8 ${theme === 'dark' ? '' : theme === 'light' ? '' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
      <NavLink
        to='general_setting'
        className={({ isActive }) =>
          (isActive || activeLink.includes('general_setting')) ? `${linkClasses} ${activeClass}` : linkClasses
        }
        onClick={() => handleLinkClick('/general_setting')}
      >
        General
      </NavLink>
      <NavLink
        to='account_setting'
        className={({ isActive }) =>
          (isActive || activeLink.includes('account_setting')) ? `${linkClasses} ${activeClass}` : linkClasses
        }
        onClick={() => handleLinkClick('/account_setting')}
      >
        Account
      </NavLink>
      <NavLink
        to='message_setting'
        className={({ isActive }) =>
          (isActive || activeLink.includes('message_setting')) ? `${linkClasses} ${activeClass}` : linkClasses
        }
        onClick={() => handleLinkClick('/message_setting')}
      >
        Message
      </NavLink>
      <NavLink
        to='notification_setting'
        className={({ isActive }) =>
          (isActive || activeLink.includes('notification_setting')) ? `${linkClasses} ${activeClass}` : linkClasses
        }
        onClick={() => handleLinkClick('/notification_setting')}
      >
        Notification
      </NavLink>
      <NavLink
        to='security_setting'
        className={({ isActive }) =>
          (isActive || activeLink.includes('security_setting')) ? `${linkClasses} ${activeClass}` : linkClasses
        }
        onClick={() => handleLinkClick('/security_setting')}
      >
        Security
      </NavLink>
    </div>
  );
};

export default Navbar;