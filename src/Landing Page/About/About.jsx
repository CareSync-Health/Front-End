import React from 'react'
import Navbar from '../Navbar'
import about from '../../assets/about.png'
import elipse from '../../assets/Elipse.png'
import circle from '../../assets/circle.png'
import quote from '../../assets/quote.png' 
import { RiDoubleQuotesR } from "react-icons/ri";
import Footer from '../Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${about})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='h-[90vh] pt-[3rem] px-[10px]'>
            {/* <h1 className='text-[#fff] text-[35px] font-extrabold font-Almarai w-[1149px] ms-[5.5rem] text-center'>Welcome to CareSync – Your Trusted Healthcare Companion</h1> */}
            <h2 className='text-[18px] text-[#FFEFEC] font-Poppins font-bold text-center mt-[4rem]'>Read</h2>
            <h1 className='text-[#fff] text-[100px] font-Yesteryear font-normal mt-[1rem] text-center'>About Us</h1>
            <p className='text-[#fff] lg:text-[22px] xs:text-[18px] font-Almarai font-normal text-center lg:w-[990px] lg:ms-[12rem] mt-[3rem]'>At CareSync, we believe that managing your health should be seamless, empowering, and tailored to your needs. Our mission is to make healthcare easy for you, putting you in control of your well-being with the convenience of a single, user-friendly app.</p>
        </div>
        <div className='mt-[3rem]'>
          <h1 className='text-[70px] text-[#22D1EE] text-center font-Yesteryear font-normal'>Our Vision</h1>
          <div className='lg:flex items-center gap-[10rem] lg:px-[60px] xs:px-[10px] mt-[4rem]'>
            <div className='lg:w-[50%]'>
              <h1 className='text-[#181E4B] lg:text-[40px] xs:text-[30px] font-bold font-Volkhov'>Health Made Easy</h1>
              <p className='lg:text-[22px] xs:text-[18px] leading-[38px] font-normal font-Inter text-start text-[#000] lg:mt-[1.5rem] xs:mt-[0.5rem]'>In a world where health information is scattered, and appointments can be overwhelming, CareSync stands as your beacon of simplicity. We envision a future where everyone has effortless access to their health records, schedules, and reminders at their fingertips.</p>
            </div>
            <div className='lg:w-[50%] lg:mt-0 xs:mt-[4rem]'>
              <img src={elipse} className='lg:w-[75%] xs:w-[105%]' />
            </div>
          </div>
        </div>

        <div className='bg-[#E2F3F5] pb-[5rem] mt-[8rem] pt-[3rem] px-[10px]'>
          <h1 className='text-[#17B978] text-[50px] font-Yesteryear font-normal text-center'>Why CareSync?</h1>
          <p className='text-[#000] lg:text-[20px] xs:text-[17px] font-Inter font-medium text-center mt-[2rem] lg:w-[1000px] lg:ms-[12rem] leading-auto'>Unified Health Management: CareSync is more than just an app; it's a holistic platform designed to streamline your healthcare journey. With CareSync, you can:</p>
          <div className='lg:px-[40px] xs:px-[10px] flex flex-wrap gap-[4rem] items-center mt-[5rem]'>
            <div className='bg-[#fff] lg:w-[598px] lg:h-[290px] xs:h-[350px] px-[30px] py-[20px]'>
              <h1 className='text-[#000] lg:text-[24px] xs:text-[22px] font-Roboto font-bold text-start'>1. Schedule Appointments with Ease:</h1>
              <ul className='lg:mt-[3rem] xs:mt-5 list-disc ms-[2rem]'>
                <li className='text-[#000] text-[18px] font-Roboto font-normal text-start'>Book appointments with your preferred healthcare providers hassle-free.</li>
                <li className='text-[#000] text-[18px] font-Roboto font-normal text-start mt-[1rem]'>Receive timely reminders to ensure you never miss an important visit.</li>
              </ul>
            </div>
            <div className='bg-[#fff] lg:w-[598px] lg:h-[290px] xs:h-[350px] px-[30px] py-[20px]'>
              <h1 className='text-[#000] lg:text-[24px] xs:text-[22px] font-Roboto font-bold text-start'>2. Access Your Medical Records Anytime, Anywhere:</h1>
              <ul className='lg:mt-[1rem] xs:mt-5 list-disc ms-[2rem]'>
                <li className='text-[#000] text-[18px] font-Roboto font-normal text-start'>Securely view and manage your medical history from the palm of your hand.</li>
                <li className='text-[#000] text-[18px] font-Roboto font-normal text-start mt-[1rem]'>Empower yourself with information to make informed decisions about your health.</li>
              </ul>
            </div>
            <div className='bg-[#fff] lg:w-[598px] lg:h-[290px] xs:h-[350px] px-[30px] py-[30px]'>
              <h1 className='text-[#000] lg:text-[24px] xs:text-[22px] font-Roboto font-bold text-start'>3. Medication Reminders Tailored to You:</h1>
              <ul className='lg:mt-[2rem] xs:mt-5 list-disc ms-[2rem]'>
                <li className='text-[#000] text-[18px] font-Roboto font-normal text-start'>Stay on track with personalized medication reminders.</li>
                <li className='text-[#000] text-[18px] font-Roboto font-normal text-start mt-[1.5rem]'>Never worry about missing a dose again.</li>
              </ul>
            </div>
            <div className='bg-[#fff] lg:w-[598px] lg:h-[290px] xs:h-[350px] px-[30px] py-[30px]'>
              <h1 className='text-[#000] lg:text-[24px] xs:text-[22px] font-Roboto font-bold text-start'>4. Find the Right Doctor for You:</h1>
              <ul className='lg:mt-[2rem] xs:mt-5 list-disc ms-[2rem]'>
                <li className='text-[#000] text-[18px] font-Roboto font-normal text-start'>Explore a network of trusted healthcare professionals.</li>
                <li className='text-[#000] text-[18px] font-Roboto font-normal text-start mt-[1.5rem]'>Make informed choices based on reviews and specialties.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-[#22D1EE] text-[50px] font-Yesteryear font-normal text-center mt-[5rem]'>Our Commitment</h1>
          <ol className='lg:px-[20px] xs:px-[10px] list-decimal lg:mt-[3rem] xs:mt-[1.5rem] lg:w-[1178px] lg:ms-[5rem] xs:ms-[2rem]'>
            <li className='text-[#000] text-[20px] lg:px-[2rem] font-Inter font-semibold text-start leading-[40px]'>User-Centric Design: CareSync is built with you in mind. Our user-centric design focuses on simplicity, accessibility, and functionality, ensuring that even complex healthcare tasks can be effortlessly managed.</li>
            <li className='text-[#000] text-[20px] lg:px-[2rem] font-Inter font-semibold text-start leading-[40px] mt-[2rem]'>Security and Privacy: We understand the sensitivity of health data. That's why CareSync employs state-of-the-art security measures to protect your information, giving you peace of mind as you take control of your health.</li>
          </ol>
          <div className='px-[10px] mt-[5rem] lg:ms-[8rem]'>
            <h2 className='text-[#181E4B] text-[30px] font-Volkhov font-bold'>Join the CareSync Community</h2>
            <p className='lg:text-[20px] xs:text-[18px] text-[#181E4B] font-Volkhov font-medium leading-[40px] lg:w-[1000px] mt-[1rem]'>CareSync is more than a platform; it's a community of individuals committed to taking charge of their health. Join us on this journey towards a healthier, more connected future.</p>
            <p className='lg:text-[20px] xs:text-[18px] text-[#181E4B] font-Volkhov font-medium leading-[40px] lg:w-[1000px] mt-[10px]'>Explore the possibilities with CareSync – where healthcare is not just a service but a personal experience.</p>
          </div>
        </div>

        <div className='mt-[8rem] px-[10px]'>
          <center>
            <h3 className='text-[#17B978] text-[18px] font-Poppins font-bold text-center'>Promotion</h3>
            <h1 className='text-[#181E4B] lg:text-[40px] xs:text-[30px] font-Volkhov font-bold text-center mt-[10px]'>See What Our Clients Say About Us</h1>
            <div className='mt-[2rem]'>
              <img src={circle} />
              <div style={{ backgroundImage: `url(${quote})`, backgroundRepeat: 'no-repeat' }}className='lg:w-[538px] pt-[1.5rem]'>
                <p className='text-[#000] lg:text-[15px] xs:text-[14px] font-Poppins font-normal leading-[28px] text-center lg:w-[500px] mt-[1rem]'>Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis. </p>
                <h3 className='text-[#000] text-[15px] font-Poppins mt-[1rem] text-center'>Teresa Holland - <span className='font-bold'>Designer</span></h3>
                <hr className='w-[70px] h-[3px] bg-[#DF6951] mt-[1rem]' />
              </div>
            </div>
          </center>
        </div>

        <Footer/>
    </div>
  )
}

export default About