import React, { useState } from 'react';
import { FaUserDoctor } from 'react-icons/fa6';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div 
        className='w-[46px] text-[24px] py-[10px] text-center px-[11px] text-white bg-[#17B978] rounded-[100px] cursor-pointer'
        onClick={toggleChat}
      >
        <FaUserDoctor />
      </div>

      {isOpen && (
        <div className="rounded-[10px] shadow-lg fixed lg:bottom-20 xs:bottom-[9rem] lg:right-12 xs:right-[0.5rem] z-50 flex flex-col">
          <iframe src="https://app.fastbots.ai/embed/clxz8mllh00aunibbb63ntw1p" className='rounded-[10px] lg:w-[400px] lg:h-[80vh] xs:w-[378px] xs:h-[73vh]'></iframe>
        </div>
      )}
    </div>
  );
};

export default Chatbot;