import React from 'react'
import Navbar from '../Navbar'
import img from '../../assets/Rectangle 3.png'
import { Link } from 'react-router-dom'
import union from '../../assets/Union.png'
import undrawDoctor from '../../assets/undraw_doctors.png'
import undraw from '../../assets/undraw.png'
import image from '../../assets/image 3.png'
import image2 from '../../assets/image 4.png'
import doctor from '../../assets/doctor.png'
import img2 from '../../assets/Rectangle 7.png'
import { FaStar } from "react-icons/fa6";
import point from '../../assets/Bulleted point.png'
import highlight from '../../assets/highlight.png'
import testimonial from '../../assets/testimonial.png'
import Footer from '../Footer'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='w-[100%] h-[100vh] px-[70px] pt-[50px]'>
            <h1 className='text-[#fff] text-[55px] font-[400] w-[450px] leading-[70.31px]'>Healthcare made easy with one app.</h1>
            <p className='text-[#fff] text-[18px] font-[400] w-[595px] mt-8'>Stay on top of your health with CareSync – the all-in-one app for scheduling appointments, viewing medical records, and receiving medication reminders.</p>
            <button className='bg-[#22D1EE] w-[190px] px-[20px] py-[9px] rounded-[8px] mt-8'><Link to='' className='text-[#E2F3F5] text-[18px] leading-[20.43px] text-center font-[400]'>Learn More</Link></button>
        </div>

        <div style={{ backgroundImage: `url(${union})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'cover' }} className='w-[100%] px-[100px] mt-[5rem]'>
            <h1 className='text-[#22D1EE] text-[40px] leading-[55.55px] font-[400] text-center pt-[4rem]'>CareSync</h1>
            <div className='flex justify-between'>
                <div className='mt-[5rem]'>
                    <h1 className='text-[#fff] leading-[55px] font-[500] text-[40px] w-[400px]'>Your customized wellbeing entry — whenever, anyplace.</h1>
                    <div className='flex items-center gap-[3rem] mt-[2rem]'>
                        <div>
                            <p className='text-[#fff] text-[18px] leading-[55px] font-[500]'>Appointment Scheduler</p>
                            <p className='text-[#fff] text-[18px] leading-[55px] font-[500]'>Medical Records</p>
                            <p className='text-[#fff] text-[18px] leading-[55px] font-[500]'>Medication Reminders</p>
                           
                        </div>
                        <div>
                            <p className='text-[#fff] text-[18px] leading-[55px] font-[500]'>Get virtual dire consideration</p>
                            <p className='text-[#fff] text-[18px] leading-[55px] font-[500]'>Message your consideration group</p>
                            <p className='text-[#fff] text-[18px] leading-[55px] font-[500]'>Specialist Search</p>
                        </div>
                    </div>
                    <img src={undrawDoctor} className='mt-[4rem]' />
                </div>
                <div className='mt-[5rem]'>
                    <img src={undraw} />
                    <div className='mt-[13rem]'>
                        <p className='text-[#fff] leading-[55px] text-[30px] font-[500]'>Try not to have a record?</p>
                        <p className='text-[#fff] text-[19px] leading-[30px] font-[500] w-[396px]'>Join now or access administrations as a visitor.</p>
                        <button className='bg-[#17B978] w-[325px] px-[20px] py-[10px] rounded-[8px] mt-8'><Link to='' className='text-[#E2F3F5] text-[18px] leading-[20.43px] text-center font-[400]'>Get Started</Link></button>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-[#E2E2E2] mt-[5rem]'>
            <h1 className='text-[#000] text-[40px] font-[500] leading-[47px] pt-[4rem] text-center'>Features & Benefits</h1>
            <hr  className='w-[165px] h-[3px] bg-[#000] mt-[2rem] ms-[44%]'/>
            <div className='flex justify-between gap-[10rem] px-[100px] mt-[5rem]'>
                <div className='w-[50%]'>
                    <h1 className='text-[#000] text-[40px] font-[500]'>Features</h1>
                    <p className='mt-[2rem] flex items-start gap-2'><img src={image} /><span className='text-[rgb(0,0,0,0.6)] text-[18px] font-[400] leading-[23.84px]'>Easy appointment scheduling with just a few clicks</span></p>
                    <p className='mt-4 flex items-start gap-2'><img src={image} /><span className='text-[rgb(0,0,0,0.6)] text-[18px] font-[400] leading-[23.84px]'>Access to all your medical records in one place</span></p>
                    <p className='mt-4 flex items-start gap-2'><img src={image} /><span className='text-[rgb(0,0,0,0.6)] text-[18px] font-[400] leading-[23.84px]'>Quick and easy search for doctors based on name, specialization, and location</span></p>
                    <p className='mt-4 flex items-start gap-2'><img src={image} /><span className='text-[rgb(0,0,0,0.6)] text-[18px] font-[400] leading-[23.84px]'>Secure retrieval of medical records from a centralized database</span></p>
                    <p className='mt-4 flex items-start gap-2'><img src={image} /><span className='text-[rgb(0,0,0,0.6)] text-[18px] font-[400] leading-[23.84px]'>Convenient medication reminders to help you stay on track with your treatment plan</span></p>
                    <img src={doctor} className='mt-[1rem]' />
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-[#000] text-[40px] font-[500]'>Benefits</h1>
                    <p className='mt-[2rem] flex items-start gap-2'><img src={image2} /><span className='text-[rgb(0,0,0,0.6)] text-[18px] font-[400] leading-[23.84px]'>Easily schedule medical appointments with the appointment scheduler component, saving time and reducing stress.</span></p>
                    <p className='mt-4 flex items-start gap-2'><img src={image2} /><span className='text-[rgb(0,0,0,0.6)] text-[18px] font-[400] leading-[23.84px]'>Access and view all of your medical records in one convenient location with the medical records component, allowing for better management of your health.</span></p>
                    <p className='mt-4 flex items-start gap-2'><img src={image2} /><span className='text-[rgb(0,0,0,0.6)] text-[18px] font-[400] leading-[23.84px]'>Use the doctor search function to find a healthcare provider that meets your specific needs and preferences.</span></p>
                    <p className='mt-4 flex items-start gap-2'><img src={image2} /><span className='text-[rgb(0,0,0,0.6)] text-[18px] font-[400] leading-[23.84px]'>The medication reminder feature helps you stay on top of your medication regimen, ensuring that you never miss a dose.</span></p>
                    <p className='mt-4 flex items-start gap-2'><img src={image2} /><span className='text-[rgb(0,0,0,0.6)] text-[18px] font-[400] leading-[23.84px]'>With medical records retrieval, you can be confident that your healthcare provider has all the necessary information to provide you with the best possible care.</span></p>
                    <img src={img2} className='mt-[4.4rem] ms-[2rem] w-[90%]'/>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-between px-[60px] mt-[8rem] pb-[8rem]'>
            <div className='w-[50%]'>
                <h1 className='text-[#000] text-[96px] font-[700] font-Inter leading-[116.18px]'>4.8</h1>
                <div className='flex items-center gap-[5px] mt-[3rem] text-[#EDC55F]'>
                <h3><FaStar/></h3>
                <h3><FaStar/></h3>
                <h3><FaStar/></h3>
                <h3><FaStar/></h3>
                <h3><FaStar/></h3>
                </div>
                <h3 className='text-[#000] text-[20px] font-[700] font-Inter leading-[24px] mt-[3rem]'>2,394 Ratings</h3>
                <h3 className='text-[#000] text-[20px] font-[700] font-Inter leading-[24px] mt-[1.5rem]'>Google Reviews</h3>
            </div>
            <div className='w-[50%]'>
                <h1 className='text-[#000] text-[96px] font-[700] font-Inter leading-[116.18px]'>A +</h1>
                <div className='flex items-center gap-[5px] mt-[3rem] text-[#EDC55F]'>
                <h3><FaStar/></h3>
                <h3><FaStar/></h3>
                <h3><FaStar/></h3>
                <h3><FaStar/></h3>
                <h3><FaStar/></h3>
                </div>
                <h3 className='text-[#000] text-[20px] font-[700] font-Inter leading-[24px] mt-[3rem]'>125 Reviews</h3>
                <h3 className='text-[#000] text-[20px] font-[700] font-Inter leading-[24px] mt-[1.5rem]'>BBB Rating</h3>
            </div>
            <div className='w-[50%]'>
                <h1 className='text-[#050505] text-[41px] font-[700] font-Inter leading-[58.09px] '>Trusted by numerous Medical patients</h1>
                <h3 className='text-[#17B978] text-[24px] leading-[29px] font-[700] font-Inter mt-[4rem]'>Jessica Simon</h3>
                <p className='text-[#000] text-[18px] font-[400] leading-[24px] font-Inter w-[593px] mt-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex purus. Aenean convallis velit vel nisi tempus pulvinar. Morbi eu</p>
            </div>
        </div>

        <div className='bg-[#E2F3F5] px-[40px] pt-[3rem]'>
            <div className='flex items-center justify-between px-[80px]'>
                <h1 className='text-[#000] text-[40px] font-[500]'>Our Services</h1>
                <button className='w-[325px] py-[10px] px-[10px] text-center rounded-[4px] bg-[#17B978] text-[17px] text-[#fff] font-semibold font-Inter'>View All Services</button>
            </div>
            <center>
                <div className="flex gap-[1.5rem] mt-5">
                  <hr className="w-[40%] mt-3 bg-[#000] h-[2px]" />
                  <p className='text-[18px] text-[#000] font-light font-Inter text-center'>Highlights & Advantages</p>
                  <hr className="w-[40%] mt-3 bg-[#000] h-[2px]" />
                </div>
            </center>
            <div className='mt-[4rem] flex items-center gap-[4rem] pb-[5rem]'>
                <div>
                    <h1 className='text-[#000] text-[30px] font-medium font-Inter'>Highlights</h1>
                    <p className='text-[#000] text-[18px] font-[300] font-Inter text-start mt-[3rem] flex items-start gap-[8px]'><img src={point} className='mt-[4px]' /> Secure database for storing medical records</p>
                    <p className='text-[#000] text-[18px] font-[300] font-Inter text-start mt-[1rem] flex items-start gap-[8px]'><img src={point} className='mt-[4px]' /> Notification system for reminding users of upcoming appointments</p>
                    <p className='text-[#000] text-[18px] font-[300] font-Inter text-start mt-[1rem] flex items-start gap-[8px]'><img src={point} className='mt-[4px]' /> Integration with Google Maps for locating nearby healthcare providers</p>
                    <p className='text-[#000] text-[18px] font-[300] font-Inter text-start mt-[1rem] flex items-start gap-[8px]'><img src={point} className='mt-[4px]' /> Ability to message doctors directly through the app for non-emergency inquiries</p>
                    <p className='text-[#000] text-[18px] font-[300] font-Inter text-start mt-[1rem] flex items-start gap-[8px]'><img src={point} className='mt-[4px]' /> Ability to request prescription refills through the app.</p>
                </div>
                <div>
                    <h1 className='text-[#000] text-[30px] font-medium font-Inter'>Advantages</h1>
                    <p className='text-[#000] text-[18px] font-[300] font-Inter text-start mt-[2rem] flex items-start gap-[8px]'><img src={point} className='mt-[4px]' /> Convenient access to medical services from the comfort of home</p>
                    <p className='text-[#000] text-[18px] font-[300] font-Inter text-start mt-[1rem] flex items-start gap-[8px]'><img src={point} className='mt-[4px]' /> Easy appointment scheduling with a wide range of doctors and specialists</p>
                    <p className='text-[#000] text-[18px] font-[300] font-Inter text-start mt-[1rem] flex items-start gap-[8px]'><img src={point} className='mt-[4px]' /> A personalized medical record that is easily accessible and up-to-date</p>
                    <p className='text-[#000] text-[18px] font-[300] font-Inter text-start mt-[1rem] flex items-start gap-[8px]'><img src={point} className='mt-[4px]' /> Improved medication adherence through customizable reminders</p>
                    <p className='text-[#000] text-[18px] font-[300] font-Inter text-start mt-[1rem] flex items-start gap-[8px]'><img src={point} className='mt-[4px]' /> Time-saving features that reduce wait times and streamline the healthcare experience</p>
                </div>
                <div>
                    <img src={highlight} className='w-[600px]' />
                </div>
            </div>
        </div>

        <div className='flex items-center gap-[10rem] px-[80px] mt-[8rem]'>
            <div className='w-[50%]'>
                <h1 className='text-[#000] text-[45px] font-bold font-Inter text-start'>Happy Customers​</h1>
                <p className='text-[#000] text-[18px] font-light font-Inter leading-[28px] mt-[1rem]'>Our commitment to providing convenient and reliable healthcare services through our user-friendly platform has earned us the trust and loyalty of our valuable customers.</p>
                <button className='w-[325px] py-[10px] px-[10px] text-center rounded-[4px] bg-[#17B978] text-[17px] text-[#fff] font-semibold font-Inter mt-[2rem]'>View All Testimonials</button>
            </div>
            <div className='w-[50%]'>
                <img src={testimonial} />
            </div>
        </div>

        <Footer/>
        
    </div>
  )
}

export default Homepage