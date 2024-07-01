import React, {useState} from 'react'
import { BsSearch } from 'react-icons/bs'
import MessageIcon from '../../assets/Icons/messageIcon.svg'
import Notification from '../../assets/Icons/notification.svg'
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom'
import Chatbot from './Chatbot'


function formatNumber(number) {
  // Check if number is undefined or null
  if (number == null) {
    return '';
  }

  // Check if number is a valid number and not NaN
  if (typeof number !== 'number' || isNaN(number)) {
    return '';
  }

  // Format number
  if (number >= 1000) {
    return (number / 1000).toFixed(0) + 'K';
  } else {
    return number.toString();
  }
}


const Navbar = ({ messageCount, notificationCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className='bg-[#E2F3F5] lg:px-[30px] xs:px-[10px] shadow-lg py-[20px]'>
      <div className='flex justify-between items-center'>
        <div>
          <div className='flex items-center rounded-[100px] bg-white px-4 py-2'>
            <BsSearch className='text-[#A0A4A8] text-lg block float-left cursor-pointer mr-2' />
            <input type={'text'} placeholder='Search' className='text-[13px] font-Inter leading-[16px] text-start font-normal bg-transparent lg:w-[350px] xs:w-[150px] text-[#A0A4A8] rounded-md focus:outline-none border-none' />
          </div>
        </div>
        <div className='flex items-center lg:gap-[2rem] xs:gap-[1rem]'>
        <div className='flex items-center relative'>
            <img src={MessageIcon} className='lg:w-25 xs:w-[22px]' alt='Notification' />
            {messageCount != null && (
            <span className='bg-[#FF6760] border-2 border-[#F6F8FB] border-solid rounded-full lg:w-[25px] lg:h-[25px] xs:w-[20px] xs:h-[20px] lg:text-[12px] xs:text-[10px] text-white font-Inter lg:pt-[5px] xs:pt-[2.6px] font-bold leading-[12px] text-center absolute left-[15px] lg:-top-4 xs:-top-3'>
                {formatNumber(messageCount)}
            </span>
            )}
          </div>
            <div className='flex items-center relative'>
              <img src={Notification} className='lg:w-25 xs:w-[22px]' alt='Notification' />
              {notificationCount != null && (
                <span className='bg-[#FF6760] border-2 border-[#F6F8FB] border-solid rounded-full lg:w-[25px] lg:h-[25px] xs:w-[20px] xs:h-[20px] lg:text-[12px] xs:text-[10px] text-white font-Inter lg:pt-[5px] xs:pt-[2.6px] font-bold leading-[12px] text-center absolute left-[15px] lg:-top-4 xs:-top-3'>
                {formatNumber(notificationCount)}
              </span>
                )}
            </div>
          <Link to='doctor_profile'>
            <img src={avatar} className='lg:w-[40px] xs:w-[30px]' />
          </Link>
        </div>
        <div className='fixed z-50 lg:right-[3rem] xs:right-[2rem] lg:bottom-[2rem] xs:bottom-[5rem]'>
          <Chatbot/>
        </div>
      </div>
    </div>
  )
}

export default Navbar