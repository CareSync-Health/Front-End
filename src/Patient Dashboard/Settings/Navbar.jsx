import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-center gap-[3rem]'>
                <NavLink to='patient_profile'>
                    <h1>Profile</h1>
                </NavLink>
                <NavLink to='patient_payment'>
                    <h1>Payment</h1>
                </NavLink>
                <NavLink to='patient_'>
                    <h1>BMI Calculator</h1>
                </NavLink>
                <NavLink to='patient_security'>
                    <h1>Security Settings</h1>
                </NavLink>
            </nav>
        </div>
    )
}

export default Navbar