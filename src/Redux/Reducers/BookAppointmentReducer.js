import * as types from "../Types";

const initialState = {
    loading: false,
    success: false,
    error: null,
};

export const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BOOK_APPOINTMENT_REQUEST:
            return { ...state, loading: true };
        case types.BOOK_APPOINTMENT_SUCCESS:
            return { ...state, loading: false, success: true };
        case types.BOOK_APPOINTMENT_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export const getAllAppointmentReducer = (state = [], action) => {
	switch (action.type) {
		case types.GET_ALL_APPOINTMENTS_REQUEST:
			return { ...state, loading: true, };
		case types.GET_ALL_APPOINTMENTS_SUCCESS:
			return { ...state, loading: false, appointments: action.payload, };
		case types.GET_ALL_APPOINTMENTS_FAIL:
			return { ...state, loading: false, error: action.error, };
		default:
			return state;
	}
};

export const getAllPatientAppointmentReducer = (state = [], action) => {
	switch (action.type) {
		case types.GET_ALL_PATIENT_APPOINTMENTS_REQUEST:
			return { ...state, loading: true, };
		case types.GET_ALL_PATIENT_APPOINTMENTS_SUCCESS:
			return { ...state, loading: false, appointments: action.payload, };
		case types.GET_ALL_PATIENT_APPOINTMENTS_FAIL:
			return { ...state, loading: false, error: action.error, };
		default:
			return state;
	}
};

export const getSingleAppointmentReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_APPOINTMENT_DETAILS_REQUEST:
			return { ...state, loading: true, };
		case types.GET_APPOINTMENT_DETAILS_SUCCESS:
			return { ...state, loading: false, appointment: action.payload, };
		case types.GET_APPOINTMENT_DETAILS_FAIL:
			return { ...state, loading: false, error: action.error, };
		default:
			return state;
	}
};

export const updateAppointmentStatusReducer = (state = {}, action) => {
	switch (action.type) {
		case types.UPDATE_APPOINTMENT_REQUEST:
			return { ...state, loading: true, };
		case types.UPDATE_APPOINTMENT_SUCCESS:
			return { ...state, loading: false,  appointments: action.payload };
		case types.UPDATE_APPOINTMENT_FAIL:
			return { ...state, loading: false, error: action.error, };
		default:
			return state;
	}
};