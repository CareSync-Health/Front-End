import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const linkClasses = 'text-[#000000] text-[19px] font-medium font-Inter pb-1';
  const activeClass = 'border-b-2 border-black';

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='flex items-center gap-[6rem] mt-8'>
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