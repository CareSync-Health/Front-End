import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { authHeader, header } from "../Header"
import { jwtDecode } from "jwt-decode"

const url = config.liveUrl

export const getUserRole = () => {
    const token = localStorage.getItem("token");
	if (token) {
		try {
			const decoded = jwtDecode(token);
			const now = Date.now() / 1000; // Current time in seconds
			if (decoded.exp < now) {
				// Token is expired
				localStorage.removeItem("token"); // Clear the expired token
				return null; // Return null if the token is expired
			}
			return decoded.role;
		} catch (error) {
			// Token is invalid or decoding failed
			localStorage.removeItem("token"); // Clear invalid token
			return null;
		}
	}
	return null;
};

export const getPatientStatus = (patientId) => async (dispatch) => {
	try {
		dispatch({ type: types.GET_PATIENT_STATUS_REQUEST });
		const { data } = await axios.get(`${url}/patient/status?patientId=${patientId}`, {
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
			},
		});

		if (data) {
			dispatch({ type: types.GET_PATIENT_STATUS_SUCCESS, payload: data.status });
		} else {
			dispatch({ type: types.GET_PATIENT_STATUS_FAIL, payload: data.message });
		}
	} catch (error) {
		dispatch({ type: types.GET_PATIENT_STATUS_FAIL, payload: error.message });
	}
};

