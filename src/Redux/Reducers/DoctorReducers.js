import { Turtle } from "lucide-react";
import * as types from "../Types";

export const doctorAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case types.DOCTOR_AUTH_REQUEST:
    case types.DOCTOR_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case types.DOCTOR_AUTH_SUCCESS:
    case types.DOCTOR_SIGNIN_SUCCESS:
      return { ...state, loading: false, doctor: action.payload, success: true, message: action.message };
    case types.DOCTOR_AUTH_FAIL:
    case types.DOCTOR_SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload, message: action.message};
    case types.DOCTOR_AUTH_LOGOUT:
      return { ...state, doctor: null};
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const doctorVerifyOtpReducer = (state = {}, action) => {
  switch (action.type) {
    case types.VERIFY_OTP_REQUEST:
      return { ...state, loading: true };
    case types.VERIFY_OTP_SUCCESS:
      return { ...state, loading: false, success: true, doctor: action.payload };
    case types.VERIFY_OTP_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const doctorVerificationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.DOCTOR_VERIFY_REQUEST:
      return { ...state, loading: true };
    case types.DOCTOR_VERIFY_SUCCESS: 
      return { ...state, loading: false, doctorVeri: action.payload };
    case types.DOCTOR_VERIFY_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}


// export const doctorSigninReducer = (state = {}, action) => {
//   switch (action.type) {
//     case types.DOCTOR_SIGNIN_REQUEST:
//       return { loading: true  };
//     case types.DOCTOR_SIGNIN_SUCCESS:
//       return { loading: false, doctor: action.payload, message: action.message };
//     case types.DOCTOR_SIGNIN_FAIL:
//       return { loading: false, error: action.payload, message: action.message };
//     case types.DOCTOR_SIGNIN_LOGOUT:
//       return { doctor: null };
//     case types.CLEAR_ERRORS:
//       return { error: null };
//     default:
//       return state;
//   }
// };

export const loadDoctorReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_DOCTOR_REQUEST:
      return { ...state, loading: true };
    case types.LOAD_DOCTOR_SUCCESS:
      return { ...state, loading: false, doctor: action.payload };
    case types.LOAD_DOCTOR_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const searchDoctorsReducer = (state = { doctors: [] }, action) => {
  switch (action.type) {
    case types.SEARCH_DOCTORS_REQUEST:
      return { ...state, loading: true };
    case types.SEARCH_DOCTORS_SUCCESS:
      return { ...state, loading: false, doctors: action.payload };
    case types.SEARCH_DOCTORS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const singleDoctorReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_DOCTOR_DETAILS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_DOCTOR_DETAILS_SUCCESS:
      return { ...state, loading: false, doctor: action.payload };
    case types.FETCH_DOCTOR_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};