import * as types from "../Types"

export const doctorAuthReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_AUTH_REQUEST:
			return { loading: true }
		case types.ADMIN_AUTH_SUCCESS:
			return { loading: false, adminDetail: action.payload }
		case types.ADMIN_AUTH_FAIL:
			return { loading: false, error: action.payload }
		case types.ADMIN_AUTH_LOGOUT:
			return {}
		default:
			return state
	}
}