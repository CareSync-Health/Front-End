import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar2 = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const linkClasses = `
    lg:text-[16px] 
    xs:text-[13.5px] 
    font-normal 
    font-Inter 
    pb-1 
    hover:font-bold 
    hover:border-b-2 
    hover:border-[#000000] 
    hover:shadow-2xl 
    transition 
    duration-300
    hover:cursor-pointer
    hover:rounded-br-md
  `;
  const activeClass = "font-bold border-b-2 border-[#000000] shadow-2xl";
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="flex items-center xs:gap-[1rem] lg:gap-[6rem] mt-8 justify-center">
      <NavLink
        to="/profile_setting"
        className={({ isActive }) =>
          isActive || activeLink.includes("/profile_setting")
            ? `${linkClasses} ${activeClass}`
            : linkClasses
        }
        onClick={() => handleLinkClick("/profile_setting")}
      >
        Profile
      </NavLink>
      <NavLink
        to="/payment_setting"
        className={({ isActive }) =>
          isActive || activeLink.includes("/payment_setting")
            ? `${linkClasses} ${activeClass}`
            : linkClasses
        }
        onClick={() => handleLinkClick("/payment_setting")}
      >
        Payment
      </NavLink>
      <NavLink
        to="/bmi_calculator_setting"
        className={({ isActive }) =>
          isActive || activeLink.includes("/bmi_calculator_setting")
            ? `${linkClasses} ${activeClass}`
            : linkClasses
        }
        onClick={() => handleLinkClick("/bmi_calculator_setting")}
      >
        BMI Calculator
      </NavLink>
      <NavLink
        to="/security_setting"
        className={({ isActive }) =>
          isActive || activeLink.includes("/security_setting")
            ? `${linkClasses} ${activeClass}`
            : linkClasses
        }
        onClick={() => handleLinkClick("/security_setting")}
      >
        Security Settings
      </NavLink>
    </div>
  );
};

export default Navbar2;
