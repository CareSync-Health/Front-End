import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import profilebg from '../../assets/profile-bg.png';
import profileavatar from '../../assets/profile_avatar.png';
import ProfilePost from './ProfilePost';
import { FaPencil, FaShare } from 'react-icons/fa6';
import { useTheme } from '../Components/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'; // Import useNavigate
import Whatsapp from '../../assets/Icons/whatsapp.svg';
import Twitter from '../../assets/Icons/X.svg';
import Instagram from '../../assets/Icons/Ig.svg';
import Facebook from '../../assets/Icons/Facebook.svg';
import Email from '../../assets/Icons/Email.svg';
import Linkedin from '../../assets/Icons/Linkedin.svg';
import Pinintrest from '../../assets/Icons/Pinintrest.svg';
import Twitch from '../../assets/Icons/Twitch.svg';
import { MdMessage } from 'react-icons/md';
import { loadDoctor } from '@/Redux/Actions/DoctorActions';

const ViewDoctorProfile = () => {
    const { theme, appearance } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useNavigate
    const { id } = useParams(); // Get doctor ID from URL

    // Get doctor data from Redux store
    const doctor = useSelector((state) => state.loadDoctor.doctor);

    useEffect(() => {
        if (id) {
            dispatch(loadDoctor(id));
        }
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
        const link = `http://localhost:5173/view_doctor_profile/${doctor?._id}`;
        navigator.clipboard.writeText(link);
        setCopyMessageVisible(true);
        setTimeout(() => {
            setCopyMessageVisible(false);
        }, 5000);
    };

    const handleMessageClick = () => {
        // Navigate to the chat container with the doctor's ID
        navigate(`/chat/${doctor?._id}`);
    };

    const profileUrl = `http://localhost:5173/view_doctor_profile/${doctor?._id}`;
    const shareMessage = `See ${doctor?.title} ${doctor?.firstName} ${doctor?.lastName}'s profile on CareSync Med ${profileUrl}`;

    return (
        <div className='flex'>
            <Sidebar />
            <div className={`flex-1 lg:h-[99.9vh] xs:h-[85vh] w-full overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <Navbar messageCount={5} notificationCount={12} />
                <div>
                    <div className='lg:px-[15px] lg:mt-[1rem]'>
                        <div className={`pb-[2rem] rounded-[10px] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            <div style={{ backgroundImage: `url(${doctor?.headerPic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='lg:h-[280px] w-full'>
                                <div className='flex items-center justify-start lg:block xs:relative lg:top-0 xs:top-[3rem] lg:px-[30px] xs:px-[10px] pt-[8rem]'>
                                    <img src={doctor?.profilePic || profileavatar} className='rounded-[100px] object-cover w-[200px] h-[200px]' />
                                </div>
                            </div>
                            <div className='lg:flex lg:items-center xs:items-start justify-between lg:px-[50px] xs:px-[15px] lg:pt-[1rem] xs:pt-[4rem]'>
                                <div className='lg:ms-[11rem]'>
                                    <h2 className='text-[30px] text-[#22D1EE] font-bold font-Inter'>{doctor?.title} {doctor?.firstName} {doctor?.lastName}</h2>
                                    <h3 className='text-[#17B978] text-[15px] font-Inter font-normal'>{doctor?.profession}</h3>
                                </div>
                                <div className='flex items-center justify-end gap-[2rem] lg:mt-0 xs:mt-5'>
                                    <button className='lg:text-[25px] xs:text-[16px] bg-[#22D1EE] p-2.5 rounded-[100px]' onClick={handleShareClick}><FaShare /></button>
                                    <button className='lg:text-[25px] xs:text-[16px] bg-[#22D1EE] p-2.5 rounded-[100px]' onClick={handleMessageClick}><MdMessage /></button>
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
                        <hr className='w-full h-[2px] bg-[#000] mt-[3rem]' />
                        <div className='mt-[2rem]'>
                            <h2 className='lg:text-[20px] xs:text-[18px] font-Nunito font-semibold'>Share to Social Media</h2>
                            <div className='flex flex-wrap justify-around gap-[2rem] mt-[2rem] lg:px-[170px] lg:ms-[-11rem]'>
                                <a href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`} target='_blank' rel='noopener noreferrer'>
                                    <img src={Whatsapp} alt='WhatsApp' className='w-[50px]' />
                                    <h2 className='text-[14px] mt-3 font-Nunito font-normal'>WhatsApp</h2>
                                </a>
                                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`} target='_blank' rel='noopener noreferrer'>
                                    <img src={Twitter} alt='Twitter' className='w-[50px]' />
                                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>X</h2>
                                </a>
                                <a href={`https://www.instagram.com/?url=${encodeURIComponent(profileUrl)}&text=${encodeURIComponent(shareMessage)}`} target='_blank' rel='noopener noreferrer'>
                                    <img src={Instagram} alt='Instagram' className='w-[50px]' />
                                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>Instagram</h2>
                                </a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`} target='_blank' rel='noopener noreferrer'>
                                    <img src={Facebook} alt='Facebook' className='w-[50px]' />
                                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>Facebook</h2>
                                </a>
                                <a href={`mailto:?subject=Check out this doctor on CareSync Med&body=${encodeURIComponent(shareMessage)}`} target='_blank' rel='noopener noreferrer'>
                                    <img src={Email} alt='Email' className='w-[50px]' />
                                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>Email</h2>
                                </a>
                                <a href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(profileUrl)}&text=${encodeURIComponent(shareMessage)}`} target='_blank' rel='noopener noreferrer'>
                                    <img src={Linkedin} alt='LinkedIn' className='w-[50px]' />
                                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>LinkedIn</h2>
                                </a>
                                <a href={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(profileUrl)}`} target='_blank' rel='noopener noreferrer'>
                                    <img src={Pinintrest} alt='Pinterest' className='w-[50px]' />
                                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>Pinterest</h2>
                                </a>
                                <a href={`https://www.twitch.tv/share?url=${encodeURIComponent(profileUrl)}&text=${encodeURIComponent(shareMessage)}`} target='_blank' rel='noopener noreferrer'>
                                    <img src={Twitch} alt='Twitch' className='w-[50px]' />
                                    <h2 className='text-[14px] mt-3 font-Nunito font-normal text-center'>Twitch</h2>
                                </a>
                            </div>
                        </div>
                        <hr className='w-full h-[2px] bg-[#000] mt-[2rem]' />
                        <div className='flex items-center justify-between mt-[2rem]'>
                            <h2 className='text-[20px] font-Nunito font-semibold'>Share Doctor Profile Link</h2>
                            <button className='bg-[#22D1EE] text-white text-[16px] px-[10px] py-[5px] rounded-lg' onClick={handleCopyLink}>Copy Link</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewDoctorProfile;