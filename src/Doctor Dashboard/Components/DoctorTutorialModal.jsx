import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { useTutorial } from '@/Components/TutorialContext';

const DoctorTutorialModal = () => {
  const { showTutorial, step, nextStep, previousStep, finishTutorial, getSteps } = useTutorial();
  const navigate = useNavigate();
  const { theme, appearance } = useTheme();

  const steps = getSteps();

  if (!showTutorial) return null;

  const handleNext = () => {
    if (step < steps.length) {
      nextStep();
      navigate(steps[step].path);
    } else {
      finishTutorial();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      previousStep();
      navigate(steps[step - 2].path);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`w-[90%] max-w-lg p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        <h2 className="text-2xl font-bold mb-4">{steps[step - 1].title}</h2>
        <p className="text-lg mb-6">{steps[step - 1].content}</p>
        <div className="flex justify-between">
          {step > 1 && (
            <button onClick={handlePrevious} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
              Previous
            </button>
          )}
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded ml-auto"
          >
            {step < steps.length ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorTutorialModal;