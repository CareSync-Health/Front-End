import React, { useEffect, useState } from 'react'
import Sidebar from './../../../Components/Sidebar';
import Navbar from './../../../Components/Navbar';
import avatar from '../../../../assets/avatar.png'
import profilebg from '../../../../assets/profile-bg.png'
import { Link, useParams } from 'react-router-dom';
import { FaEnvelope, FaLocationDot, FaPencil, FaUser } from 'react-icons/fa6';
import { FaPhoneAlt, FaShare } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { loadDoctor } from '@/Redux/Actions/PatientActions';
import experience_vector from '../../../../assets/experience_vector.png'
import moment from 'moment';
import Whatsapp from '../../../../assets/Icons/whatsapp.svg'
import Twitter from '../../../../assets/Icons/X.svg'
import Instagram from '../../../../assets/Icons/Ig.svg'
import Facebook from '../../../../assets/Icons/Facebook.svg'
import Email from '../../../../assets/Icons/Email.svg'
import Linkedin from '../../../../assets/Icons/Linkedin.svg'
import Pinintrest from '../../../../assets/Icons/Pinintrest.svg'
import Twitch from '../../../../assets/Icons/Twitch.svg'

const DoctorInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('info');
  const [isExpandedAbout, setIsExpandedAbout] = useState(false);
  const [isExpandedExperience, setIsExpandedExperience] = useState(false);
  const [isExpandedEducation, setIsExpandedEducation] = useState(false);
  const { doctor } = useSelector((state) => state.loadPatientDoctor);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);


  useEffect(() => {
    dispatch(loadDoctor(id));
  }, [dispatch, id]);

  const handleShareClick = () => {
    setShowShareModal(true);
  };

  const handleCloseShareModal = () => {
    setShowShareModal(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`http://localhost:5173/doctorInfo/${doctor?._id}`);
    setCopyMessageVisible(true);
    setTimeout(() => {
      setCopyMessageVisible(false);
    }, 5000);
  };

  const toggleText = () => {
    setIsExpandedAbout(!isExpandedAbout);
  };
  const toggleExperience = () => {
    setIsExpandedExperience(!isExpandedExperience);
  };
  const toggleEducation = () => {
    setIsExpandedEducation(!isExpandedEducation);
  };

  const aboutText = doctor?.aboutText || "";
  const experienceText = doctor?.experienceDescription || "";
  const educationText = doctor?.educationActivities || "";

  // Set a limit to shorten the text (e.g., 100 characters)
  const shortText = aboutText.length > 245 ? aboutText.substring(0, 245) + '...' : aboutText;
  const shortText2 = experienceText.length > 245 ? experienceText.substring(0, 245) + '...' : experienceText;
  const shortText3 = educationText.length > 245 ? educationText.substring(0, 245) + '...' : educationText;

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-screen overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar />
        <div className='mt-[1rem] xs:px-[10px] lg:px-[30px] mb-[2rem]'>
          <div className=''>
            <div className='pb-[2rem] rounded-[10px] bg-[#fff] shadow-lg'>
              <div style={{ backgroundImage: `url(${doctor?.headerPic || profilebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='lg:h-[280px] w-full'>
                <div className='flex items-center justify-between lg:px-[30px] xs:px-[10px] pt-[10rem]'>
                  <img src={doctor?.profilePic || avatar} className='rounded-[100px] object-cover w-[190px] h-[190px]' />
                </div>
              </div>
              <div className='lg:flex lg:items-center xs:items-start justify-between lg:px-[50px] xs:px-[15px] pt-[1rem]'>
                <div className='lg:ms-[11rem]'>
                  <h2 className='text-[30px] text-[#22D1EE] font-bold font-Inter'>{doctor?.firstName} {doctor?.lastName}</h2>
                  <h3 className='text-[#17B978] text-[15px] font-Inter font-normal'>{doctor?.profession}</h3>
                </div>
                <div className='flex items-center gap-[1rem] justify-end lg:mt-0 xs:mt-[2rem]'>
                  <button className='text-[#fff] lg:text-[22px] xs:text-[19px] bg-[#22D1EE] p-2.5 rounded-[100px]' onClick={handleShareClick}><FaShare /></button>
                  <button className='border-[#22D1EE] border-[1px] border-solid rounded-[10px] w-[180px] py-[9px] px-[10px] text-center text-[#22D1EE] hover:bg-[#22D1EE] hover:text-[#fff] duration-300 text-[15px] font-Poppins font-semibold'><Link to={`/book_appointment/${doctor?._id}`}>Schedule a meeting</Link></button>
                </div>
              </div>
              <div className='mt-[3rem] lg:px-[50px] xs:px-[10px]'>
                <div className='flex items-center gap-[3rem] bg-[#f8f8f8] py-2 px-[20px] rounded-[10px] lg:w-[300px] xs:w-full'>
                  <h2 className={`text-[16px] w-[50%] font-bold text-center font-Mulish cursor-pointer ${activeTab === 'info' ? 'bg-[#22D1EE] py-[5px] px-[40px] rounded-[10px] text-[#fff]' : 'text-[#22D1EE]'}`} onClick={() => setActiveTab('info')}>INFO</h2>
                  <h2 className={`text-[16px] w-[50%] text-center font-bold font-Mulish cursor-pointer ${activeTab === 'consult' ? 'bg-[#22D1EE] py-[5px] px-[20px] rounded-[10px] text-[#fff]' : 'text-[#22D1EE]'}`} onClick={() => setActiveTab('consult')}>CONSULT</h2>
                </div>
                {/* CONSULT */}
                {activeTab === 'consult' && (
                  <div>
                    <div className='mt-[2rem]'>
                      {/* <h1 className='text-[18px] font-Mulish font-bold'>In person Consultation</h1> */}
                      <div className='flex flex-wrap items-center justify-between gap-[2rem] lg:pr-[5rem]'>
                        <div className='bg-[#fff] shadow-xl lg:w-[380px] xs:w-full p-5 rounded-[5px]'>
                          <h1 className='text-[17px] font-medium font-Mulish'>In-person Consultation</h1>
                          <h1 className='text-[14px] mt-1 font-Mulish font-bold tracking-wider text-[#22D1EE]'>NGN {doctor?.consultationFee}.00</h1>
                          <h2 className='text-[12px] font-Mulish font-normal text-[#919191] mt-[2rem]'>AVAILABLE APPOINTMENT START ON</h2>
                          <h2 className='flex items-center gap-[5px] text-[13px] font-bold font-Mulish mt-1'><MdOutlineCalendarMonth className='text-[17px] -mt-[2.5px]' /> August 2, 2024</h2>
                          <Link to={`/book_appointment/${doctor?._id}`} className='float-end mt-[1.5rem] bg-[#22D1EE] text-center py-[6px] px-[10px] rounded-[10px] text-[#fff] text-[15px] font-medium font-Mulish'>Book appointment</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* INFO */}
                {activeTab === 'info' && (
                  <div className='mt-[3rem] lg:flex items-start gap-[3rem]'>
                    <div className='lg:w-[280px] rounded-[10px] px-[15px] py-[25px] bg-[#fff] shadow-lg'>
                      <h2 className='text-[20px] font-bold font-Nunito'>Info</h2>
                      <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaUser className='text-[17px] text-[#22D1EE]' />{doctor?.gender}</h3>
                      <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
                      <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-start gap-[10px]'><FaLocationDot className='text-[21px] text-[#22D1EE] mt-1' /> {doctor?.country}, {doctor?.state}, {doctor?.city}</h3>
                      <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
                      <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaEnvelope className='text-[21px] text-[#22D1EE]' />{doctor?.email}</h3>
                      <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
                      <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaPhoneAlt className='text-[17px] text-[#22D1EE]' />{doctor?.phoneNumber}</h3>
                    </div>
                    <div className='w-full lg:mt-0 xs:mt-5'>
                      {doctor?.aboutText && (
                        <div className='w-full rounded-[10px] px-[15px] py-[25px] bg-[#fff] shadow-xl'>
                          <h2 className='text-[22px] font-Nunito font-bold'>About</h2>
                          <p className='text-[13px] mt-2 font-Nunito font-medium whitespace-pre-wrap'>{isExpandedAbout ? aboutText : shortText}</p>
                          {doctor?.aboutText && (
                            <h2 className={`text-[12px] font-Nunito font-normal flex items-end justify-end -mt-5 cursor-pointer ${isExpandedAbout ? 'text-[#22D1EE]' : 'text-black hover:text-[#22D1EE]'}`} onClick={toggleText}> {isExpandedAbout ? '...see less' : '...see more'}</h2>
                          )}
                        </div>
                      )}
                      {doctor?.experienceTitle && (
                        <div className='w-full mt-5 rounded-[10px] px-[15px] py-[25px] bg-[#fff] shadow-xl'>
                          <h2 className='text-[22px] font-Nunito font-bold'>Experience</h2>
                          <div className='flex items-start gap-3 mt-3'>
                            <div>
                              <img src={experience_vector} className='w-[40px] h-[40px] bg-[#eee] p-1' />
                            </div>
                            <div>
                              <h2 className='text-[16px] font-bold font-Nunito'>{doctor?.experienceTitle}</h2>
                              {doctor?.hospitalName && doctor?.employmentType && (
                                <p className='text-[12px] font-medium font-Nunito'>{doctor?.hospitalName} - {doctor?.employmentType}</p>
                              )}
                              {doctor?.experienceStartDate && doctor?.experienceEndDate && (
                                <p className='text-[11px] text-[rgba(0,0,0,0.7)] font-medium font-Nunito'>
                                  {moment(doctor?.experienceStartDate).format('MMM YYYY')} - {moment(doctor?.experienceEndDate).format('MMM YYYY')}
                                </p>
                              )}
                              <p className='text-[11px] text-[rgba(0,0,0,0.7)] font-medium font-Nunito'>{doctor?.experienceLocation}</p>
                              <p className='text-[12px] text-[rgba(0,0,0,0.7)] font-semibold font-Nunito mt-2 w-[720px] whitespace-pre-wrap'>{isExpandedExperience ? experienceText : shortText2}</p>
                              {doctor?.experienceDescription && (
                                <h2 className={`text-[12px] font-Nunito font-normal flex items-end justify-end -mt-5 cursor-pointer ${isExpandedExperience ? 'text-[#22D1EE]' : 'text-black hover:text-[#22D1EE]'}`} onClick={toggleExperience}> {isExpandedExperience ? '...see less' : '...see more'}</h2>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      {doctor?.school && (
                        <div className='w-full mt-5 rounded-[10px] px-[15px] py-[25px] bg-[#fff] shadow-xl'>
                          <h2 className='text-[22px] font-Nunito font-bold'>Education</h2>
                          <div className='flex items-start gap-3 mt-3'>
                            <div>
                              <img src={experience_vector} className='w-[40px] h-[40px] bg-[#eee] p-1' />
                            </div>
                            <div>
                              <h2 className='text-[16px] font-bold font-Nunito'>{doctor?.school}</h2>
                              {doctor?.degree && doctor?.fieldOfStudy && doctor?.grade && (
                                <p className='text-[13px] font-medium font-Nunito'>{doctor?.degree} - {doctor?.fieldOfStudy} {doctor?.grade}</p>
                              )}
                              {doctor?.educationStartDate && doctor?.educationEndDate && (
                                <p className='text-[11.5px] text-[rgba(0,0,0,0.7)] font-medium font-Nunito'>
                                  {moment(doctor?.educationStartDate).format('MMM YYYY')} - {moment(doctor?.educationEndDate).format('MMM YYYY')}
                                </p>
                              )}
                              <p className='text-[12px] text-[rgba(0,0,0,0.7)] font-semibold font-Nunito mt-2 w-[720px] whitespace-pre-wrap'>{isExpandedEducation ? educationText : shortText3}</p>
                              {doctor?.educationActivities && (
                                <h2 className={`text-[12px] font-Nunito font-normal flex items-end justify-end -mt-5 cursor-pointer ${isExpandedEducation ? 'text-[#22D1EE]' : 'text-black hover:text-[#22D1EE]'}`} onClick={toggleEducation}> {isExpandedEducation ? '...see less' : '...see more'}</h2>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {showShareModal && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className={`rounded-lg lg:py-[40px] xs:py-[30px] lg:px-[30px] xs:px-[10px] lg:w-[1000px] xs:w-[98%] bg-[#FFFCF8] shadow-2xl`}>
              <div className='flex justify-between items-center'>
                <h2 className='lg:text-[25px] xs:text-[20px] text-center font-Nunito font-extrabold'>Share Doctor Profile</h2>
                <button onClick={handleCloseShareModal} className='float-end lg:text-[20px] xs:text-[30px] lg:pr-0 xs:pr-[0.5rem] font-bold'>✕</button>
              </div>
              <hr className='w-full h-[2px] bg-[#000] mt-[3rem]' />
              <div className='mt-[2rem]'>
                <h2 className='lg:text-[20px] xs:text-[18px] font-Nunito font-semibold'>Share to Social Media</h2>
                <div className='flex flex-wrap justify-around gap-[2rem] mt-[2rem] lg:px-[170px] lg:ms-[-11rem]'>
                  <a href={`https://wa.me/?text=Check%20out%20this%20doctor%20profile%3A%20https%3A%2F%2Fcaresyncmed%2Fdoctorid%3D${doctor?._id}`} target='_blank' rel='noopener noreferrer'>
                    <img src={Whatsapp} alt='WhatsApp' className='w-[50px]' />
                    <h2 className='text-[14px] mt-3 font-Nunito font-normal'>WhatsApp</h2>
                  </a>
                  <a href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20doctor%20profile%3A%20https%3A%2F%2Fcaresyncmed%2Fdoctorid%3D${doctor?._id}`} target='_blank' rel='noopener noreferrer'>
                    <img src={Twitter} alt='Twitter' className='w-[50px]' />
                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>X</h2>
                  </a>
                  <a href={`https://www.instagram.com/?url=https%3A%2F%2Fcaresyncmed%2Fdoctorid%3D${doctor?._id}`} target='_blank' rel='noopener noreferrer'>
                    <img src={Instagram} alt='Instagram' className='w-[50px]' />
                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>Instagram</h2>
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcaresyncmed%2Fdoctorid%3D${doctor?._id}`} target='_blank' rel='noopener noreferrer'>
                    <img src={Facebook} alt='Facebook' className='w-[50px]' />
                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>Facebook</h2>
                  </a>
                  <a href={`mailto:?subject=Check%20out%20this%20doctor%20profile&body=https%3A%2F%2Fcaresyncmed%2Fdoctorid%3D${doctor?._id}`} target='_blank' rel='noopener noreferrer'>
                    <img src={Email} alt='Email' className='w-[50px]' />
                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>Email</h2>
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fcaresyncmed%2Fdoctorid%3D${doctor?._id}`} target='_blank' rel='noopener noreferrer'>
                    <img src={Linkedin} alt='LinkedIn' className='w-[50px]' />
                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>LinkedIn</h2>
                  </a>
                  <a href={`https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fcaresyncmed%2Fdoctorid%3D${doctor?._id}`} target='_blank' rel='noopener noreferrer'>
                    <img src={Pinintrest} alt='Pinterest' className='w-[50px]' />
                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>Pinintrest</h2>
                  </a>
                  <a href={`https://www.twitch.tv/`} target='_blank' rel='noopener noreferrer'>
                    <img src={Twitch} alt='Twitch' className='w-[50px]' />
                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>Twitch</h2>
                  </a>
                </div>
                <hr className='w-full h-[2px] bg-[#000] mt-[3rem]' />
                <div className={`flex justify-between gap-[10px] items-center border rounded-[10px] w-full lg:pl-[30px] lg:px-[20px] xs:px-[10px] lg:mb-[2rem] mt-[3rem]`}>
                  <input
                    type='text'
                    value={`http://localhost:5173/doctorInfo/${doctor?._id}`}
                    readOnly
                    className='lg:w-[95%] xs:w-[77%] py-3 bg-transparent outline-none cursor-pointer'
                    onClick={handleCopyLink}
                  />
                  <button
                    onClick={handleCopyLink}
                    className='py-1 px-[20px] text-[15px] font-Nunito font-semibold bg-[#22D1EE] text-white rounded-[100px]'
                  >
                    Copy
                  </button>
                </div>
                {copyMessageVisible && <div className='text-green-500 text-[16px] font-bold font-Nunito'>Link copied to clipboard</div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorInfo