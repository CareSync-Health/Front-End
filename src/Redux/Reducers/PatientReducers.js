import * as types from "../Types"

export const patientAuthReducer = (state = {}, action) => {
	switch (action.type) {
		case types.PATIENT_AUTH_REQUEST:
		case types.PATIENT_SIGNIN_REQUEST:
		case types.FORGOT_PASSWORD_REQUEST:
			return { ...state, loading: true }
		case types.PATIENT_AUTH_SUCCESS:
		case types.PATIENT_SIGNIN_SUCCESS:
		case types.FORGOT_PASSWORD_SUCCESS:
			return { ...state, loading: false, patient: action.payload, message: action.message }
		case types.PATIENT_AUTH_FAIL:
		case types.PATIENT_SIGNIN_FAIL:
		case types.FORGOT_PASSWORD_FAIL:
			return { ...state, loading: false, error: action.payload, message: action.message }
		case types.PATIENT_AUTH_LOGOUT:
			return { ...state, patient: null }
		case types.CLEAR_ERRORS:
			return { ...state, error: null };
		default:
			return state
	}
}

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

export const appointmentReducer = (state = [], action) => {
	switch (action.type) {
		case types.FETCH_APPOINTMENTS_REQUEST:
			return { ...state, loading: true, };
		case types.FETCH_APPOINTMENTS_SUCCESS:
			return { ...state, loading: false, appointments: action.payload, };
		case types.FETCH_APPOINTMENTS_FAILURE:
			return { ...state, loading: false, error: action.error, };
		default:
			return state;
	}
};

// export const patientSigninReducer = (state = {}, action) => {
// 	switch (action.type) {
// 		case types.PATIENT_SIGNIN_REQUEST:
// 			return { ...state, loading: true, error: null }
// 		case types.PATIENT_SIGNIN_SUCCESS:
// 			return { ...state, loading: false, patient: action.payload, message: action.message }
// 		case types.PATIENT_SIGNIN_FAIL:
// 			return { ...state, loading: false, error: action.payload, message: action.message }
// 		case types.PATIENT_SIGNIN_LOGOUT:
// 			return { ...state, patient: null }
// 		case types.CLEAR_ERRORS:
//             return { ...state, error: null };
// 		default:
// 			return state
// 	}
// }