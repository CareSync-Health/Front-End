import { combineReducers } from "redux";
import { patientAuthReducer, patientVerifyOtpReducer } from "./PatientReducers";
import { doctorAuthReducer, doctorVerifyOtpReducer, loadDoctorReducer, searchDoctorsReducer, singleDoctorReducer } from "./DoctorReducers";
import { fileReducer } from "./DoctorVerificationReducer";

const rootReducer = combineReducers({
    patientAuth: patientAuthReducer,
    patientVerifyOtp: patientVerifyOtpReducer,
    doctorAuth: doctorAuthReducer,
    doctorVerifyOtp: doctorVerifyOtpReducer,
    loadDoctor: loadDoctorReducer,
    searchDoctors: searchDoctorsReducer,
    singleDoctor: singleDoctorReducer,
})

export {rootReducer}