export const patient_register = (body, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.PATIENT_AUTH_REQUEST })

		const { data } = await axios.post(`${url}/patient/Signup`, body, header)
		if (data) {
			dispatch({ type: types.PATIENT_AUTH_SUCCESS, payload: data.data })
			toast.success(data.message, {
				position: 'top-right',
			})
			navigate('/patient_verify_otp');
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		dispatch({ type: types.PATIENT_AUTH_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
};

export const verify_otp = (otp, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.VERIFY_OTP_REQUEST });

		const { data } = await axios.post(`${url}/patient/Verifyotp`, { otp }, header);
		if (data.success) {
			dispatch({ type: types.VERIFY_OTP_SUCCESS, payload: data.data });
			localStorage.setItem('token', data.data.token);
			toast.success(data.message, {
				position: 'top-right',
			});
			navigate('/patient_dashboard'); // Navigate to the dashboard page
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		dispatch({ type: types.VERIFY_OTP_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
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
		dispatch({ type: types.RESEND_OTP_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
};

export const patient_login = (body, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.PATIENT_SIGNIN_REQUEST });

		const { data } = await axios.post(`${url}/patient/Signin`, body, header);
		localStorage.setItem('token', data.token);

		// Check if 2SV is required
		if (data.requires2SV) {
			navigate(`/verify2FA/${data.data._id}`);
			return;
		}

		dispatch({ type: types.PATIENT_SIGNIN_SUCCESS, payload: data.data });
		navigate(`/patient_dashboard/${data.data._id}`)
	} catch (error) {
		dispatch({ type: types.PATIENT_SIGNIN_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
		// Return a default value or throw error to handle it in the component
		return { requires2SV: false };
	};
};

export const verify2FA = (otp, id) => async (dispatch) => {
	try {
		dispatch({ type: types.VERIFY_2FA_REQUEST });
		const response = await fetch(`${url}/patient/verify2FA/${id}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ otp }),
		});
		const data = await response.json();

		if (!response.ok || !data.success) { // Check for success in response
			dispatch({ type: types.VERIFY_2FA_FAIL, payload: data.error || 'Verification failed' });
			return { error: data.error || 'Verification failed' };
		}

		dispatch({ type: types.VERIFY_2FA_SUCCESS, payload: data });
		return { success: true };
	} catch (error) {
		dispatch({ type: types.VERIFY_2FA_FAIL, payload: error.message || error });
		return { error: error.message || 'An unexpected error occurred' };
	}
};

export const enable2SV = (id) => async (dispatch) => {
	try {
		const response = await fetch(`${url}/patient/enable2SV/${id}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({}),
		});
		const result = await response.json();
		return result; // Return the QR code URL
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const disable2SV = (id) => async (dispatch) => {
	try {
		await fetch(`${url}/patient/disable2SV/${id}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({}),
		});
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const forgot_password = (email, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.FORGOT_PASSWORD_REQUEST });

		const { data } = await axios.post(`${url}/patient/request-password-reset`, email);

		if (data.success) {
			dispatch({ type: types.FORGOT_PASSWORD_SUCCESS });
			toast.success(data.message, {
				position: 'top-right',
			});
			// navigate('/reset_password');
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.FORGOT_PASSWORD_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
};

export const resetPassword = (body, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.RESET_PASSWORD_REQUEST });

		const { data } = await axios.post(`${url}/patient/reset-password`, body);
		if (data.success) {
			dispatch({ type: types.RESET_PASSWORD_SUCCESS });
			toast.success(data.message, {
				position: 'top-right',
			});
			navigate('/auth');
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		console.log(error)
		dispatch({ type: types.RESET_PASSWORD_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
};

export const loadPatient = () => async (dispatch) => {
	try {
		dispatch({ type: types.LOAD_PATIENT_REQUEST });

		// Assuming you have a way to get current user details or token
		const { data } = await axios.get(`${url}/patient/profile`, {
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Adjust as needed
			},
		});

		if (data.status === 'OK') {
			dispatch({ type: types.LOAD_PATIENT_SUCCESS, payload: data.data });
			return data.data;
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		dispatch({ type: types.LOAD_PATIENT_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
};

export const loadDoctor = (id) => async (dispatch) => {
	try {
		dispatch({ type: types.LOAD_DOCTOR_REQUEST });

		const { data } = await axios.get(`${url}/patient/doctorProfile/${id}`);

		if (data.status === 'OK') {
			dispatch({ type: types.LOAD_DOCTOR_SUCCESS, payload: data.data });
			return data.data;
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.LOAD_DOCTOR_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
};

export const getAllDoctors = () => async (dispatch) => {
	try {
		dispatch({ type: types.GET_ALL_DOCTORS_REQUEST });

		const { data } = await axios.get(`${url}/doctor/`, { headers: header })
		if (data.status === 'OK') {
			dispatch({ type: types.GET_ALL_DOCTORS_SUCCESS, payload: data.data });
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.GET_ALL_DOCTORS_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
}

export const searchDoctors = (body) => async (dispatch) => {
	try {
		dispatch({ type: types.SEARCH_DOCTORS_REQUEST });

		const { data } = await axios.get(`${url}/doctor/search`, body, header);

		if (data.success) {
			dispatch({ type: types.SEARCH_DOCTORS_SUCCESS, payload: data.doctors });
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.SEARCH_DOCTORS_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
};

export const getAllPatients = (body) => async (dispatch) => {
	try {
		dispatch({ type: types.GET_ALL_PATIENTS_REQUEST });

		const { data } = await axios.get(`${url}/patient/`, body, header)
		if (data.status === 'OK') {
			dispatch({ type: types.GET_ALL_PATIENTS_SUCCESS, payload: data.data });
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.GET_ALL_PATIENTS_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
}

export const updatePatientProfile = (id, body) => async (dispatch) => {
	try {
		dispatch({ type: types.UPDATE_PATIENT_PROFILE_REQUEST });

		// Retrieve token and configure header
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`, // Make sure to add Bearer token
			}
		};

		const { data } = await axios.put(`${url}/patient/${id}`, body, config);

		if (data.status === 'OK') {
			dispatch({ type: types.UPDATE_PATIENT_PROFILE_SUCCESS, payload: data.data });
			toast.success(data.message, {
				position: 'top-right',
			});
			// return { success: true };
		} else {
			throw new Error(data.message || data.error);
		}
	} catch (error) {
		dispatch({ type: types.UPDATE_PATIENT_PROFILE_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
		  position: 'top-right',
		});
		// return { success: false, message: error.message || 'An error occurred' };
	}
};

export const patient_logout = (navigate) => (dispatch) => {
	dispatch({ type: types.PATIENT_SIGNIN_LOGOUT });
	dispatch({ type: types.PATIENT_AUTH_LOGOUT });

	// Clear stored email on logout
	localStorage.removeItem('token');
	toast.success("Logged out successfully");
	navigate('/auth');
};