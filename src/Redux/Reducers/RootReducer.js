import { combineReducers } from "redux";
import { patientAuthReducer, patientSigninReducer } from "./PatientReducers";
import { doctorAuthReducer, doctorSigninReducer, loadDoctorReducer } from "./DoctorReducers";
import { fileReducer } from "./DoctorVerificationReducer";

const rootReducer = combineReducers({
    patientAuth: patientAuthReducer,
    patientSignin: patientSigninReducer,
    doctorAuth: doctorAuthReducer,
    doctorSignin: doctorSigninReducer,
    loadUser: loadDoctorReducer,
    file: fileReducer,
})

export {rootReducer}