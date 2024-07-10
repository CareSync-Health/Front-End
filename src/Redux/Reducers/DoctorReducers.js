import * as types from "../Types"

export const doctorAuthReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DOCTOR_AUTH_REQUEST:
			return { loading: true }
		case types.DOCTOR_AUTH_SUCCESS:
			return { loading: false, doctorDetail: action.payload }
		case types.DOCTOR_AUTH_FAIL:
			return { loading: false, error: action.payload }
		case types.DOCTOR_AUTH_LOGOUT:
			return {}
		default:
			return state
	}
}

export const doctorSigninReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DOCTOR_SIGNIN_REQUEST:
			return { loading: true };
		case types.DOCTOR_SIGNIN_SUCCESS:
			return { loading: false, doctorDetail: action.payload, message: action.message };
		case types.DOCTOR_SIGNIN_FAIL:
			return { loading: false, error: action.payload, message: action.message };
		case types.DOCTOR_SIGNIN_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const loadDoctorReducer = (state = {}, action) => {
	switch (action.type) {
		case types.LOAD_DOCTOR_REQUEST:
			return {loading: true };
		case types.LOAD_DOCTOR_SUCCESS:
			return { loading: false, doctorDetail: action.payload, message: action.message };
		case types.LOAD_DOCTOR_FAIL:
			return { loading: false, error: action.payload, message: action.message };
		default:
			return state;
	}
}