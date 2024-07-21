import { combineReducers } from "redux";
import { patientAuthReducer, patientSigninReducer, patientVerifyOtpReducer } from "./PatientReducers";
import { doctorAuthReducer, doctorSigninReducer, doctorVerifyOtpReducer, loadDoctorReducer, searchDoctorsReducer, singleDoctorReducer } from "./DoctorReducers";
import { fileReducer } from "./DoctorVerificationReducer";

const rootReducer = combineReducers({
    patientAuth: patientAuthReducer,
    patientSignin: patientSigninReducer,
    patientVerifyOtp: patientVerifyOtpReducer,
    doctorAuth: doctorAuthReducer,
    doctorVerifyOtp: doctorVerifyOtpReducer,
    doctorSignin: doctorSigninReducer,
    loadDoctor: loadDoctorReducer,
    searchDoctors: searchDoctorsReducer,
    singleDoctor: singleDoctorReducer,
})

export {rootReducer}