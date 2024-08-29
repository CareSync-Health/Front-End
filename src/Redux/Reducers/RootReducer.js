import { combineReducers } from "redux";
import { getAllPatientsReducer, loadPatientReducer, patientAuthReducer, patientForgetPasswordReducer, patientVerifyOtpReducer, updatePatientReducer } from "./PatientReducers";
import { chatReducer, doctorAuthReducer, doctorForgetPasswordReducer, doctorVerificationReducer, doctorVerifyOtpReducer, getAllDoctorsReducer, loadDoctorReducer, searchContactsReducer, searchDoctorsReducer, updateDoctorReducer } from "./DoctorReducers";
import { appointmentReducer, getAllAppointmentReducer, getAllPatientAppointmentReducer, getSingleAppointmentReducer, updateAppointmentStatusReducer } from "./BookAppointmentReducer";

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

    // PATIENT
    patientAuth: patientAuthReducer,
    patientVerifyOtp: patientVerifyOtpReducer,
    patientForgetPassword: patientForgetPasswordReducer,
    loadPatient: loadPatientReducer,
    getAllPatients: getAllPatientsReducer,
    updatePatient: updatePatientReducer,

    // APPOINTMENT
    appointment: appointmentReducer,
    appointments: getAllAppointmentReducer,
    patientAppointments: getAllPatientAppointmentReducer,
    SingleAppointment: getSingleAppointmentReducer,
    updateAppointmentStatus: updateAppointmentStatusReducer,
})

export {rootReducer}