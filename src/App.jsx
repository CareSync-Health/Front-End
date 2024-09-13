import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./Components/ErrorBoundary";
import { ThemeProvider } from "./Doctor Dashboard/Components/ThemeContext";
import { DoctorPrivateRoute, PatientPrivateRoute } from "./Components/ProtectedRoute";
import { getUserRole } from "./Redux/Actions/DoctorActions";
import { TutorialProvider } from "./Components/TutorialContext";

// LANDING PAGE IMPORTS
const Homepage = lazy(() => import("./Landing Page/HomePage/Homepage"));
const Unauthorized = lazy(() => import("./Components/Unauthorized"));
const About = lazy(() => import("./Landing Page/About/About"));
const UserPage = lazy(() => import("./Landing Page/Auth/UserPage"));
const Login = lazy(() => import("./Landing Page/Auth/Patient/Login"));
const Verify2FA = lazy(() => import("./Landing Page/Auth/Patient/Verify2FA"));
const Signup = lazy(() => import("./Landing Page/Auth/Patient/Signup"));
const Login2 = lazy(() => import("./Landing Page/Auth/Doctor/Login"));
const Verify2SV = lazy(() => import("./Landing Page/Auth/Doctor/Verify2SV"));
const Signup2 = lazy(() => import("./Landing Page/Auth/Doctor/Signup"));
const Doctor_Forget_Password = lazy(() => import("./Landing Page/Auth/Doctor/ForgotPassword"));
const Doctor_Reset_Password = lazy(() => import("./Landing Page/Auth/Doctor/ResetPassword"));
const Patient_Forget_Password = lazy(() => import("./Landing Page/Auth/Patient/ForgotPassword"));
const Patient_Reset_Password = lazy(() => import("./Landing Page/Auth/Patient/ResetPassword"));
const Contact = lazy(() => import("./Landing Page/Contact/Contact"));
const VerifyAccount = lazy(() => import("./Landing Page/Auth/Patient/VerifyAccount"));
const VerifyAccount2 = lazy(() => import("./Landing Page/Auth/Doctor/VerifyAccount"));
const Terms_Conditions = lazy(() => import("./Components/Terms_Conditions"));
const Privacy_Policy = lazy(() => import("./Components/Privacy_Policy"));

// DOCTOR IMPORTS
const DoctorDashboard = lazy(() => import("./Doctor Dashboard/DoctorDashboard"));
const DoctorAppointment = lazy(() => import("./Doctor Dashboard/Appointments/DoctorAppointment"));
const DoctorChat = lazy(() => import("./Doctor Dashboard/Message/Chat"));
const DoctorPages = lazy(() => import("./Doctor Dashboard/DoctorPages"));
const DoctorPatientPages = lazy(() => import("./Doctor Dashboard/PatientPages"));
const DoctorProfile = lazy(() => import("./Doctor Dashboard/Profile/DoctorProfile"));
const ViewDoctorProfile = lazy(() => import("./Doctor Dashboard/Profile/ViewDoctorProfile"));
const EditDoctorProfile = lazy(() => import("./Doctor Dashboard/Profile/Edit Profile/EditDoctorProfile"));
const DoctorPayment = lazy(() => import("./Doctor Dashboard/Payment/Payment"));
const OnlineWithdrawal = lazy(() => import("./Doctor Dashboard/Payment/OnlineWithdrawal"));
const PaymentMethod = lazy(() => import("./Doctor Dashboard/Payment/PaymentMethod"));
const DoctorSetting = lazy(() => import("./Doctor Dashboard/Settings/SettingPage"));
const Verification = lazy(() => import("./Doctor Dashboard/VerifyAccount/Verification"));
const Confetti = lazy(() => import("./Doctor Dashboard/Components/Confetti"));

