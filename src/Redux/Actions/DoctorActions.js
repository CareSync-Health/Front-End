import * as types from "../Types";
import axios from "axios";
import toast from "react-hot-toast";
import { config } from "../Config";
import { authHeader, header } from "../Header";
import { jwtDecode } from "jwt-decode";

const url = config.liveUrl;


export const getUserRole = () => {
    const token = localStorage.getItem("token"); // or wherever you store your JWT
    if (token) {
        const decoded = jwtDecode(token);
        return decoded.role; // return role from token
    }
    return null;
};

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
			localStorage.setItem('token', data.data.token);
			toast.success(data.message, {
				position: 'top-right',
			});
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
		dispatch({ type: types.RESEND_OTP_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
};

export const doctor_verification = (id, navigate, body) => async (dispatch) => {
	try {
		dispatch({ type: types.DOCTOR_VERIFY_REQUEST });

		const { data } = await axios.post(`${url}/doctor/verifydoctor/${id}`, body, { headers: header });
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
		dispatch({ type: types.DOCTOR_VERIFY_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
	}
}

export const doctor_login = (body, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.DOCTOR_SIGNIN_REQUEST });

		const { data } = await axios.post(`${url}/doctor/Signin`, body, header);
		localStorage.setItem('token', data.token);

		// Check if 2SV is required
		if (data.requires2SV) {
			navigate(`/verify2SV/${data.data._id}`);
			return;
		}

		dispatch({ type: types.DOCTOR_SIGNIN_SUCCESS, payload: data.data });
		navigate(`/doctor_dashboard/${data.data._id}`)
	} catch (error) {
		dispatch({ type: types.DOCTOR_SIGNIN_FAIL, payload: error.message || error });
		toast.error(error.message || 'An error occurred', {
			position: 'top-right',
		});
		// Return a default value or throw error to handle it in the component
		return { requires2SV: false };
	}
};

export const verify2SV = (otp, id) => async (dispatch) => {
	try {
		dispatch({ type: types.VERIFY_2SV_REQUEST });
		const response = await fetch(`${url}/doctor/verify2SV/${id}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ otp }),
		});
		const data = await response.json();

		if (!response.ok || !data.success) { // Check for success in response
			dispatch({ type: types.VERIFY_2SV_FAIL, payload: data.error || 'Verification failed' });
			return { error: data.error || 'Verification failed' };
		}

		dispatch({ type: types.VERIFY_2SV_SUCCESS, payload: data });
		return { success: true };
	} catch (error) {
		dispatch({ type: types.VERIFY_2SV_FAIL, payload: error.message || error });
		return { error: error.message || 'An unexpected error occurred' };
	}
};

export const enable2SV = (id) => async (dispatch) => {
	try {
		const response = await fetch(`${url}/doctor/enable2SV/${id}`, {
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
		await fetch(`${url}/doctor/disable2SV/${id}`, {
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

		const { data } = await axios.post(`${url}/doctor/request-password-reset`, email, header);

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

		const { data } = await axios.post(`${url}/doctor/reset-password`, body);
		if (data.success) {
			dispatch({ type: types.RESET_PASSWORD_SUCCESS });
			toast.success(data.message, {
				position: 'top-right',
			});
			navigate('/login');
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

export const loadDoctor = () => async (dispatch) => {
	try {
		dispatch({ type: types.LOAD_DOCTOR_REQUEST });

		// Assuming you have a way to get current user details or token
		const { data } = await axios.get(`${url}/doctor/profile`, {
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Adjust as needed
			},
		});

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

export const updateDoctorProfile = (id, body) => async (dispatch) => {
	try {
		dispatch({ type: types.UPDATE_DOCTOR_PROFILE_REQUEST });

		const { data } = await axios.put(`${url}/doctor/${id}`, body, header);

		if (data.status === 'OK') {
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

export const searchContact = (searchTerm, options) => async (dispatch) => {
	try {
		dispatch({ type: types.SEARCH_CONTACTS_REQUEST });

		const { data } = await axios.post(`${url}/contacts/search`, { searchTerm }, options);

		if (data.status === 'Ok') {
			dispatch({ type: types.SEARCH_CONTACTS_SUCCESS, payload: data.data });
		} else {
			throw new Error(data.error);
		}
	} catch (error) {
		dispatch({ type: types.SEARCH_CONTACTS_FAIL, payload: error.message || error });
	}
};

export const setSelectedChatType = (selectedChatType) => ({
	type: types.SET_SELECTED_CHAT_TYPE,
	payload: selectedChatType
});

export const setSelectedChatData = (selectedChatData) => ({
	type: types.SET_SELECTED_CHAT_DATA,
	payload: selectedChatData
});

export const setSelectedChatMessages = (messages) => ({
	type: types.SET_SELECTED_CHAT_MESSAGES,
	payload: messages
});
export const setDirectMessagesContacts = (directMessagesContacts) => ({
	type: types.SET_DIRECT_MESSAGES_CONTACTS,
	payload: directMessagesContacts
});

export const setPatientDirectMessagesContacts = (patientDirectMessagesContacts) => ({
	type: types.SET_PATIENT_DIRECT_MESSAGES_CONTACTS,
	payload: patientDirectMessagesContacts
});

export const updateContactStatus = (userId, status) => ({
	type: types.UPDATE_CONTACT_STATUS,
	payload: { userId, status }
});

export const addNotification = (notification) => ({
	type: types.ADD_NOTIFICATION,
	payload: notification
});

export const addMessage = (message) => {
	return {
		type: types.ADD_MESSAGE,
		payload: message
	};
};

export const setVoiceCall = (data) => ({
	type: types.SET_VOICE_CALL,
	voiceCall: data,
});

export const setVideoCall = (data) => ({
	type: types.SET_VIDEO_CALL,
	videoCall: data,
});

export const setIncomingVideoCall = (data) => ({
	type: types.SET_INCOMING_VIDEO_CALL,
	incomingVideoCall: data,
});

export const setIncomingVoiceCall = (data) => ({
	type: types.SET_INCOMING_VOICE_CALL,
	incomingVoiceCall: data,
});

export const endCall = () => ({
	type: types.END_CALL,
});

export const closeChat = () => ({
	type: types.CLOSE_CHAT
});


export const doctor_logout = (navigate) => (dispatch) => {
	dispatch({ type: types.DOCTOR_SIGNIN_LOGOUT });
	dispatch({ type: types.DOCTOR_AUTH_LOGOUT });

	localStorage.removeItem('token');
	toast.success("Logged out successfully");
	navigate('/login');
};