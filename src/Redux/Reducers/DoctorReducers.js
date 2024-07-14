import * as types from "../Types";

export const doctorAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case types.DOCTOR_AUTH_REQUEST:
    case types.DOCTOR_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case types.DOCTOR_AUTH_SUCCESS:
    case types.DOCTOR_SIGNIN_SUCCESS:
      return { ...state, loading: false, doctor: action.payload, message: action.message };
    case types.DOCTOR_AUTH_FAIL:
    case types.DOCTOR_SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload, message: action.message};
    case types.DOCTOR_AUTH_LOGOUT:
    case types.DOCTOR_SIGNIN_LOGOUT:
      return { ...state, doctor: null};
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};


// export const doctorSigninReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.DOCTOR_SIGNIN_REQUEST:
//       return { ...state, loading: true  };
//     case types.DOCTOR_SIGNIN_SUCCESS:
//       return { ...state, loading: false, doctor: action.payload, message: action.message };
//     case types.DOCTOR_SIGNIN_FAIL:
//       return { ...state, loading: false, error: action.payload, message: action.message };
//     case types.DOCTOR_SIGNIN_LOGOUT:
//       return { ...state, doctor: null };
//     case types.CLEAR_ERRORS:
//       return { ...state, error: null };
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
