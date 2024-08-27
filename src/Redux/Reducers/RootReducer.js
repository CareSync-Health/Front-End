import { combineReducers } from "redux";
import { patientAuthReducer, patientVerifyOtpReducer } from "./PatientReducers";
import { chatReducer, doctorAuthReducer, doctorForgetPasswordReducer, doctorVerificationReducer, doctorVerifyOtpReducer, getAllDoctorsReducer, loadDoctorReducer, searchContactsReducer, searchDoctorsReducer, updateDoctorReducer } from "./DoctorReducers";
import { appointmentReducer, getAllAppointmentReducer, getSingleAppointmentReducer, updateAppointmentStatusReducer } from "./BookAppointmentReducer";

const rootReducer = combineReducers({
    doctorAuth: doctorAuthReducer,
    doctorVerifyOtp: doctorVerifyOtpReducer,
    doctorForgetPassword: doctorForgetPasswordReducer,
    doctorVerification: doctorVerificationReducer,
    loadDoctor: loadDoctorReducer,
    searchDoctors: searchDoctorsReducer,
    getAllDoctors: getAllDoctorsReducer,
    updateDoctor: updateDoctorReducer,
    searchContacts: searchContactsReducer,
    createChat: chatReducer, 

    // PATIENT
    patientAuth: patientAuthReducer,
    patientVerifyOtp: patientVerifyOtpReducer,

    // APPOINTMENT
    appointment: appointmentReducer,
    appointments: getAllAppointmentReducer,
    SingleAppointment: getSingleAppointmentReducer,
    updateAppointmentStatus: updateAppointmentStatusReducer,
})

export {rootReducer}