import * as types from "../Types"

export const patientAuthReducer = (state = {}, action) => {
	switch (action.type) {
		case types.PATIENT_AUTH_REQUEST:
		case types.PATIENT_SIGNIN_REQUEST:
		case types.VERIFY_2FA_REQUEST:
			return { ...state, loading: true }
		case types.PATIENT_AUTH_SUCCESS:
		case types.PATIENT_SIGNIN_SUCCESS:
		case types.VERIFY_2FA_SUCCESS:
			return { ...state, loading: false, patient: action.payload, success: true, message: action.message }
		case types.PATIENT_AUTH_FAIL:
		case types.PATIENT_SIGNIN_FAIL:
		case types.VERIFY_2FA_FAIL:
			return { ...state, loading: false, error: action.payload, message: action.message }
		case types.PATIENT_AUTH_LOGOUT:
			return { ...state, patient: null }
		case types.CLEAR_ERRORS:
			return { ...state, error: null };
		default:
			return state
	}
}

export const patientForgetPasswordReducer = (state = {}, action) => {
	switch (action.type) {
	  case types.RESET_PASSWORD_REQUEST:
	  case types.FORGOT_PASSWORD_REQUEST:
		return { ...state, loading: true, success: false, error: null };
	  case types.RESET_PASSWORD_SUCCESS:
	  case types.FORGOT_PASSWORD_SUCCESS:
		return { ...state, loading: false, success: true, error: null };
	  case types.RESET_PASSWORD_FAIL:
	  case types.FORGOT_PASSWORD_FAIL:
		return { ...state, loading: false, success: false, error: action.payload };
	  default:
		return state;
	}
  };

export const patientVerifyOtpReducer = (state = {}, action) => {
	switch (action.type) {
		case types.VERIFY_OTP_REQUEST:
			return { ...state, loading: true };
		case types.VERIFY_OTP_SUCCESS:
			return { ...state, loading: false, success: true, patient: action.payload };
		case types.VERIFY_OTP_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export const getAllPatientsReducer = (state = { patients: [] }, action) => {
	switch (action.type) {
	  case types.GET_ALL_PATIENTS_REQUEST:
		return { ...state, loading: true };
	  case types.GET_ALL_PATIENTS_SUCCESS:
		return { ...state, loading: false, patients: action.payload };
	  case types.GET_ALL_PATIENTS_FAIL:
		return { ...state, loading: false, error: action.payload };
	  case types.CLEAR_ERRORS:
		return { ...state, error: null };
	  default:
		return state;
	}
  }
  
  export const loadPatientReducer = (state = {}, action) => {
	switch (action.type) {
	  case types.LOAD_PATIENT_REQUEST:
		return { ...state, loading: true };
	  case types.LOAD_PATIENT_SUCCESS:
		return { ...state, loading: false, patient: action.payload };
	  case types.LOAD_PATIENT_FAIL:
		return { ...state, loading: false, error: action.payload };
	  case types.CLEAR_ERRORS:
		return { ...state, error: null };
	  default:
		return state;
	}
  };
  
  export const updatePatientReducer = (state = {}, action) => {
	switch (action.type) {
	  case types.UPDATE_PATIENT_PROFILE_REQUEST:
		return { ...state, loading: true };
	  case types.UPDATE_PATIENT_PROFILE_SUCCESS:
		return { ...state, loading: false, updatedPatient: action.payload, success: true, message: action.message };
	  case types.UPDATE_PATIENT_PROFILE_FAIL:
		return { ...state, loading: false, error: action.payload, message: action.message };
	  case types.CLEAR_ERRORS:
		return { ...state, error: null };
	  default:
		return state;
	}
  }