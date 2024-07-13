import * as types from "../Types";

const initialState = {
	doctor: null,
	loading: false,
	error: null,
  };

export const doctorAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DOCTOR_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case types.DOCTOR_SIGNIN_SUCCESS:
      return { ...state, loading: false, doctor: action.payload, message: action.message };
    case types.DOCTOR_SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload, message: action.message};
    case types.DOCTOR_SIGNIN_LOGOUT:
      return { ...state, doctor: null};
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};


export const doctorSigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DOCTOR_SIGNIN_REQUEST:
      return { ...state, loading: true  };
    case types.DOCTOR_SIGNIN_SUCCESS:
      return { ...state, loading: false, doctor: action.payload, message: action.message };
    case types.DOCTOR_SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload, message: action.message };
    case types.DOCTOR_SIGNIN_LOGOUT:
      return { ...state, doctor: null };
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

// export const loadDoctorReducer = (state = {}, action) => {
//   switch (action.type) {
//     case types.LOAD_DOCTOR_REQUEST:
//       return { loading: true };
//     case types.LOAD_DOCTOR_SUCCESS:
//       return { ...state, loading: false, doctor: action.payload };
//     case types.LOAD_DOCTOR_FAIL:
//       return { ...state, loading: false, error: action.payload };
//     case types.CLEAR_ERRORS:
//       return { ...state, error: null };
//     default:
//       return state;
//   }
// };
