import * as types from "../Types";
import axios from "axios";
import toast from "react-hot-toast";
import { config } from "../Config";
import { authHeader, header } from "../Header";

const url = config.liveUrl;

export const bookAppointment = (appointmentData) => async (dispatch) => {
    try {
        dispatch({ type: types.BOOK_APPOINTMENT_REQUEST });

        // Retrieve token and configure header
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Make sure to add Bearer token
            }
        };

        // Correct API request
        const { data } = await axios.post(`${url}/appointment/create-appointment`, appointmentData, config);

        if (data.success) {
            dispatch({ type: types.BOOK_APPOINTMENT_SUCCESS, payload: data.data });
            toast.success(data.message, {
                position: 'top-right',
            });
        }
    } catch (error) {
        dispatch({ type: types.BOOK_APPOINTMENT_FAIL, payload: error.message || error });
        toast.error(error.message || 'An error occurred', {
            position: 'top-right',
        });
    }
};

// APPOINTMENT
export const getAllAppointments = (doctorId) => {
    return async (dispatch) => {
        dispatch({ type: types.GET_ALL_APPOINTMENTS_REQUEST });
        try {
            const { data } = await axios.get(`${url}/appointment/appointments/doctor/${doctorId}`, header);

            if (data.success) {
                dispatch({ type: types.GET_ALL_APPOINTMENTS_SUCCESS, payload: data.data });
            }
        } catch (error) {
            dispatch({ type: types.GET_ALL_APPOINTMENTS_FAIL, error });
        }
    };
};

export const getAppointmentDetails = (id) => {
    return async (dispatch) => {
        dispatch({ type: types.GET_APPOINTMENT_DETAILS_REQUEST });
        try {
            const { data } = await axios.get(`${url}/appointment/appointment/${id}`, header);
            if (data.success) {
                dispatch({ type: types.GET_APPOINTMENT_DETAILS_SUCCESS, payload: data.data });
            }
        } catch (error) {
            dispatch({ type: types.GET_APPOINTMENT_DETAILS_FAIL, error });
        }
    }
}


export const updateAppointmentStatus = (appointmentId, status) => async (dispatch) => {
    try {
        dispatch({ type: types.UPDATE_APPOINTMENT_REQUEST });
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Make sure to add Bearer token
            }
        };
        const { data } = await axios.put(`${url}/appointment/appointments/status`, { appointmentId, status }, config);
        if (data.success) {
            dispatch({ type: types.UPDATE_APPOINTMENT_SUCCESS, payload: data.data });
        }
    } catch (error) {
        dispatch({ type: types.UPDATE_APPOINTMENT_FAIL, error });    // Handle error appropriately
    }
};