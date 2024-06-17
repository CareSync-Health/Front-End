import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Landing Page/HomePage/Homepage'
import UserPage from './Landing Page/Auth/UserPage'
import Login from './Landing Page/Auth/Patient/Login'
import Signup from './Landing Page/Auth/Patient/Signup'
import Login2 from './Landing Page/Auth/Doctor/Login'
import Signup2 from './Landing Page/Auth/Doctor/Signup'
import Contact from './Landing Page/Contact/Contact'
import VerifyAccount from './Landing Page/Auth/Patient/VerifyAccount'
import VerifyAccount2 from './Landing Page/Auth/Doctor/VerifyAccount'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Homepage/> } />
        <Route path='contact' element={ <Contact/> } />
        <Route path='user' element={ <UserPage/> } />
        <Route path='patientAuth' element={ <Login/> } />
        <Route path='patientSignup' element={ <Signup/> } />
        <Route path='doctorAuth' element={ <Login2/> } />
        <Route path='doctorSignup' element={ <Signup2/> } />
        <Route path='verify_account_patient' element={ <VerifyAccount/> } />
        <Route path='verify_account_doctor' element={ <VerifyAccount2/> } />
      </Routes>
    </Router>
    </>
  )
}

export default App