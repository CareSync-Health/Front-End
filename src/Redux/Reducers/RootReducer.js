import { combineReducers } from "redux";
import { getAllPatientsReducer, loadPatientDoctorReducer, loadPatientReducer, patientAuthReducer, patientForgetPasswordReducer, patientVerifyOtpReducer, updatePatientReducer } from "./PatientReducers";
import { chatReducer, doctorAuthReducer, doctorDebtReducer, doctorForgetPasswordReducer, doctorKYCStatusReducer, doctorVerificationReducer, doctorVerifyOtpReducer, getAllDoctorsReducer, getDoctorStatusReducer, getTotalEarningReducer, loadDoctorReducer, searchContactsReducer, searchDoctorsReducer, updateDoctorReducer } from "./DoctorReducers";
import { appointmentReducer, getAllAppointmentReducer, getAllPatientAppointmentReducer, getSingleAppointmentReducer, updateAppointmentStatusReducer } from "./BookAppointmentReducer";

const rootReducer = combineReducers({
    getDoctorStatus: getDoctorStatusReducer,
    doctorKYCStatus: doctorKYCStatusReducer,
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
    loadPatientDoctor: loadPatientDoctorReducer,
    getAllPatients: getAllPatientsReducer,
    updatePatient: updatePatientReducer,

    // APPOINTMENT
    appointment: appointmentReducer,
    appointments: getAllAppointmentReducer,
    patientAppointments: getAllPatientAppointmentReducer,
    SingleAppointment: getSingleAppointmentReducer,
    updateAppointmentStatus: updateAppointmentStatusReducer,
    getTotalEarnings: getTotalEarningReducer,
    doctorDebt: doctorDebtReducer,
})

export {rootReducer}