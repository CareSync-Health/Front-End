import { combineReducers } from "redux";
import { appointmentReducer, patientAuthReducer, patientVerifyOtpReducer } from "./PatientReducers";
import { chatReducer, doctorAuthReducer, doctorForgetPasswordReducer, doctorVerificationReducer, doctorVerifyOtpReducer, getAllDoctorsReducer, loadDoctorReducer, searchContactsReducer, searchDoctorsReducer, updateDoctorReducer } from "./DoctorReducers";

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
    appointments: appointmentReducer,

    // PATIENT
    patientAuth: patientAuthReducer,
    patientVerifyOtp: patientVerifyOtpReducer,
})

export {rootReducer}