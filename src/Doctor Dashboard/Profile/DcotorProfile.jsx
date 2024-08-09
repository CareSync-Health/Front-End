import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import profilebg from '../../assets/profile-bg.png';
import profileavatar from '../../assets/profile_avatar.png';
import ProfilePost from './ProfilePost';
import { FaPencil, FaShare } from 'react-icons/fa6';
import { useTheme } from '../Components/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadDoctor } from '../../Redux/Actions/DoctorActions';
import Whatsapp from '../../assets/Icons/whatsapp.svg'
import Twitter from '../../assets/Icons/X.svg'
import Instagram from '../../assets/Icons/Ig.svg'
import Facebook from '../../assets/Icons/Facebook.svg'
import Email from '../../assets/Icons/Email.svg'
import Linkedin from '../../assets/Icons/Linkedin.svg'
import Pinintrest from '../../assets/Icons/Pinintrest.svg'
import Twitch from '../../assets/Icons/Twitch.svg'



const DcotorProfile = () => {
  const { theme, appearance } = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams(); // Get doctor ID from URL

  // Get doctor data from Redux store
  const doctor = useSelector((state) => state.loadDoctor.doctor);

  useEffect(() => {
    dispatch(loadDoctor(id));
  }, [dispatch, id]);

  const [showShareModal, setShowShareModal] = useState(false);
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  const handleShareClick = () => {
    setShowShareModal(true);
  };

  const handleCloseShareModal = () => {
    setShowShareModal(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`http://localhost:5173/doctorid=${doctor?._id}`);
    setCopyMessageVisible(true);
    setTimeout(() => {
      setCopyMessageVisible(false);
    }, 5000);
  };

  return (
    <div className='flex'>
      <Sidebar />
      <div className={`flex-1 lg:h-[99.9vh] xs:h-[85vh] w-full overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12} />
        <div>
            <div className='lg:px-[15px] lg:mt-[1rem]'>
              <div className={`pb-[2rem] rounded-[10px] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <div style={{ backgroundImage: `url(${profilebg})`, backgroundRepeat: 'no-repeat', backgroundSize: '' }} className='lg:h-[280px] w-full'>
                  <button className='text-[#22D1EE] bg-[#fff] mt-4 mr-5 p-[10px] rounded-[100px] text-[22px] lg:hidden xs:block float-end'><Link to='/edit_doctor_profile'><FaPencil /></Link></button>
                  <div className='flex items-center justify-between lg:px-[50px] xs:px-[10px] pt-[8rem]'>
                    <img src={profileavatar} className='rounded-[100px] object-contain w-[180px]' />
                    <button className='bg-[#fff] w-[172px] py-[10px] px-[10px] text-center text-[#17B978] hover:bg-[#17B978] hover:text-[#fff] duration-300 text-[16px] font-Poppins font-semibold rounded-[10px] lg:block xs:hidden'>
                      <Link to='/edit_doctor_profile/:id'>Edit Cover Photo</Link>
                    </button>
                  </div>
                </div>
                <div className='lg:flex lg:items-center xs:items-start justify-between lg:px-[50px] xs:px-[15px] pt-[1rem]'>
                  <div className='lg:ms-[11rem]'>
                    <h2 className='text-[30px] text-[#22D1EE] font-bold font-Inter'>{doctor?.firstName || 'Charles'} {doctor?.lastName || 'Doe'}</h2>
                    <h3 className='text-[#17B978] text-[15px] font-Inter font-normal'>Doctor Profession</h3>
                  </div>
                  <div className='flex items-center justify-end gap-[2rem] lg:mt-0 xs:mt-5'>
                    <button className='lg:text-[20px] xs:text-[16px] bg-[#22D1EE] p-2.5 rounded-[100px]' onClick={handleShareClick}><FaShare /></button>
                    <button className='border-[#22D1EE] border-[1px] border-solid rounded-[10px] w-[172px] h-[44px] py-[5px] px-[10px] text-center text-[#22D1EE] hover:bg-[#22D1EE] hover:text-[#fff] duration-300 text-[16px] font-Poppins font-semibold lg:block xs:hidden'><Link to={`/edit_doctor_profile/${doctor?._id}`}>Edit Profile</Link></button>
                    <button className='text-[#22D1EE] text-[21px] lg:hidden xs:block'><Link to={`/edit_doctor_profile/${doctor?._id}`}><FaPencil /></Link></button>
                  </div>
                </div>
              </div>

              <ProfilePost doctor={doctor} />
            </div>
        </div>
      </div>

      {showShareModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className={`rounded-lg lg:py-[40px] xs:py-[30px] lg:px-[30px] xs:px-[10px] lg:w-[1000px] xs:w-[98%] ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            <div className='flex justify-between items-center'>
              <h2 className='lg:text-[25px] xs:text-[20px] text-center font-Nunito font-extrabold'>Share Doctor Profile</h2>
              <button onClick={handleCloseShareModal} className='float-end lg:text-[20px] xs:text-[30px] lg:pr-0 xs:pr-[0.5rem] font-bold'>✕</button>
            </div>
            <hr className='w-full h-[2px] bg-[#000] mt-[3rem]'/>
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
              <div className={`flex justify-between gap-[10px] items-center border rounded-[10px] w-full lg:pl-[30px] lg:px-[20px] xs:px-[10px] lg:mb-[2rem] mt-[3rem] ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#D8F6F9]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <input
                  type='text'
                  value={`http://localhost:5173/doctorid=${doctor?._id}`}
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
  );
};

export default DcotorProfile;