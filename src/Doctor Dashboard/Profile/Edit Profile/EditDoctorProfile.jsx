import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import { useTheme } from '../../Components/ThemeContext'
import profilebg from '../../../assets/profile-bg.png'
import profileavatar from '../../../assets/profile_avatar.png'
import { TbCameraStar } from "react-icons/tb";
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadDoctor } from '../../../Redux/Actions/DoctorActions'
import toast from 'react-hot-toast'
import CareSyncBanner from '../../../assets/CareSync Banner.jpg'
import CareSync from '../../../assets/CareSync Logo.png'



const EditProfile = () => {

  const { theme, appearance } = useTheme();

  const { id } = useParams(); // Get doctor ID from URL
  const dispatch = useDispatch();

  // Get doctor data from Redux store
  const doctor = useSelector((state) => state.loadDoctor.doctor);

  useEffect(() => {
    dispatch(loadDoctor(id));
  }, [dispatch, id]);

  const defaultBanner = CareSyncBanner;  // Default banner image path
  const defaultAvatar = CareSync;  // Default profile image path

  const [profilebg, setProfilebg] = useState(defaultBanner);
  const [profileavatar, setProfileavatar] = useState(defaultAvatar);

  const bannerMaxWidth = 1200; // Max width for banner in pixels
  const bannerMaxHeight = 300; // Max height for banner in pixels
  const avatarMaxWidth = 180;  // Max width for avatar in pixels
  const avatarMaxHeight = 180; // Max height for avatar in pixels
  const maxFileSize = 2 * 1024 * 1024; // Max file size in bytes (2MB)

  const handleImageUpload = (event, setImage, maxWidth, maxHeight) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > maxFileSize) {
        toast("File size exceeds 2MB. Please upload a smaller image.");
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (img.width > maxWidth || img.height > maxHeight) {
          toast(`Image dimensions should be within ${maxWidth}x${maxHeight} pixels.`);
        } else {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result); // Set the uploaded image
          };
          reader.readAsDataURL(file);
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const handleBannerUpload = (event) => {
    handleImageUpload(event, setProfilebg, bannerMaxWidth, bannerMaxHeight);
  };

  const handleAvatarUpload = (event) => {
    handleImageUpload(event, setProfileavatar, avatarMaxWidth, avatarMaxHeight);
  };

  const handleBannerDelete = () => {
    setProfilebg(defaultBanner); // Reset to default banner
  };

  const handleAvatarDelete = () => {
    setProfileavatar(defaultAvatar); // Reset to default avatar
  };



  return (
    <div className='flex'>
      <Sidebar />
      <div className={`flex-1 lg:h-[99.9vh] xs:h-[85vh] w-full overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12} />
        <div className='mb-[5rem]'>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${profilebg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: bannerMaxHeight,
              maxWidth: bannerMaxWidth,
              margin: '0 auto',
            }}
            className='w-full'
          >
            <div className='flex items-center justify-center h-full gap-[2rem]'>
              <label className='bg-[#00000073] p-3 rounded-full cursor-pointer'>
                <TbCameraStar className='text-[24px] text-[#ffffffbe]' />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBannerUpload}
                  className="hidden"
                />
              </label>
              <div
                className='bg-[#00000073] p-3 rounded-full cursor-pointer'
                onClick={handleBannerDelete}
              >
                <FaTimes className='text-[22px] text-[#ffffffbe]' />
              </div>
            </div>
            <div
              className='mt-[-5rem] w-[180px] object-contain rounded-full h-[64%] lg:ms-[4rem] xs:ms-[1rem]'
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${profileavatar})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: avatarMaxWidth,
                height: avatarMaxHeight,
              }}
            >
              <div className='flex items-center justify-center gap-[10px] h-full'>
                <label className='bg-[#00000073] p-3 rounded-full cursor-pointer'>
                  <TbCameraStar className='text-[24px] text-[#ffffffbe]' />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </label>
              <div
                className='bg-[#00000073] p-3 rounded-full cursor-pointer'
                onClick={handleAvatarDelete}
              >
                <FaTimes className='text-[22px] text-[#ffffffbe]' />
              </div>
              </div>
            </div>
          </div>
          <form>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[10rem] lg:px-[90px] xs:px-[10px]'>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>First Name</h2>
                <input type='text' placeholder={doctor?.firstName || 'First Name'} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Last Name</h2>
                <input type='text' placeholder={doctor?.lastName || 'Last Name'} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Username</h2>
                <input type='text' placeholder={doctor?.userName || 'Username'} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Email</h2>
                <input type='email' placeholder={doctor?.email || 'Email Address'} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Gender</h2>
                <input type='text' placeholder={doctor?.gender || 'Gender'} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Age</h2>
                <input type='text' placeholder={doctor?.age || 'Age'} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Address</h2>
                <input type='text' placeholder={`${doctor?.city || 'City'}, ${doctor?.state || 'State'}, ${doctor?.country || 'Country'}`} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Phone Number</h2>
                <input type='text' placeholder={doctor?.phoneNumber || 'Phone Number'} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
            </div>
            <div className='lg:flex items-end justify-end lg:px-[90px] xs:px-[10px] mt-[2rem]'>
              <button type='submit' className='bg-[#22D1EE] text-white text-[18px] font-Nunito font-bold lg:w-[18%] xs:w-[50%] py-[7px] px-2 rounded-[12px]'>Save</button>
            </div>
          </form>
          <form>
            <div className='lg:px-[90px] xs:px-[10px] mt-[3em]'>
              <h1 className='text-[28px] font-Nunito font-bold'>Experience</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[2rem]'>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Title*</h2>
                  <input type='text' placeholder='Ex: Dentist' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Employment type</h2>
                  <select className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}>
                    <option>Please Select</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Hospital name*</h2>
                  <input type='text' placeholder='Ex: Eye Care' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Location</h2>
                  <input type='text' placeholder='Ex: Nigeria, London' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Start Date*</h2>
                  <input type='date' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>End Date*</h2>
                  <input type='date' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium mt-[2rem]'>Description</h2>
                <textarea rows='6' placeholder='Job Description' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none resize-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
              </div>
            </div>
            <div className='lg:flex items-end justify-end lg:px-[90px] xs:px-[10px] mt-[2rem]'>
              <button type='submit' className='bg-[#22D1EE] text-white text-[18px] font-Nunito font-bold lg:w-[18%] xs:w-[50%] py-[7px] px-2 rounded-[12px]'>Save</button>
            </div>
          </form>
          <form>
            <div className='lg:px-[90px] xs:px-[10px] mt-[3rem]'>
              <h1 className='text-[28px] font-Nunito font-bold'>Education</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[2rem]'>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>School*</h2>
                  <input type='text' placeholder='ex: University of Lagos' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Degree*</h2>
                  <input type='text' placeholder='ex: bachelors' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Field of study</h2>
                  <input type='text' placeholder='ex: Dentist' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Grade</h2>
                  <input type='text' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Start Date*</h2>
                  <input type='date' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>End Date*</h2>
                  <input type='date' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium mt-[2rem]'>Activities and societies</h2>
                <textarea rows='6' placeholder='Activities Description' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none resize-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium mt-[2rem]'>Description</h2>
                <textarea rows='6' placeholder='Job Description' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none resize-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
              </div>
            </div>
            <div className='lg:flex items-end justify-end lg:px-[90px] xs:px-[10px] mt-[2rem]'>
              <button type='submit' className='bg-[#22D1EE] text-white text-[18px] font-Nunito font-bold lg:w-[18%] xs:w-[50%] py-[7px] px-2 rounded-[12px]'>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfile