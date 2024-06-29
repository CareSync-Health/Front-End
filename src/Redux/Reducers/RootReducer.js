import { combineReducers } from "redux";
import { patientAuthReducer, patientSigninReducer } from "./PatientReducers";
import { doctorAuthReducer, doctorSigninReducer } from "./DoctorReducers";

const rootReducer = combineReducers({
    patientAuth: patientAuthReducer,
    patientSignin: patientSigninReducer,
    doctorAuth: doctorAuthReducer,
    doctorSignin: doctorSigninReducer,
})

export {rootReducer}