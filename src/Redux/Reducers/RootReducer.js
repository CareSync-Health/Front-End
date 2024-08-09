import { combineReducers } from "redux";
import { appointmentReducer, patientAuthReducer, patientVerifyOtpReducer } from "./PatientReducers";
import { doctorAuthReducer, doctorVerificationReducer, doctorVerifyOtpReducer, getAllDoctorsReducer, loadDoctorReducer, searchDoctorsReducer } from "./DoctorReducers";

const rootReducer = combineReducers({
    doctorAuth: doctorAuthReducer,
    doctorVerifyOtp: doctorVerifyOtpReducer,
    doctorVerification: doctorVerificationReducer,
    loadDoctor: loadDoctorReducer,
    searchDoctors: searchDoctorsReducer,
    getAllDoctors: getAllDoctorsReducer,
    appointments: appointmentReducer,

    // PATIENT
    patientAuth: patientAuthReducer,
    patientVerifyOtp: patientVerifyOtpReducer,
})

export {rootReducer}