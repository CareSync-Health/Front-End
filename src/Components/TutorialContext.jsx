// TutorialContext.js
import { loadDoctor } from '@/Redux/Actions/DoctorActions';
import { loadPatient } from '@/Redux/Actions/PatientActions';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TutorialContext = createContext();

export const useTutorial = () => useContext(TutorialContext);

export const TutorialProvider = ({ children }) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState(null); // 'doctor' or 'patient'

  useEffect(() => {
    const hasSeenTutorialDoctor = localStorage.getItem('hasSeenTutorialDoctor');
    const hasSeenTutorialPatient = localStorage.getItem('hasSeenTutorialPatient');

    if (userType === 'doctor' && !hasSeenTutorialDoctor) {
      setShowTutorial(true);
    } else if (userType === 'patient' && !hasSeenTutorialPatient) {
      setShowTutorial(true);
    }
  }, [userType]);

  const startTutorial = (type) => {
    setUserType(type);
    setShowTutorial(true);
    setStep(1);
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const finishTutorial = () => {
    setShowTutorial(false);
    if (userType === 'doctor') {
      localStorage.setItem('hasSeenTutorialDoctor', 'true');
    } else if (userType === 'patient') {
      localStorage.setItem('hasSeenTutorialPatient', 'true');
    }
  };

  // Get doctor data from Redux store
  const doctor = useSelector((state) => state.loadDoctor.doctor);
  const patient = useSelector((state) => state.loadPatient.patient);
  const dispatch = useDispatch()

  if (userType === 'doctor') {
    useEffect(() => {
      dispatch(loadDoctor());
    }, [dispatch]);
  } else if (userType === 'patient') {
    useEffect(() => {
      dispatch(loadPatient());
    }, [dispatch]);
  }

  const getSteps = () => {
    if (userType === 'doctor') {
      return [
        { title: 'Welcome to the Doctor Dashboard', content: 'Introduction to the dashboard.', path: `/doctor_dashboard/${doctor?._id}` },
        { title: 'Appointment Management', content: 'View and manage your appointments.', path: `/doctor_appointment/${doctor?._id}` },
        { title: 'Messaging', content: 'Communicate with patients directly through the chat.', path: '/doctor_message' },
        { title: 'Payment & Earnings', content: 'Track your earnings and withdraw funds.', path: '/doctor_payment_way' },
        { title: 'Settings', content: 'Configure your account preferences and notifications.', path: '/doctor_settings' },
        { title: 'Profile Setup', content: 'Fill out your profile to let patients know about you.', path: '/doctor_profile' },
      ];
    } else if (userType === 'patient') {
      return [
        { title: 'Welcome to the Patient Dashboard', content: 'Introduction to the dashboard.', path: '/patient_dashboard' },
        // Add more steps for patient
      ];
    }
    return [];
  };

  return (
    <TutorialContext.Provider
      value={{
        showTutorial,
        step,
        startTutorial,
        nextStep,
        previousStep,
        finishTutorial,
        getSteps
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};