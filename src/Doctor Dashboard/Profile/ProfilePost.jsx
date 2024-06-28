import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaPhoneAlt, FaRegHeart,FaHeart } from "react-icons/fa";
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
// import { FaUserDoctor } from "react-icons/fa6";

const posts = [
  {
    id: 1,
    avatar: profileavatar,
    postImage: profilepostimg,
    userName: 'Charles Deo',
    postTime: '15mins ago',
    postText: 'New Blazer out here... $500!!!!!!',
    likes: 1498,
    comments: 3000
  },
  {
    id: 2,
    avatar: profileavatar,
    postImage: profilepostimg,
    userName: 'Charles Deo',
    postTime: '30mins ago',
    postText: 'New Blazer out here... $500!!!!!!',
    likes: 1498,
    comments: 3000
  },
  {
    id: 3,
    avatar: profileavatar,
    postImage: profilepostimg,
    userName: 'Charles Deo',
    postTime: '1hr ago',
    postText: 'New Blazer out here... $500!!!!!!',
    likes: 1498,
    comments: 3000
  },
  {
    id: 4,
    avatar: profileavatar,
    postImage: profilepostimg,
    userName: 'Charles Deo',
    postTime: '1hr ago',
    postText: 'New Blazer out here... $500!!!!!!',
    likes: 1498,
    comments: 3000
  },
  // Add more posts as needed
];

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

