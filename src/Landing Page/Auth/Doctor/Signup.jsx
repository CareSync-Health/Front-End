import React, { useState } from 'react'
import img from '../../../assets/Rectangle 35.png'
import img2 from '../../../assets/google.png'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { useDispatch } from 'react-redux'
import { doctor_register } from '../../../Redux/Actions/DoctorActions'

const Signup = () => {
    const [lastname, setLastName] = useState();
    const [firstname, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch()
    const submitHandler = ()=>{
        const body = {

        }
        dispatch(doctor_register(body))
    }
  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='px-[50px] py-[40px]'>
        <div className='flex justify-between gap-[10rem]'>
            <div>
                <img src={logo} className='ms-[-2rem]' />
                <h1 className='text-[rgba(255,255,255,1)] text-[24px] leading-[34px] font-[700] mt-[4rem]'>CareSync: The fastest way to recruit research participants</h1>
                <p className='text-[rgba(255,255,255,1)] text-[20px] font-[400] leading-[30px] mt-[8rem]'>Are you a doctor or healthcare professional looking for the fastest way to recruit research participants? CareSync is the perfect solution for you.</p>
                <p className='text-[rgba(255,255,255,1)] text-[20px] font-[400] leading-[30px] mt-[3rem]'>CareSync is a free and easy-to-use website that connects doctors and healthcare professionals with research participants. With CareSync, you can create and post research studies in minutes, and reach thousands of potential participants.</p>
            </div>
            <div className='shadow-xl bg-[#fff] w-[518px] px-[20px] py-[15px] rounded-[8px]'>
                <h1 className='text-[30px] leading-[39.99px] font-[700] text-center'>Sign Up</h1>
                <form>
                    <label className='text-[#000] text-[17px] font-[600] mt-3'>First Name</label><br/>
                    <input onChange={(e)=> setFirstName(e.target.value)}  type="text" className='w-[456px] px-[10px] py-[10px] mt-[10px] rounded-[8px] border-[0.5px] opacity-[100%] outline-none bg-transparent text-[#000] text-[17px] mb-[1rem]' required />
                    <label className='text-[#000] text-[17px] font-[600] mt-3'>Last Name</label><br/>
                    <input type="text" className='w-[456px] px-[10px] py-[10px] mt-[10px] rounded-[8px] border-[0.5px] opacity-[100%] outline-none bg-transparent text-[#000] text-[17px] mb-[1rem]' required />
                    <label className='text-[#000] text-[17px] font-[600] mt-3'>Email</label><br/>
                    <input type="email" className='w-[456px] px-[10px] py-[10px] mt-[10px] rounded-[8px] border-[0.5px] opacity-[100%] outline-none bg-transparent text-[#000] text-[17px] mb-[1rem]' required />
                    <label className='text-[#000] text-[17px] font-[600]'>Password</label><br/>
                    <input type="password" className='w-[456px] px-[10px] py-[10px] mt-[10px] rounded-[8px] border-[0.5px] opacity-[100%] outline-none bg-transparent text-[#000] text-[17px]' required />
                    <button type='submit' className='bg-[#17B978] w-[150px] py-[10px] rounded-[8px] px-[10px] text-center text-[#fff] font-[500] ms-[9rem] mt-[1.5rem]'>Sign Up</button>
                    <center>
                        <div className="flex gap-8 mt-5">
                            <hr className="w-2/5 mt-3" />
                            <p>OR</p>
                            <hr className="w-2/5 mt-3" />
                        </div>
                    </center>
                    <center>
                    <div className='mt-5'>
                        <input type="checkbox" required className='bg-[#F6F6F6]' />
                        <span className='ms-2 text-[13px] font-[400] font-Poppins'>Yes, I understand and agree to the CareSync Terms of Service</span>
                    </div>
                    <Link to='' className='text-[#22D1EE] font-[400]'>Terms of Service</Link>
                    </center>
                    <div className="flex gap-2 shadow-lg border mt-[2rem] bg-white w-[100%] px-[130px] py-[11px] rounded-[8px] font-Roboto cursor-pointer">
                        <img src={img2} alt="google-icon" className="w-6" />
                        {/* <FaGoogle/> */}
                        <h6>Signup with Google</h6>
                    </div>
                    <h2 className='text-[15px] leading-[21.68px] font-[400] font-Poppins text-center mt-[3rem] '>Already have an account? <Link to='/doctorAuth' className='text-[#22D1EE]'>Login</Link></h2>
                    <h2 className='text-[#000] text-[15px] leading-[21.68px] font-[400] font-Poppins mt-[10px] text-center'>Are you a Patient? Click <Link to='/patientSignup' className='text-[#22D1EE]'>here</Link> to sign up</h2>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup