import React, { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import ErrorBoundary from './Components/ErrorBoundary.jsx';

const Homepage = lazy(() => import('./Landing Page/HomePage/Homepage'))
const About = lazy(() => import('./Landing Page/About/About'))
const UserPage = lazy(() => import('./Landing Page/Auth/UserPage'))
const Login = lazy(() => import('./Landing Page/Auth/Patient/Login'))
const Signup = lazy(() => import('./Landing Page/Auth/Patient/Signup'))
const Login2 = lazy(() => import('./Landing Page/Auth/Doctor/Login'))
const Signup2 = lazy(() => import('./Landing Page/Auth/Doctor/Signup'))
const Contact = lazy(() => import('./Landing Page/Contact/Contact'))
const VerifyAccount = lazy(() => import('./Landing Page/Auth/Patient/VerifyAccount'))
const VerifyAccount2 = lazy(() => import('./Landing Page/Auth/Doctor/VerifyAccount'))

// DOCTOR DASHBOARD
const DoctorDashboard = lazy(() => import('./Doctor Dashboard/DoctorDashboard'))
const DoctorAppointment = lazy(() => import('./Doctor Dashboard/DoctorAppointment'))
const DoctorPages = lazy(() => import('./Doctor Dashboard/DoctorPages'))
const DoctorPatientPages = lazy(() => import('./Doctor Dashboard/PatientPages'))
const DoctorProfile = lazy(() => import('./Doctor Dashboard/Profile/DcotorProfile'))
const DoctorPayment = lazy(() => import('./Doctor Dashboard/Payment/Payment'))


function App() {

  return (
    <>
    <Router>
      <ErrorBoundary>
          <Suspense 
            fallback={
              <div id="preloader-active" className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                <div className="preloader flex items-center justify-center">
                  <div className="preloader-inner relative">
                    <div className="superballs flex space-x-2">
                      <div className="superballs__dot w-4 h-4 bg-[#22D1EE] rounded-full animate-bounce"></div>
                      <div className="superballs__dot w-4 h-4 bg-[#22D1EE] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                      <div className="superballs__dot w-4 h-4 bg-[#22D1EE] rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              </div>           
            }
          >
            <Routes>
              {/* LANDING PAGE */}
              <Route path='/landingpage' element={ <Homepage/> } />
              <Route path='about' element={ <About /> } />
              <Route path='contact' element={ <Contact/> } />
              <Route path='user' element={ <UserPage/> } />
              <Route path='patientAuth' element={ <Login/> } />
              <Route path='patientSignup' element={ <Signup/> } />
              <Route path='doctorAuth' element={ <Login2/> } />
              <Route path='doctorSignup' element={ <Signup2/> } />
              <Route path='verify_account_patient' element={ <VerifyAccount/> } />
              <Route path='verify_account_doctor' element={ <VerifyAccount2/> } />

              {/* DOCTOR DASHBOARD */}
              <Route path='/' element={ <DoctorDashboard/> } />
              <Route path='doctor_appointment' element={ <DoctorAppointment /> } />
              <Route path='doctor_pages' element={ <DoctorPages /> } />
              <Route path='doctor_patient_page' element={ <DoctorPatientPages/> } />
              <Route path='doctor_profile' element={ <DoctorProfile /> } />
              <Route path='payment_way' element={ <DoctorPayment/> } />
            </Routes>
          </Suspense>
      </ErrorBoundary>
    </Router>
    <Toaster />
    </>
  )
}

export default App