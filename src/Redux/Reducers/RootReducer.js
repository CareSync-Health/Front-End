import { combineReducers } from "redux";
import { patientAuthReducer } from "./PatientReducers";
import { doctorAuthReducer } from "./DoctorReducers";

const rootReducer = combineReducers({
    patientAuth: patientAuthReducer,
    doctorAuth: doctorAuthReducer
})
export {rootReducer}