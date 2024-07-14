import { combineReducers } from "redux";
import { patientAuthReducer } from "./PatientReducers";
import { doctorAuthReducer, loadDoctorReducer, searchDoctorsReducer, singleDoctorReducer } from "./DoctorReducers";
import { fileReducer } from "./DoctorVerificationReducer";

const rootReducer = combineReducers({
    patientAuth: patientAuthReducer,
    doctorAuth: doctorAuthReducer,
    loadDoctor: loadDoctorReducer,
    searchDoctors: searchDoctorsReducer,
    singleDoctor: singleDoctorReducer,
    file: fileReducer,
})

export {rootReducer}