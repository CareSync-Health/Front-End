import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import img from '../../../assets/verifyImg.png'

const VerifyAccount = () => {

  const [otp, setOtp] = useState(new Array(6).fill(""))

  function handleChange(e, index) {

    if(isNaN(e.target.value)) return false

    setOtp([...otp.map((data, indx) => (indx === index? e.target.value:data))])


    if(e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus()
    }

  }

  return (
    <div className='bg-[#E2F3F5] w-[100%] pb-[1.1rem] lg:px-[20px]'>
        <img src={logo} className='lg:w-[253px] xs:w-[200px]' />
        <div className='lg:px-[50px] xs:px-[15px] lg:flex gap-[8rem]'>
          <div className='lg:w-[50%]'>
            <h1 className='text-[#000] text-[40px] font-semibold font-Poppins '>Enter the code</h1>
            <p className='text-[rgba(0,0,0,5)] text-[18px] font-light font-Poppins text-start leading-[24px] mt-[1.5rem]'>Enter the OTP code that was sent to your email, be careful not to share the code with anyone.</p>
            <div className='w-[70%] my-[20px] flex gap-[10px] mt-[2rem]'>
              {
                otp.map((data, i) => {
                    return <input 
                            key={i} 
                            type='text' 
                            className='lg:w-[55px] xs:w-[48px] px-[10px] py-[10px] bg-[#eeee] rounded-[8px] outline-none text-center border-[1px] border-solid border-[#818181] focus:border-2 focus:border-[#818181] focus:border-solid text-[#000] text-[20px] font-semibold font-Poppins'
                            value={data} 
                            onChange={(e) => handleChange(e, i)}
                            maxLength={1}
                          />
                })
              }
            </div>

            <button type='submit' onClick={() => alert(otp.join(""))} className='bg-[#22D1EE] lg:w-[380px] xs:w-[350px] py-[13px] rounded-[8px] text-[16px] font-semibold font-Poppins text-[#fff] text-center lg:mt-[8rem] xs:mt-[11.95rem]'>Verify Email</button>
            <p className='text-[#000] text-[16px] font-normal font-Poppins mt-[1.5rem] lg:ms-[4rem] xs:ms-[3rem]'>Already have an account? <Link to='' className='text-[#22D1EE]'>Login</Link></p>
          </div>
          <div className='lg:w-[50%] lg:mt-[-3rem] lg:flex xs:hidden'>
              <img src={img} className='' />
          </div>
        </div>
    </div>
  )
}

export default VerifyAccount