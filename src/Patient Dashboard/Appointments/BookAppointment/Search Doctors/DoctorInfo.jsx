import React, { useState } from 'react'
import Sidebar from './../../../Components/Sidebar';
import Navbar from './../../../Components/Navbar';
import profileavatar from '../../../../assets/profile_avatar.png'
import profilebg from '../../../../assets/profile-bg.png'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLocationDot, FaPencil, FaUser } from 'react-icons/fa6';
import { FaPhoneAlt, FaShare } from "react-icons/fa";
import { MdCake, MdMessage, MdOutlineCalendarMonth } from "react-icons/md";
import Ellipse1 from '../../../../assets/Ellipse 96.png'
import Ellipse2 from '../../../../assets/Ellipse 64.png'
import Ellipse3 from '../../../../assets/Ellipse 92.png'
import Ellipse4 from '../../../../assets/image.png'

const DoctorInfo = () => {
  const [activeTab, setActiveTab] = useState('consult');

  const Similar = [
    {
      id: 1,
      image: Ellipse1,
      name: "Eddie Lobanovskiy",
      email: "laboanovskiy@gmail.com"
    },
    {
      id: 2,
      image: Ellipse2,
      name: "alexeyst@gmail.com",
      email: "laboanovskiy@gmail.com"
    },
    {
      id: 3,
      image: Ellipse4,
      name: "Anton Tkacheve",
      email: "tkacheveanton@gmail.com"
    }
  ];

  // Function to shuffle the array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Shuffling the array directly in the component function
const shuffledSimilar = shuffleArray([...Similar]);

  const Active = [
    {
      id: 1,
      image: Ellipse1,
      name: "Shelby Goode",
      active: "Online",
      activeTime: "1 min ago"
    },
    {
      id: 2,
      image: Ellipse2,
      name: "Robert Bacins",
      active: "Busy",
      activeTime: "1 hrs ago"
    },
    {
      id: 3,
      image: Ellipse3,
      name: "John Carilo",
      active: "Online",
      activeTime: "1 day ago"
    },
    {
      id: 4,
      image: Ellipse4,
      name: "Adriene Watson",
      active: "Online",
      activeTime: "2 days ago"
    }
  ]

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar />
        <div className='mt-[2rem] xs:px-[10px] lg:px-[30px] mb-[4rem]'>
          <div className=''>
            <div className='pb-[2rem] rounded-[10px] bg-[#fff] shadow-lg'>
              <div style={{ backgroundImage: `url(${profilebg})`, backgroundRepeat: 'no-repeat', backgroundSize: '' }} className='lg:h-[280px] w-full'>
                <div className='flex items-center justify-between lg:px-[50px] xs:px-[10px] pt-[9rem]'>
                  <img src={profileavatar} className='rounded-[100px] object-contain w-[180px]' />
                </div>
              </div>
              <div className='lg:flex lg:items-center xs:items-start justify-between lg:px-[50px] xs:px-[15px] pt-[1rem]'>
                <div className='lg:ms-[11rem]'>
                  <h2 className='text-[30px] text-[#22D1EE] font-bold font-Inter'>firstName lastName</h2>
                  <h3 className='text-[#17B978] text-[15px] font-Inter font-normal'>Doctor Profession</h3>
                </div>
                <div className='flex items-center gap-[1rem] justify-end lg:mt-0 xs:mt-[2rem]'>
                  <button className='text-[#fff] lg:text-[22px] xs:text-[19px] bg-[#22D1EE] p-2.5 rounded-[100px]'><FaShare /></button>
                  <button className='text-[#fff] lg:text-[25px] xs:text-[22px] bg-[#22D1EE] p-2 rounded-[100px]'><Link to=''><MdMessage /></Link></button>
                  <button className='border-[#22D1EE] border-[1px] border-solid rounded-[10px] w-[180px] py-[9px] px-[10px] text-center text-[#22D1EE] hover:bg-[#22D1EE] hover:text-[#fff] duration-300 text-[15px] font-Poppins font-semibold'><Link to='/book_appointment'>Schedule a meeting</Link></button>
                </div>
              </div>
              <div className='mt-[3rem] lg:px-[50px] xs:px-[10px]'>
                <div className='flex items-center gap-[3rem] bg-[#f8f8f8] py-2 px-[20px] rounded-[10px] lg:w-[300px] xs:w-full'>
                  <h2 className={`text-[16px] w-[50%] text-center font-bold font-Mulish cursor-pointer ${activeTab === 'consult' ? 'bg-[#22D1EE] py-[5px] px-[20px] rounded-[10px] text-[#fff]' : 'text-[#22D1EE]'}`} onClick={() => setActiveTab('consult')}>CONSULT</h2>
                  <h2 className={`text-[16px] w-[50%] font-bold text-center font-Mulish cursor-pointer ${activeTab === 'info' ? 'bg-[#22D1EE] py-[5px] px-[40px] rounded-[10px] text-[#fff]' : 'text-[#22D1EE]'}`} onClick={() => setActiveTab('info')}>INFO</h2>
                </div>
                {/* CONSULT */}
                {activeTab === 'consult' && (
                  <div>
                    <div className='mt-[2rem] '>
                      <h1 className='text-[18px] font-Mulish font-bold'>Video Consultation</h1>
                      <div className='flex flex-wrap items-center justify-between gap-[2rem] lg:pr-[5rem] mt-2'>
                        <div className='bg-[#fff] shadow-lg lg:w-[320px] xs:w-full p-5 rounded-[5px]'>
                          <h1 className='text-[15px] font-medium font-Mulish'>Video Consultation - 15 minutes</h1>
                          <h1 className='text-[13.5px] mt-1 font-Mulish font-medium text-[#22D1EE]'>NGN 3,000.00</h1>
                          <h2 className='text-[12px] font-Mulish font-normal text-[#919191] mt-[2rem]'>AVAILABLE APPOINTMENT START ON</h2>
                          <h2 className='flex items-center gap-[5px] text-[13px] font-bold font-Mulish mt-1'><MdOutlineCalendarMonth className='text-[17px] -mt-[2.5px]' /> August 2, 2024</h2>
                          <button className='float-end mt-[1.5rem] bg-[#22D1EE] text-center py-[6px] px-[10px] rounded-[10px] text-[#fff] text-[15px] font-medium font-Mulish'>see available dates</button>
                        </div>
                        <div className='bg-[#fff] shadow-lg lg:w-[320px] xs:w-full p-5 rounded-[5px]'>
                          <h1 className='text-[15px] font-medium font-Mulish'>Video Consultation - 30 minutes</h1>
                          <h1 className='text-[13.5px] mt-1 font-Mulish font-medium text-[#22D1EE]'>NGN 5,000.00</h1>
                          <h2 className='text-[12px] font-Mulish font-normal text-[#919191] mt-[2rem]'>AVAILABLE APPOINTMENT START ON</h2>
                          <h2 className='flex items-center gap-[5px] text-[13px] font-bold font-Mulish mt-1'><MdOutlineCalendarMonth className='text-[17px] -mt-[2.5px]' /> August 2, 2024</h2>
                          <button className='float-end mt-[1.5rem] bg-[#22D1EE] text-center py-[6px] px-[10px] rounded-[10px] text-[#fff] text-[15px] font-medium font-Mulish'>see available dates</button>
                        </div>
                        <div className='bg-[#fff] shadow-lg lg:w-[320px] xs:w-full p-5 rounded-[5px]'>
                          <h1 className='text-[15px] font-medium font-Mulish'>Video Consultation - 1 hour</h1>
                          <h1 className='text-[13.5px] mt-1 font-Mulish font-medium text-[#22D1EE]'>NGN 9,500.00</h1>
                          <h2 className='text-[12px] font-Mulish font-normal text-[#919191] mt-[2rem]'>AVAILABLE APPOINTMENT START ON</h2>
                          <h2 className='flex items-center gap-[5px] text-[13px] font-bold font-Mulish mt-1'><MdOutlineCalendarMonth className='text-[17px] -mt-[2.5px]' /> August 2, 2024</h2>
                          <button className='float-end mt-[1.5rem] bg-[#22D1EE] text-center py-[6px] px-[10px] rounded-[10px] text-[#fff] text-[15px] font-medium font-Mulish'>see available dates</button>
                        </div>
                      </div>
                    </div>

                    <div className='mt-[3rem]'>
                      <h1 className='text-[18px] font-Mulish font-bold'>In-person Consultation</h1>
                      <div className='flex flex-wrap items-center justify-between gap-[2rem] lg:pr-[5rem] mt-2'>
                        <div className='bg-[#fff] shadow-lg lg:w-[320px] xs:w-full p-5 rounded-[5px]'>
                          <h1 className='text-[15px] font-medium font-Mulish'>In-person Consultation</h1>
                          <h1 className='text-[13.5px] mt-1 font-Mulish font-medium text-[#22D1EE]'>NGN 2,500.00</h1>
                          <h2 className='text-[12px] font-Mulish font-normal text-[#919191] mt-[2rem]'>AVAILABLE APPOINTMENT START ON</h2>
                          <h2 className='flex items-center gap-[5px] text-[13px] font-bold font-Mulish mt-1'><MdOutlineCalendarMonth className='text-[17px] -mt-[2.5px]' /> August 2, 2024</h2>
                          <button className='float-end mt-[1.5rem] bg-[#22D1EE] text-center py-[6px] px-[10px] rounded-[10px] text-[#fff] text-[15px] font-medium font-Mulish'>see available dates</button>
                        </div>
                        <div className='bg-[#fff] shadow-lg lg:w-[320px] xs:w-full p-5 rounded-[5px]'>
                          <h1 className='text-[15px] font-medium font-Mulish'>In-person Consultation</h1>
                          <h1 className='text-[13.5px] mt-1 font-Mulish font-medium text-[#22D1EE]'>NGN 2,500.00</h1>
                          <h2 className='text-[12px] font-Mulish font-normal text-[#919191] mt-[2rem]'>AVAILABLE APPOINTMENT START ON</h2>
                          <h2 className='flex items-center gap-[5px] text-[13px] font-bold font-Mulish mt-1'><MdOutlineCalendarMonth className='text-[17px] -mt-[2.5px]' /> August 2, 2024</h2>
                          <button className='float-end mt-[1.5rem] bg-[#22D1EE] text-center py-[6px] px-[10px] rounded-[10px] text-[#fff] text-[15px] font-medium font-Mulish'>see available dates</button>
                        </div>
                        <div className='bg-[#fff] shadow-lg lg:w-[320px] xs:w-full p-5 rounded-[5px]'>
                          <h1 className='text-[15px] font-medium font-Mulish'>In-person Consultation</h1>
                          <h1 className='text-[13.5px] mt-1 font-Mulish font-medium text-[#22D1EE]'>NGN 2,500.00</h1>
                          <h2 className='text-[12px] font-Mulish font-normal text-[#919191] mt-[2rem]'>AVAILABLE APPOINTMENT START ON</h2>
                          <h2 className='flex items-center gap-[5px] text-[13px] font-bold font-Mulish mt-1'><MdOutlineCalendarMonth className='text-[17px] -mt-[2.5px]' /> August 2, 2024</h2>
                          <button className='float-end mt-[1.5rem] bg-[#22D1EE] text-center py-[6px] px-[10px] rounded-[10px] text-[#fff] text-[15px] font-medium font-Mulish'>see available dates</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* INFO */}
                {activeTab === 'info' && (
                  <div className='mt-[3rem] flex items-start gap-[3rem]'>
                    <div className='lg:w-[280px] rounded-[10px] px-[15px] py-[25px] bg-[#fff] shadow-lg'>
                      <h2 className='text-[20px] font-bold font-Nunito'>About</h2>
                      <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaUser className='text-[17px] text-[#22D1EE]' />Gender</h3>
                      <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
                      <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-start gap-[10px]'><FaLocationDot className='text-[21px] text-[#22D1EE] mt-1' /> Country, State, City</h3>
                      <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
                      <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaEnvelope className='text-[21px] text-[#22D1EE]' /> charles5182@ummoh.com</h3>
                      <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
                      <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaPhoneAlt className='text-[17px] text-[#22D1EE]' /> Phone Number</h3>
                    </div>
                    <div>
                      <div className='lg:w-[280px] xs:mt-[2rem] lg:mt-0 h-[234px] rounded-[10px] px-[20px] py-[20px] bg-[#fff] shadow-lg'>
                        <h3 className='text-[18px] font-bold font-Nunito'>Similar Doctor’s</h3>
                        <div className='mt-[1rem]'>
                          {shuffledSimilar.map((simi, index) => (
                            <span className='flex items-center gap-[20px] mt-[1rem]' key={simi.id}>
                              <img src={simi.image} className='w-[40px] rounded-[100px] object-contain' />
                              <span>
                                <h2 className='text-[14px] font-normal font-Nunito'>{simi.name}</h2>
                                <h3 className='text-[#17B978] text-[12px] font-Nunito font-normal'>{simi.email}</h3>
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className='lg:w-[280px] mt-[2rem] h-[333px] rounded-[10px] px-[20px] py-[20px] overflow-x-hidden overflow-y-hidden bg-[#fff] shadow-lg'>
                        <h1 className='text-[18px] font-bold font-Nunito'>Active</h1>
                        <div>
                          {Active.map((active, index) => (
                            <div key={active.id}>
                              <div className='flex items-center justify-between'>
                                <span className='flex items-center gap-[20px] mt-[1rem]'>
                                  <img src={active.image} className='w-[40px] rounded-[100px] object-contain' />
                                  <span>
                                    <h2 className='text-[13px] font-normal font-Nunito'>{active.name}</h2>
                                    <h3 className='text-[#17B978] text-[11px] font-Nunito font-normal'>{active.active}</h3>
                                  </span>
                                </span>
                                <span>
                                  <span>
                                    <h3 className='text-[8px] font-Nunito font-normal'>{active.activeTime}</h3>
                                  </span>
                                </span>
                              </div>
                              <hr className='w-full h-[1px] mt-[10px] bg-[#17B978]' />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* <ProfilePost /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorInfo