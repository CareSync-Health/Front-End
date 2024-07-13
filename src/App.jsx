// App.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import ErrorBoundary from './Components/ErrorBoundary';
import { ThemeProvider } from './Doctor Dashboard/Components/ThemeContext';
import { useSelector } from 'react-redux';

const Homepage = lazy(() => import('./Landing Page/HomePage/Homepage'));
const About = lazy(() => import('./Landing Page/About/About'));
const UserPage = lazy(() => import('./Landing Page/Auth/UserPage'));
const Login = lazy(() => import('./Landing Page/Auth/Patient/Login'));
const Signup = lazy(() => import('./Landing Page/Auth/Patient/Signup'));
const Login2 = lazy(() => import('./Landing Page/Auth/Doctor/Login'));
const Signup2 = lazy(() => import('./Landing Page/Auth/Doctor/Signup'));
const Contact = lazy(() => import('./Landing Page/Contact/Contact'));
const VerifyAccount = lazy(() => import('./Landing Page/Auth/Patient/VerifyAccount'));
const VerifyAccount2 = lazy(() => import('./Landing Page/Auth/Doctor/VerifyAccount'));

// DOCTOR IMPORTS
const DoctorDashboard = lazy(() => import('./Doctor Dashboard/DoctorDashboard'));
const DoctorAppointment = lazy(() => import('./Doctor Dashboard/DoctorAppointment'));
const DoctorChat = lazy(() => import('./Doctor Dashboard/Message/DoctorChat'));
const DoctorPages = lazy(() => import('./Doctor Dashboard/DoctorPages'));
const DoctorPatientPages = lazy(() => import('./Doctor Dashboard/PatientPages'));
const DoctorProfile = lazy(() => import('./Doctor Dashboard/Profile/DcotorProfile'));
const DoctorPayment = lazy(() => import('./Doctor Dashboard/Payment/Payment'));
const DoctorSetting = lazy(() => import('./Doctor Dashboard/Settings/SettingPage'));
const Confetti = lazy(() => import('./Doctor Dashboard/Components/Confetti'));

// PATIENT IMPORTS
const PatientDashboard = lazy(() => import('./Patient Dashboard/Dashboard/PatientDashboard'));
const PatientAppointments = lazy(() => import('./Patient Dashboard/Appointments/Appointments'));
const PatientMessage = lazy(() => import('./Patient Dashboard/Message/PatientMessage'));
const PatientCalendar = lazy(() => import('./Patient Dashboard/Calendar/PatientCalendar'));
const PatientSettings = lazy(() => import('./Patient Dashboard/Settings/PatientSettings'));

function App() {
  const doctor = useSelector((state) => state.doctorAuth.doctor);
  const patient = useSelector((state) => state.patientAuth.patient);
  
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div id="preloader-active" className="fixed inset-0 z-50 flex items-center justify-center bg-white">
              <div className="preloader flex items-center justify-center">
                <div className="preloader-inner relative">
                  <div className="superballs flex space-x-2">
                    <div className="superballs__dot w-4 h-4 bg-[#22D1EE] rounded-full animate-bounce"></div>
                    <div className="superballs__dot w-4 h-4 bg-[#22D1EE] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="superballs__dot w-4 h-4 bg-[#22D1EE] rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='user' element={<UserPage />} />
            <Route path='patientAuth' element={<Login />} />
            <Route path='patientSignup' element={<Signup />} />
            <Route path='doctorAuth' element={<Login2 />} />
            <Route path='doctorSignup' element={<Signup2 />} />
            <Route path='verify_account_patient' element={<VerifyAccount />} />
            <Route path='verify_account_doctor' element={<VerifyAccount2 />} />


            {/* DOCTOR ROUTE */}
            <Route path='/doctor_dashboard' element={doctor ? <DoctorDashboard/> : <Navigate to='/doctorAuth' /> } />
            <Route path='/doctor_appointment' element={doctor ? <DoctorAppointment /> : <Navigate to='/doctorAuth' />} />
            <Route path='/doctor_message' element={doctor ? <DoctorChat /> : <Navigate to='/doctorAuth' />} />
            <Route path='/doctor_pages' element={doctor ? <DoctorPages /> : <Navigate to='/doctorAuth' />} />
            <Route path='/doctor_patient_page' element={doctor ? <DoctorPatientPages /> : <Navigate to='/doctorAuth' />} />
            <Route path='/doctor_profile' element={doctor ? <DoctorProfile /> : <Navigate to='/doctorAuth' />} />
            <Route path='/doctor_payment_way' element={doctor ? <DoctorPayment /> : <Navigate to='/doctorAuth' />} />
            <Route path='/doctor_settings/*' element={doctor ? <DoctorSetting /> : <Navigate to='/doctorAuth' />} />
            <Route path='/congratulation' element={doctor ? <Confetti /> : <Navigate to='/doctorAuth' />} />
            
            {/* PATIENT ROUTE */}
            <Route path='/patient_dashbaord' element={patient ? <PatientDashboard /> : <Navigate to='/patientAuth' /> } />
            <Route path='/patient_appointment' element={patient ? <PatientAppointments /> : <Navigate to='/patientAuth' /> } />
            <Route path='/patient_message' element={patient ? <PatientMessage /> : <Navigate to='/patientAuth' /> } />
            <Route path='/patient_calendar' element={patient ? <PatientCalendar /> : <Navigate to='/patientAuth' /> } />
            <Route path='/patient_settings' element={patient ? <PatientSettings /> : <Navigate to='/patientAuth' /> } />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
