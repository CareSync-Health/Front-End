import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

const Confetti = () => {
  const [windowDimension, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showConfetti, setShowConfetti] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimension]);

  useEffect(() => {
    // Show confetti when component mounts
    setShowConfetti(true);

    // Hide confetti after 10 seconds
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 30000);

    // Start countdown
    const countdownTimer = setInterval(() => {
      setCountdown(prev => {
        if (prev === 1) {
          clearInterval(countdownTimer);
          navigate('/', { replace: true });
        }
        return prev - 1;
      });
    }, 3000);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(confettiTimer);
      clearInterval(countdownTimer);
    };
  }, [navigate]);

  const handleContinue = () => {
    navigate('/', { replace: true });
  };

  return (
    <>
      {showConfetti && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={500}
        />
      )}
      <div className="flex justify-center text-center items-center h-screen p-4">
        <div className="max-w-lg w-full">
          <h1 className="text-[24px] lg:text-[28px] font-bold font-Nunito leading-[36px] lg:leading-[46px] mb-4">Thank you! We received your CareSync Med application.</h1>
          <p className="text-[14px] lg:text-[16px] font-medium font-Nunito leading-[20px] lg:leading-[24px] mb-4">We'll review within two business days. Once approved, you'll be able to get bookings and appointments from our patients.</p>
          <button onClick={handleContinue} className="bg-[#22D1EE] py-[10px] px-5 mt-4 w-full lg:w-[70%] rounded-[8px] text-white font-medium font-Nunito text-[15px] lg:text-[17px]">
            Continue to dashboard in {countdown}s
          </button>
        </div>
      </div>
    </>
  );
};

export default Confetti;