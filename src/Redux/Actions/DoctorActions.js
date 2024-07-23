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
		console.log('Signup Data', data)
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
		console.log('VerifyOtp Data', data)
		navigate('/congratulation'); // Navigate to the dashboard page
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

export const doctor_login = (body, navigate) => async (dispatch) => {
	try {
	  dispatch({ type: types.DOCTOR_SIGNIN_REQUEST });
  
	  const { data } = await axios.post(`${url}/doctor/Signin`, body, header);
	  if (data.status === 'Ok') {
		dispatch({ type: types.DOCTOR_SIGNIN_SUCCESS, payload: data.data });
		toast.success(data.message, {
			position: 'top-right',
		});
		console.log('VerifyOtp Data', data)
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

  export const doctor_logout = (navigate) => (dispatch) => {
	dispatch({ type: types.DOCTOR_SIGNIN_LOGOUT });
	dispatch({ type: types.DOCTOR_AUTH_LOGOUT });
	toast.success("Logged out successfully");
	navigate('/doctorAuth');
  };

// Load Doctor
export const loadDoctor = (id) => async (dispatch, getState) => {
	try {
	  const token = getState().doctorAuth.doctor.token; // Assume token is stored in doctorAuth
  
	  const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		  }
	  };
  
	  const {data} = await axios.get(`${url}/doctor/${id}`, config);
  
	  if(data){
		dispatch({ type: types.LOAD_DOCTOR_SUCCESS, payload: data.data });
		dispatch({ type: types.DOCTOR_AUTH_SUCCESS, payload: data.data });
		dispatch({ type: types.DOCTOR_SIGNIN_SUCCESS, payload: data.data });

		return data.data;
	  }  else {
		throw new Error(data.message);
	  }
	} catch (error) {
	  console.error(error);
	  dispatch({
		type: types.LOAD_DOCTOR_FAIL
	  });
	}
  };

  // Search Doctors
export const searchDoctors = (query) => async (dispatch) => {
	try {
	  dispatch({ type: types.SEARCH_DOCTORS_REQUEST });
  
	  const { data } = await axios.get(`${url}/doctor/`, {
		params: { q: query },
		...header
	  });
  
	  if (data.status === 'OK') {
		dispatch({ type: types.SEARCH_DOCTORS_SUCCESS, payload: data.data });
	  } else {
		throw new Error(data.message);
	  }
	} catch (error) {
	  const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
	  dispatch({ type: types.SEARCH_DOCTORS_FAIL, payload: message });
	}
  };

// Action Creator
export const fetchDoctorDetails = (id) => async (dispatch) => {
  dispatch({ type: types.FETCH_DOCTOR_DETAILS_REQUEST });
  try {
    const response = await axios.get(`${url}/doctor/${id}`); // Replace with your API endpoint
    dispatch({ type: types.FETCH_DOCTOR_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.FETCH_DOCTOR_DETAILS_FAIL, payload: error.message });
  }
};