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

export const patient_logout = (navigate) => (dispatch) => {
	dispatch({ type: types.PATIENT_SIGNIN_LOGOUT });
	dispatch({ type: types.PATIENT_AUTH_LOGOUT });
	toast.success("Logged out successfully");
	navigate('/patientAuth');
}; 


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