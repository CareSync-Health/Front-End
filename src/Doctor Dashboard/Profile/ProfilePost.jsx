import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaPhoneAlt, FaRegHeart, FaHeart } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { MdCake } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import profileavatar from '../../assets/profile_avatar.png'
import { BsThreeDots } from "react-icons/bs";
import profilepostimg from '../../assets/profile_post.png'
import Ellipse1 from '../../assets/Ellipse 96.png'
import Ellipse2 from '../../assets/Ellipse 64.png'
import Ellipse3 from '../../assets/Ellipse 92.png'
import Ellipse4 from '../../assets/image.png'
import { useTheme } from '../Components/ThemeContext';
// import { FaUserDoctor } from "react-icons/fa6";

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

const ProfilePost = ({ doctor }) => {
  const { theme, appearance } = useTheme();

  // Initialize state for active tab
  const [activeTab, setActiveTab] = useState('experience');
  //  const [isClicked, setIsClicked] = useState(posts.map(() => false));

  const handleClick = (index) => {
    const newClickedState = isClicked.map((clicked, i) => (i === index ? !clicked : clicked));
    setIsClicked(newClickedState);
  };

  // Define the JSX for each tab's content
  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <div className='flex items-start gap-[1rem]'>
            <div>
              <img src={profileavatar} className='w-10' />
            </div>
            <div>
              <h2 className='text-[18px] font-Nunito font-bold capitalize'>{doctor?.experienceTitle}</h2>
              <h2 className='text-[13px] font-Nunito font-normal flex items-center gap-[2rem]'>{doctor?.hospitalName} {doctor?.employmentType}</h2>
              <h2 className='text-[11px] font-Nunito font-normal'>{doctor?.experienceStartDate} - {doctor?.experienceEndDate}</h2>
              <h2 className='text-[11px] font-Nunito font-normal'>{doctor?.experienceLocation}</h2>
              <h2 className='text-[13px] font-Nunito font-normal'>{doctor?.experienceDescription}</h2>
            </div>
          </div>
        );
      case 'education':
        return (
          <div>Education content here...</div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='mt-[2rem] mb-[3rem]'>
      <div className='lg:flex lg:px-0 xs:px-[10px] items-start gap-[1rem]'>
        <div className={`lg:w-[260px] rounded-[10px] px-[15px] py-[25px] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#17B978]' : 'text-[#17B978]'}`}>
          <h2 className='text-[20px] font-bold font-Nunito'>About</h2>
          <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaUser className='text-[17px] text-[#22D1EE]' />{doctor?.gender || 'Gender'}</h3>
          <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
          <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><MdCake className='text-[21px] text-[#22D1EE]' />{doctor?.dob || 'Date Of Birth'}</h3>
          <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
          <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-start gap-[10px]'><FaLocationDot className='text-[21px] text-[#22D1EE] mt-1' />{doctor?.city || 'City'}, {doctor?.state || 'State'}, {doctor?.country || 'Country'}</h3>
          <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
          <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaEnvelope className='text-[21px] text-[#22D1EE]' /> {doctor?.email || 'charles5182@ummoh.com'}</h3>
          <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
          <h3 className='text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaPhoneAlt className='text-[17px] text-[#22D1EE]' />{doctor?.phoneNumber || 'Phone Number'}</h3>
        </div>
        <div className={`lg:w-[580px] h-[834px] lg:mt-0 xs:mt-[2rem] rounded-[10px] py-[20px] overflow-y-auto ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#17B978]' : 'text-[#17B978]'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          <div className="flex space-x-4 border-b pb-3 border-gray-300 px-[25px] py-[5px]">
            <button
              className={`pb-1 font-Nunito text-[18px] ${activeTab === 'experience' ? 'border-b-2 border-green-500 font-semibold' : 'font-normal'}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              className={`pb-1 font-Nunito text-[18px] ${activeTab === 'education' ? 'border-b-2 border-green-500 font-semibold' : 'font-normal'}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
          <div className="mt-4 px-[25px]">
            {renderContent()}
          </div>
        </div>
        <div>
          <div className={`lg:w-[260px] xs:mt-[2rem] lg:mt-0 h-[234px] rounded-[10px] px-[20px] py-[20px] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#22D1EE]' : 'text-[#22D1EE]'}`}>
            <h3 className='text-[18px] font-bold font-Nunito'>Similar Doctor’s</h3>
            <div className='mt-[1rem]'>
              {Similar.map((simi, index) => (
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
          <div className={`lg:w-[260px] mt-[2rem] h-[333px] rounded-[10px] px-[20px] py-[20px] overflow-x-hidden overflow-y-hidden ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#22D1EE]' : 'text-[#22D1EE]'}`}>
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
    </div>
  )
}

export default ProfilePost