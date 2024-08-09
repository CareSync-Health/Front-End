import * as types from "../Types";
import axios from "axios";
import toast from "react-hot-toast";
import { config } from "../Config";
import { authHeader, header } from "../Header";
import { data } from "autoprefixer";

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
			navigate('/doctor_verify_otp'); // Navigate to the OTP verification page
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.DOCTOR_AUTH_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
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
			// Store email in local storage
			localStorage.setItem('doctorEmail', data.data.email);
			navigate('/verification_process'); // Navigate to the dashboard page
		} else {
			throw new Error(data.error);
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

		const { data } = await axios.post(`${url}/doctor/resend-otp`, { email }, header);
		if (data) {
			dispatch({ type: types.RESEND_OTP_SUCCESS });
			toast.success(data.message, {
				position: 'top-right',
			});
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.RESEND_OTP_FAIL, payload: error.message || error  });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
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
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.DOCTOR_VERIFY_FAIL, payload: error.message || error  });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
}

export const doctor_login = (body, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.DOCTOR_SIGNIN_REQUEST });

		const { data } = await axios.post(`${url}/doctor/Signin`, body, header);
		if (data.status === 'Ok') {
			dispatch({ type: types.DOCTOR_SIGNIN_SUCCESS, payload: data.data, token: data.data.token });
			toast.success(data.message, {
				position: 'top-right',
			});
			// Store email in local storage
			localStorage.setItem('doctorEmail', data.data.email, 'token', data.data.token);
			navigate('/doctor_dashboard');
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.DOCTOR_SIGNIN_FAIL, payload: error.message || error  });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
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

		const { data } = await axios.post(`${url}/doctor/request-password-reset`, { email }, header);

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

// export const resetPassword = ( token, id, newPassword) => async (dispatch) => {
// 	try {
// 	  dispatch({ type: types.RESET_PASSWORD_REQUEST });
  
// 	  const { data } = await axios.post(`${url}/doctor/reset-password`, { token, id, newPassword }, header);
// 		console.log(token, id, newPassword)
// 	  if (data.success) {
// 		dispatch({ type: types.RESET_PASSWORD_SUCCESS, payload: data });
// 		toast.success(data.message, {
// 			position: 'top-right',
// 		});
// 	} else {
// 		throw new Error(data.error);
// 	}
// 	} catch (error) {
// 		dispatch({ type: types.RESET_PASSWORD_FAIL, payload: error.message || error });
// 		toast.error(error.message || 'An error occurred', {
// 			position: 'top-right',
// 		});
//   	}
//   };

export const resetPassword = (token, newPassword) => async (dispatch) => {
    try {
        dispatch({ type: types.RESET_PASSWORD_REQUEST })

        const { data } = await axios.put(`${url}/doctor/reset-password${token}`, newPassword, header)

        dispatch({ 
            type: types.RESET_PASSWORD_SUCCESS,
            payload: data.success,
         })

    } catch (error) {
        dispatch({
            type: types.RESET_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

  

export const loadDoctor = (id) => async (dispatch) => {
	try {

		dispatch({ type: types.LOAD_DOCTOR_REQUEST });

		const { data } = await axios.get(`${url}/doctor/${id}`, header);

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

export const searchDoctors = (query) => async (dispatch) => {
	try {
		dispatch({ type: types.SEARCH_DOCTORS_REQUEST });
		
		const { data } = await axios.get(`${url}/doctor/search?query=${query}`, header);

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

export const getAllDoctors = (body) => async (dispatch) => {
	try {
		dispatch({ type: types.GET_ALL_DOCTORS_REQUEST });

		const { data } = await axios.get(`${url}/doctor/`, body, header)
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

export const updateDoctorProfile = (id, profileData) => async (dispatch) => {
	try {
		dispatch({ type: types.UPDATE_DOCTOR_PROFILE_REQUEST });

		const { data } = await axios.put(`${url}/doctor/update/${id}`, profileData, header);

		if (data.status === 'Ok') {
			dispatch({ type: types.UPDATE_DOCTOR_PROFILE_SUCCESS, payload: data.data });
			toast.success(data.message, {
				position: 'top-right',
			});
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.UPDATE_DOCTOR_PROFILE_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
};

export const doctor_logout = (navigate) => (dispatch) => {
	dispatch({ type: types.DOCTOR_SIGNIN_LOGOUT });
	dispatch({ type: types.DOCTOR_AUTH_LOGOUT });

	// Clear stored email on logout
	// localStorage.removeItem('doctorEmail');
	localStorage.removeItem('token');
	toast.success("Logged out successfully");
	navigate('/login');
};