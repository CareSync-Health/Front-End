import { loadPatient } from '@/Redux/Actions/PatientActions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const {patient} = useSelector((state) => state.loadPatient);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(loadPatient());
    }, [dispatch])

    const linkClasses = 'lg:text-[18px] xs:text-[13.5px] font-medium font-Inter pb-1';
    const activeClass = 'border-b-2 border-black';

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className='mt-[3rem] lg:px-[170px] xs:px-[8px]'>
            <nav >
                <ul className='flex items-center justify-between'>
                    <NavLink
                        to={`patient_profile/${patient?._id}`}
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
                        to={`patient_healthProfile/${patient?._id}`}
                        className={({ isActive }) => (isActive || activeLink.includes('patient_healthProfile')) ? `${linkClasses} ${activeClass}` : linkClasses}
                        onClick={() => handleLinkClick('/patient_healthProfile')}
                    >
                        <h1>Health Profile</h1>
                    </NavLink>
                    <NavLink
                        to={`patient_security/${patient?._id}`}
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