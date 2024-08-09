import * as types from "../Types";
import axios from "axios";
import toast from "react-hot-toast";
import { config } from "../Config";
import { authHeader, header } from "../Header";

const url = config.liveUrl;

export const doctor_register = (body, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.DOCTOR_AUTH_REQUEST });

		const { data } = await axios.post(`${url}/doctor/Signup`, body, header); // Assuming the endpoint is /doctor/register
		if (data) {
			dispatch({ type: types.DOCTOR_AUTH_SUCCESS, payload: data.data });
			toast.success(data.message, {
				position: 'top-right',
			});
			// Store email in local storage
			localStorage.setItem('doctorEmail', data.data.email);
			navigate('/doctor_verify_otp'); // Navigate to the OTP verification page
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
		toast.error(message);
		dispatch({ type: types.DOCTOR_AUTH_FAIL, payload: message });
	}
};

export const verify_otp = (otp, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.VERIFY_OTP_REQUEST });

		const { data } = await axios.post(`${url}/doctor/Verifyotp`, { otp }, header); // Assuming the endpoint is /doctor/verify-otp
		if (data) {
			dispatch({ type: types.VERIFY_OTP_SUCCESS, payload: data.data });
			toast.success(data.message, {
				position: 'top-right',
			});
			navigate('/verification_process'); // Navigate to the dashboard page
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

		const { data } = await axios.post(`${url}/doctor/resend-otp`, { email }, header);
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

export const doctor_verification = (id, navigate, dataToSend) => async (dispatch) => {
	try {
		dispatch({ type: types.DOCTOR_VERIFY_REQUEST });

		const { data } = await axios.post(`${url}/doctor/verifydoctor/${id}`, dataToSend, { headers: header });
		if (data.status === 'ok') {
			dispatch({ type: types.DOCTOR_VERIFY_SUCCESS, payload: data.data });
			toast.success(data.message, {
				position: 'top-right',
			});
			navigate('/congratulation');
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
		toast.error(message);
		dispatch({ type: types.DOCTOR_VERIFY_FAIL, payload: message });
	}
}

export const doctor_login = (body, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.DOCTOR_SIGNIN_REQUEST });

		const { data } = await axios.post(`${url}/doctor/Signin`, body, header);
		if (data.status === 'Ok') {
			dispatch({ type: types.DOCTOR_SIGNIN_SUCCESS, payload: data.data });
			toast.success(data.message, {
				position: 'top-right',
			});
			// Store email in local storage
			localStorage.setItem('doctorEmail', data.data.email);
			navigate('/doctor_dashboard');
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
		const email = localStorage.getItem('doctorEmail');

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

export const reset_password = (resetToken, newPassword, navigate) => async (dispatch) => {
    try {
        dispatch({ type: types.RESET_PASSWORD_REQUEST });

        // Make an API call to reset the password
        const { data } = await axios.post(`${url}/doctor/reset-password`, { resetToken, newPassword }, header);

        if (data.status === 'Ok') {
            dispatch({ type: types.RESET_PASSWORD_SUCCESS });
            toast.success(data.message, {
                position: 'top-right',
            });
            navigate('/login'); // Redirect to login or another appropriate page
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
        toast.error(message);
        dispatch({ type: types.RESET_PASSWORD_FAIL, payload: message });
    }
};


export const doctor_logout = (navigate) => (dispatch) => {
	dispatch({ type: types.DOCTOR_SIGNIN_LOGOUT });
	dispatch({ type: types.DOCTOR_AUTH_LOGOUT });

	// Clear stored email on logout
	localStorage.removeItem('doctorEmail');
	toast.success("Logged out successfully");
	navigate('/doctorAuth');
};

// Load Doctor
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

// Search Doctors
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

// Action Creator
// export const fetchDoctorDetails = (id) => async (dispatch) => {
// 	dispatch({ type: types.FETCH_DOCTOR_DETAILS_REQUEST });
// 	try {
// 		const response = await axios.get(`${url}/doctor/${id}`); // Replace with your API endpoint
// 		dispatch({ type: types.FETCH_DOCTOR_DETAILS_SUCCESS, payload: response.data });
// 	} catch (error) {
// 		dispatch({ type: types.FETCH_DOCTOR_DETAILS_FAIL, payload: error.message });
// 	}
// };