// PATIENT IMPORTS
const PatientDashboard = lazy(() => import("./Patient Dashboard/Dashboard/PatientDashboard"));
const PatientAppointments = lazy(() => import("./Patient Dashboard/Appointments/PatientAppointments"));
const SearchDoctors = lazy(() => import("./Patient Dashboard/Appointments/BookAppointment/Search Doctors/SearchDoctors"));
const DoctorInfo = lazy(() => import("./Patient Dashboard/Appointments/BookAppointment/Search Doctors/DoctorInfo"));
const BookAppointment = lazy(() => import("./Patient Dashboard/Appointments/BookAppointment/Search Doctors/BookAppointment"));
const AppointmentSuccess = lazy(() => import("./Patient Dashboard/Appointments/BookAppointment/Search Doctors/AppointmentSuccess"));
// const PatientMessage = lazy(() => import("./Landing Page/Message/PatientMessage"));
const PatientMessage = lazy(() => import("./Patient Dashboard/Message/Chat"));
const PatientCalendar = lazy(() => import("./Patient Dashboard/Calendar/PatientCalendar"));
const PatientCalendarFilter = lazy(() => import("./Patient Dashboard/Calendar/PatientCalendarFilter"));
const PatientSettings = lazy(() => import("./Patient Dashboard/Settings/PatientSettings"));

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check the token expiration on initial render
    const role = getUserRole();
    if (role === null) {
        // Redirect to the appropriate login page based on the role
        const path = window.location.pathname;
        if (path.startsWith('/doctor')) {
            navigate("/login");
        } else if (path.startsWith('/patient')) {
            navigate("/auth");
        }
    }
}, [navigate]);

  return (
    <ThemeProvider>
      <ErrorBoundary>
        {/* <TutorialProvider> */}
          <Suspense
            fallback={
              <div
                id="preloader-active"
                className="fixed inset-0 z-50 flex items-center justify-center bg-white"
              >
                <div className="preloader flex items-center justify-center">
                  <div className="preloader-inner relative">
                    <div className="superballs flex space-x-2">
                      <div className="superballs__dot w-4 h-4 bg-[#22D1EE] rounded-full animate-bounce"></div>
                      <div
                        className="superballs__dot w-4 h-4 bg-[#22D1EE] rounded-full animate-bounce"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div className="superballs__dot w-4 h-4 bg-[#22D1EE] rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="user" element={<UserPage />} />
              <Route path="auth" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login2 />} />
              <Route path="register" element={<Signup2 />} />
              <Route path='login/forgot_password' element={<Doctor_Forget_Password />} />
              <Route path='/reset_password' element={<Doctor_Reset_Password />} />
              <Route path='auth/forgot_password' element={<Patient_Forget_Password />} />
              <Route path='/reset_your_password' element={<Patient_Reset_Password />} />
              <Route path="patient_verify_otp" element={<VerifyAccount />} />
              <Route path="doctor_verify_otp" element={<VerifyAccount2 />} />
              <Route path="terms&conditions" element={<Terms_Conditions />} />
              <Route path="privacy_policy" element={<Privacy_Policy />} />

              {/* DOCTOR ROUTE */}
              <Route element={<DoctorPrivateRoute />}>
                <Route path="verify2SV/:id" element={<Verify2SV />} />
                <Route path="/doctor_dashboard/:id" element={<DoctorDashboard />} />
                <Route path="/doctor_appointment/:id" element={<DoctorAppointment />} />
                <Route path="/doctor_message" element={<DoctorChat />} />
                <Route path="/doctor_pages" element={<DoctorPages />} />
                <Route path="/doctor_patient_page/:id" element={<DoctorPatientPages />} />
                <Route path="/view_doctor_profile/:id" element={<ViewDoctorProfile />} />
                <Route path="/doctor_profile/:id" element={<DoctorProfile />} />
                <Route path="/edit_doctor_profile/:id" element={<EditDoctorProfile />} />
                <Route path="/doctor_payment_way/:id" element={<DoctorPayment />} />
                <Route path="/doctor_payment/:id" element={<OnlineWithdrawal />} />
                <Route path="/payment_method" element={<PaymentMethod />} />
                <Route path="/doctor_settings/*" element={<DoctorSetting />} />
                <Route path="/verification_process" element={<Verification />} />
                <Route path="/congratulation" element={<Confetti />} />
              </Route>

              {/* PATIENT ROUTE */}
              <Route element={<PatientPrivateRoute />}>
                <Route path="verify2FA/:id" element={<Verify2FA />} />
                <Route path="/patient_dashboard/:id" element={<PatientDashboard />} />
                <Route path="/patient_appointment/*" element={<PatientAppointments />} />
                <Route path="/search_doctor" element={<SearchDoctors />} />
                <Route path="/doctorInfo/:id" element={<DoctorInfo />} />
                <Route path="/book_appointment/:id" element={<BookAppointment />} />
                <Route path='/appointment_success/:id' element={<AppointmentSuccess />} />
                <Route path="/patient_message" element={<PatientMessage />} />
                <Route path="/patient_calendar" element={<PatientCalendar />} />
                <Route path="/patient_calendar_filter" element={<PatientCalendarFilter />} />
                <Route path="/patient_settings/*" element={<PatientSettings />} />
              </Route>
            </Routes>
          </Suspense>
        {/* </TutorialProvider> */}
      </ErrorBoundary>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
