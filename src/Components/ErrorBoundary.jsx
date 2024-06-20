import React, { Component } from 'react';
import 'tailwindcss/tailwind.css';  // Ensure Tailwind CSS is imported

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#E2F3F5]">
          <div className="bg-white p-8 rounded shadow-md text-center lg:w-auto xs:w-[90%]">
            <h1 className="text-2xl font-bold text-red-600 mb-4 font-Inter">Oops! Something went wrong.</h1>
            <p className="text-gray-700 lg:text-[15px] xs:text-[16px] leading-[28px] font-Inter font-normal mb-6">We encountered an error while processing your request. Please try again later or contact support if the problem persists.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#22D1EE] text-white px-4 py-2 rounded"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
