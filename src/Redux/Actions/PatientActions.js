import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { header } from "../Header"

const url = config.liveUrl

export const patient_register = (body, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.PATIENT_AUTH_REQUEST })

		const { data } = await axios.post(`${url}/patient/Signup`, body, header)
		if (data) {
			dispatch({ type: types.PATIENT_AUTH_SUCCESS, payload: data.data })
			toast.success(data.message, {
				position: 'top-right',
			})
			// Store email in local storage
			localStorage.setItem('patientEmail', data.data.email);
			navigate('/patient_verify_otp');
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
		toast.error(message, {
			position: 'top-right',
		});
		dispatch({ type: types.PATIENT_AUTH_FAIL, payload: message });
	}
};

export const verify_otp = (otp, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.VERIFY_OTP_REQUEST });

		const { data } = await axios.post(`${url}/patient/Verifyotp`, { otp }, header);
		if (data) {
			dispatch({ type: types.VERIFY_OTP_SUCCESS, payload: data.data });
			toast.success(data.message, {
				position: 'top-right',
			});
			console.log('VerifyOtp Data', data)
			navigate('/patient_dashboard'); // Navigate to the dashboard page
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
		toast.error(message, {
			position: 'top-right',
		});
		dispatch({ type: types.VERIFY_OTP_FAIL, payload: message });
	}
};

export const resend_otp = (email) => async (dispatch) => {
	try {
		dispatch({ type: types.RESEND_OTP_REQUEST });

		const { data } = await axios.post(`${url}/patient/resend-otp`, { email }, header);
		if (data) {
			dispatch({ type: types.RESEND_OTP_SUCCESS });
			toast.success(data.message, {
				position: 'top-right',
			});
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
		toast.error(message, {
			position: 'top-right',
		});
		dispatch({ type: types.RESEND_OTP_FAIL, payload: message });
	}
};

export const patient_login = (body, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.PATIENT_SIGNIN_REQUEST });

		const { data } = await axios.post(`${url}/patient/Signin`, body, header);
		if (data.status === 'Ok') {
			dispatch({ type: types.PATIENT_SIGNIN_SUCCESS, payload: data.data });
			toast.success(data.message, {
				position: 'top-right',
			});
			// Store email in local storage
			localStorage.setItem('patientEmail', data.data.email);
			navigate('/patient_dashboard');
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
		toast.error(message);
		dispatch({ type: types.DOCTOR_SIGNIN_FAIL, payload: message });
	}
};

export const forgot_password = (navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.FORGOT_PASSWORD_REQUEST });

		// Retrieve email from local storage
		const email = localStorage.getItem('patientEmail');

		if (!email) {
			navigate('/register');
			throw new Error("Email not found. Please signup first.");
		}

		const { data } = await axios.post(`${url}/doctor/forgot-password`, { email }, header);

		if (data.status === 'Ok') {
			dispatch({ type: types.FORGOT_PASSWORD_SUCCESS });
			toast.success(data.message, {
				position: 'top-right',
			});
			navigate('/reset_password');
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
		toast.error(message);
		dispatch({ type: types.FORGOT_PASSWORD_FAIL, payload: message });
	}
};

export const patient_logout = (navigate) => (dispatch) => {
	dispatch({ type: types.PATIENT_SIGNIN_LOGOUT });
	dispatch({ type: types.PATIENT_AUTH_LOGOUT });
	toast.success("Logged out successfully");
	navigate('/patientAuth');
};

export const loadDoctor = (id) => async (dispatch) => {
	try {

		dispatch({ type: types.LOAD_DOCTOR_REQUEST });

		const { data } = await axios.get(`${url}/doctor/${id}`, header);

		if (data.status === 'OK') {
			dispatch({ type: types.LOAD_DOCTOR_SUCCESS, payload: data.data });
			return data.data;
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		dispatch({ type: types.LOAD_DOCTOR_FAIL, payload: error.response ? error.response.data.message : error.message });
	}
};

export const searchDoctors = (query) => async (dispatch) => {
	try {
		dispatch({ type: types.SEARCH_DOCTORS_REQUEST });

		const { data } = await axios.get(`${url}/doctor/search?query=${query}`, header);

		if (data.success) {
			dispatch({ type: types.SEARCH_DOCTORS_SUCCESS, payload: data.doctors });
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
		dispatch({ type: types.SEARCH_DOCTORS_FAIL, payload: message });
	}
};

export const getAllDoctors = (body) => async (dispatch) => {
	try {
		dispatch({ type: types.GET_ALL_DOCTORS_REQUEST });

		const { data } = await axios.get(`${url}/doctor/`, body, header)
		if (data.status === 'OK') {
			dispatch({ type: types.GET_ALL_DOCTORS_SUCCESS, payload: data.data });
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
		dispatch({ type: types.GET_ALL_DOCTORS_FAIL, payload: message });
	}
}


// APPOINTMENT
export const fetchAppointments = () => {
	return async (dispatch) => {
		dispatch({ type: types.FETCH_APPOINTMENTS_REQUEST });
		try {
			const response = await fetch(`${url}/appointments`);
			const data = await response.json();
			dispatch({ type: types.FETCH_APPOINTMENTS_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: types.FETCH_APPOINTMENTS_FAILURE, error });
		}
	};
};