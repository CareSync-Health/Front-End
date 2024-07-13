import * as types from "../Types"

const initialState = {
	patient: null,
	loading: false,
	error: null,
  };

export const patientAuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.PATIENT_AUTH_REQUEST:
			return { ...state, loading: true, error: null}
		case types.PATIENT_AUTH_SUCCESS:
			return { ...state, loading: false, patient: action.payload }
		case types.PATIENT_AUTH_FAIL:
			return { ...state, loading: false, error: action.payload }
		case types.PATIENT_AUTH_LOGOUT:
			return { ...state, patient: null }
		default:
			return state
	}
}

export const patientSigninReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.PATIENT_SIGNIN_REQUEST:
			return { ...state, loading: true, error: null }
		case types.PATIENT_SIGNIN_SUCCESS:
			return { ...state, loading: false, patient: action.payload }
		case types.PATIENT_SIGNIN_FAIL:
			return { ...state, loading: false, error: action.payload }
		case types.PATIENT_SIGNIN_LOGOUT:
			return { ...state, patient: null}
		default:
			return state
	}
}
