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