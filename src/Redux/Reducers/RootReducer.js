import { combineReducers } from "redux";
import { patientAuthReducer } from "./PatientReducers";
import { doctorAuthReducer, loadDoctorReducer } from "./DoctorReducers";
import { fileReducer } from "./DoctorVerificationReducer";

const rootReducer = combineReducers({
    patientAuth: patientAuthReducer,
    doctorAuth: doctorAuthReducer,
    loadDoctor: loadDoctorReducer,
    file: fileReducer,
})

export {rootReducer}