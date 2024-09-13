import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { FaCaretLeft } from "react-icons/fa";

const tutorialSteps = [
  {
    id: 1,
    position: 'lg:left-[40%] lg:top-[40%] lg:pt-[2rem]',
    title: 'Introduction to the dashboard.',
    description: 'Here you can manage all your appointments and patients.',
  },
  {
    id: 2,
    position: 'lg:left-[15%] lg:top-[30%]',
    title: 'View and manage your appointments.',
    description: 'View and manage your appointments from patients.',
    icon: <FaCaretLeft />,
  },
  {
    id: 3,
    position: 'lg:left-[12%] lg:top-[52%]',
    title: 'View past patients',
    description: 'View patients you have had an appointment before.',
    icon: <FaCaretLeft />,
  },
  {
    id: 4,
    position: 'lg:left-[12%] lg:top-[59%]',
    title: 'Track your earnings.',
    description: 'You can track your earnings here and pay any debts being owed from each successful appointments to continue receiving appointments from patients.',
    icon: <FaCaretLeft />,
  },
  {
    id: 5,
    position: 'lg:left-[12%] lg:top-[73%]',
    title: 'Configure your account preferences',
    description: 'Here you can configure your settings and preferences.',
    icon: <FaCaretLeft />,
  },
  {
    id: 6,
    position: 'lg:right-[1%] lg:top-[12%] lg:pt-[2rem]',
    title: 'Access Your Profile',
    description: 'This is where you can view and set up your profile information to receive appointments from patients before starting your journey as a CareSync Healthcare Provider.',
  },
];

const TutorialModal = ({ onComplete }) => {
  const { theme, appearance } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(); // Close the tutorial when done
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentTutorial = tutorialSteps[currentStep];

  return (
    <div className='fixed inset-0 z-[1000] bg-black bg-opacity-30 lg:block xs:flex xs:items-center xs:justify-center xs:h-screen'>
      <div className={`fixed ${currentTutorial.position} z-50 p-4 shadow-lg rounded-md lg:w-96 xs:w-[90%] ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        <div className={`-ms-11 -mt-5 text-[40px] lg:block xs:hidden ${theme === 'dark' ? 'text-gray-900' : theme === 'light' ? 'text-[#E2F3F5]' : ''}`}>
          {currentTutorial.icon}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">{currentTutorial.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{currentTutorial.description}</p>
          <div className="flex justify-between">
            <button
              className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              Back
            </button>
            <button
              className="bg-[#22D1EE] text-white px-3 py-1 rounded-md hover:bg-[#22cfeec0]"
              onClick={handleNext}
            >
              {currentStep === tutorialSteps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;
