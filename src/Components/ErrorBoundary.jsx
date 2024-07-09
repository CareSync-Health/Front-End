import React, { useState, useEffect } from 'react';
import { useTheme } from '../Doctor Dashboard/Components/ThemeContext';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const { theme, appearance } = useTheme();

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      console.error("ErrorBoundary caught an error", error, errorInfo);
      setHasError(true);
    };

    window.onerror = handleError;
    window.onunhandledrejection = (event) => handleError(event.reason);

    return () => {
      window.onerror = null;
      window.onunhandledrejection = null;
    };
  }, []);

  if (hasError) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        <div className={`p-8 rounded shadow-md text-center lg:w-auto xs:w-[90%] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          <h1 className="text-2xl font-bold text-red-600 mb-4 font-Nunito">Oops! Something went wrong.</h1>
          <p className="lg:text-[16px] xs:text-[16px] leading-[28px] font-Nunito font-normal mb-6">We encountered an error while processing your request. Please try again later or contact support if the problem persists.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#22D1EE] text-white px-4 py-2 rounded lg:w-[30%] xs:w-full font-bold font-Nunito text-[16px]"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;