const ProfilePost = () => {
   // Initialize state for active tab
   const [activeTab, setActiveTab] = useState('posts');
   const [isClicked, setIsClicked] = useState(posts.map(() => false));

   const handleClick = (index) => {
     const newClickedState = isClicked.map((clicked, i) => (i === index ? !clicked : clicked));
     setIsClicked(newClickedState);
   };

   // Define the JSX for each tab's content
   const renderContent = () => {
     switch (activeTab) {
       case 'posts':
         return (
           <div>
            <div>
            {posts.map((post, index) => (
              <div key={post.id} className='mt-[1rem]'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-[10px]'>
                    <img src={post.avatar} className='w-[80px] rounded-[100px] object-contain' />
                    <span>
                      <h2 className='text-[#17B978] text-[16px] font-Nunito font-bold'>{post.userName}</h2>
                      <h3 className='text-[#17B978] text-[10px] font-Nunito font-light'>{post.postTime}</h3>
                    </span>
                  </div>
                  <span><BsThreeDots className='text-[#17B978] text-[24px]' /></span>
                </div>
                <div className='mt-5 ms-[2rem]'>
                  <img src={post.postImage} className='w-[481px]' />
                  <h3 className='text-[#17B978] text-[16px] font-Nunito font-light mt-[1rem]'><span className='font-bold'>{post.userName}</span> {post.postText}</h3>
                  <div className='flex items-center gap-[1.5rem] mt-[15px]'>
                    <span className='flex items-center gap-[10px] cursor-pointer' onClick={() => handleClick(index)}>
                      {isClicked[index] ?
                        <FaHeart className='text-[#17B978] text-[22px]' />
                        :
                        <FaRegHeart className='text-[#17B978] text-[22px]' />
                      }
                      <h3 className='text-[#17B978] text-[16px] font-bold font-Nunito'>{post.likes}</h3>
                    </span>
                    <span className='flex items-center gap-[10px]'>
                      <BiComment className='text-[#17B978] font-bold text-[22px]' />
                      <h3 className='text-[#17B978] text-[16px] font-bold font-Nunito'>{post.comments}</h3>
                    </span>
                  </div>
                </div>
                <hr className='w-full h-[1px] bg-[#17B978] mt-[1rem]' />
              </div>
            ))}
            </div>
          </div>
        );
        case 'experience':
          return (
             <div>Experience content here...</div>
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
            <div className='bg-[#fff] lg:w-[260px] h-[420px] rounded-[10px] px-[15px] py-[25px]'>
                <h2 className='text-[#17B978] text-[20px] font-bold font-Nunito'>About</h2>
                <h3 className='text-[#17B978] text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaUser className='text-[17px] text-[#22D1EE]' /> Male</h3>
                <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
                <h3 className='text-[#17B978] text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><MdCake className='text-[21px] text-[#22D1EE]' /> Born June 26, 1980</h3>
                <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
                <h3 className='text-[#17B978] text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-start gap-[10px]'><FaLocationDot className='text-[21px] text-[#22D1EE] mt-1' /> 2239  Hog Camp Road Schaumburg</h3>
                <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
                <h3 className='text-[#17B978] text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaEnvelope className='text-[21px] text-[#22D1EE]' /> charles5182@ummoh.com</h3>
                <hr className='w-full h-[1px] bg-[#17B978] mt-4' />
                <h3 className='text-[#17B978] text-[16px] font-Nunito font-normal mt-[1.5rem] flex items-center gap-[10px]'><FaPhoneAlt className='text-[17px] text-[#22D1EE]' /> (+234) 906 755 8326</h3>
            </div>
            <div className='bg-[#fff] lg:w-[580px] h-[834px] lg:mt-0 xs:mt-[2rem] rounded-[10px] py-[20px] overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              <div className="flex space-x-4 border-b pb-3 border-gray-300 px-[25px] py-[5px]">
                  <button
                    className={`pb-1 font-Nunito text-[18px]  ${activeTab === 'posts' ? 'border-b-2 border-green-500 text-[#17B978] font-semibold' : 'text-[#17B978] font-normal'}`}
                    onClick={() => setActiveTab('posts')}
                  >
                    Posts
                  </button>
                  <button
                    className={`pb-1 font-Nunito text-[18px] ${activeTab === 'experience' ? 'border-b-2 border-green-500 text-[#17B978] font-semibold' : 'text-[#17B978] font-normal'}`}
                    onClick={() => setActiveTab('experience')}
                  >
                    Experience
                  </button>
                  <button
                    className={`pb-1 font-Nunito text-[18px] ${activeTab === 'education' ? 'border-b-2 border-green-500 text-[#17B978] font-semibold' : 'text-[#17B978] font-normal'}`}
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
            <div className='bg-[#fff] lg:w-[260px] xs:mt-[2rem] lg:mt-0 h-[234px] rounded-[10px] px-[20px] py-[20px]'>
              <h3 className='text-[#22D1EE] text-[18px] font-bold font-Nunito'>Similar Doctor’s</h3>
              <div className='mt-[1rem]'>
                {Similar.map((simi, index) => (
                  <span className='flex items-center gap-[20px] mt-[1rem]'>
                    <img src={simi.image} className='w-[40px] rounded-[100px] object-contain' />
                    <span>
                      <h2 className='text-[#22D1EE] text-[14px] font-normal font-Nunito'>{simi.name}</h2>
                      <h3 className='text-[#17B978] text-[12px] font-Nunito font-normal'>{simi.email}</h3>
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <div className='bg-[#fff] lg:w-[260px] xs:mt-[2rem] lg:mt-0  h-[333px] rounded-[10px] px-[20px] py-[20px] mt-[2rem] overflow-x-hidden overflow-y-hidden'>
                <h1 className='text-[#22D1EE] text-[18px] font-bold font-Nunito'>Active</h1>
                <div>
                {Active.map((active, index) => (
                  <div>
                    <div className='flex items-center justify-between'>
                      <span className='flex items-center gap-[20px] mt-[1rem]'>
                        <img src={active.image} className='w-[40px] rounded-[100px] object-contain' />
                          <span>
                            <h2 className='text-[#22D1EE] text-[13px] font-normal font-Nunito'>{active.name}</h2>
                            <h3 className='text-[#17B978] text-[11px] font-Nunito font-normal'>{active.active}</h3>
                          </span>
                      </span>
                      <span>
                      <span>
                          <h3 className='text-[#22D1EE] text-[8px] font-Nunito font-normal'>{active.activeTime}</h3>
                      </span>
                      </span>
                    </div>
                   <hr className='w-full h-[1px] mt-[10px] bg-[#17B978]'/>
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