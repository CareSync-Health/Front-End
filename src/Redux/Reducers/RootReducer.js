import { combineReducers } from "redux";
import { appointmentReducer, patientAuthReducer, patientVerifyOtpReducer } from "./PatientReducers";
import { doctorAuthReducer, doctorVerificationReducer, doctorVerifyOtpReducer, loadDoctorReducer, searchDoctorsReducer, singleDoctorReducer } from "./DoctorReducers";

const rootReducer = combineReducers({
    patientAuth: patientAuthReducer,
    patientVerifyOtp: patientVerifyOtpReducer,
    doctorAuth: doctorAuthReducer,
    doctorVerifyOtp: doctorVerifyOtpReducer,
    doctorVerification: doctorVerificationReducer,
    loadDoctor: loadDoctorReducer,
    searchDoctors: searchDoctorsReducer,
    singleDoctor: singleDoctorReducer,
    appointments: appointmentReducer,
})

export {rootReducer}