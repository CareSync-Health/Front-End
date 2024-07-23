import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const linkClasses = 'lg:text-[18px] xs:text-[13.5px] font-medium font-Inter pb-1';
    const activeClass = 'border-b-2 border-black';

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className='mt-[3rem] px-[170px]'>
            <nav >
                <ul className='flex items-center justify-between'>
                    <NavLink
                        to='patient_profile'
                        className={({ isActive }) => (isActive || activeLink.includes('patient_profile')) ? `${linkClasses} ${activeClass}` : linkClasses}
                        onClick={() => handleLinkClick('/patient_profile')}
                    >
                        <h1>Profile</h1>
                    </NavLink>
                    <NavLink
                        to='patient_payment'
                        className={({ isActive }) => (isActive || activeLink.includes('patient_payment')) ? `${linkClasses} ${activeClass}` : linkClasses}
                        onClick={() => handleLinkClick('/patient_payment')}
                    >
                        <h1>Payment</h1>
                    </NavLink>
                    <NavLink
                        to='patient_BmiCalculator'
                        className={({ isActive }) => (isActive || activeLink.includes('patient_BmiCalculator')) ? `${linkClasses} ${activeClass}` : linkClasses}
                        onClick={() => handleLinkClick('/patient_BmiCalculator')}
                    >
                        <h1>BMI Calculator</h1>
                    </NavLink>
                    <NavLink
                        to='patient_security'
                        className={({ isActive }) => (isActive || activeLink.includes('patient_security')) ? `${linkClasses} ${activeClass}` : linkClasses}
                        onClick={() => handleLinkClick('/patient_security')}
                    >
                        <h1>Security Settings</h1>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar