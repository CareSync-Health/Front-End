import * as types from "../Types"

export const patientAuthReducer = (state = {}, action) => {
	switch (action.type) {
		case types.PATIENT_AUTH_REQUEST:
			return { loading: true }
		case types.PATIENT_AUTH_SUCCESS:
			return { loading: false, patientDetail: action.payload }
		case types.PATIENT_AUTH_FAIL:
			return { loading: false, error: action.payload }
		case types.PATIENT_AUTH_LOGOUT:
			return {}
		default:
			return state
	}
}