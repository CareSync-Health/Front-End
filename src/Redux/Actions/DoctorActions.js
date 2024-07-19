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
  
	  const { data } = await axios.post(`${url}/doctor/verifyotp`, { otp }, header); // Assuming the endpoint is /doctor/verify-otp
	  if (data) {
		dispatch({ type: types.VERIFY_OTP_SUCCESS, payload: data.data });
		toast.success(data.message, {
		  position: 'top-right',
		});
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

//   export const submitVerificationForm = (body, navigate) => async (dispatch) => {
// 	try {
// 		const {data} = await.post(`${url}/doctor`)
// 	} catch (error) {
		
// 	}
//   }

export const doctor_login = (body, navigate) => async (dispatch) => {
	try {
	  dispatch({ type: types.DOCTOR_SIGNIN_REQUEST });
  
	  const { data } = await axios.post(`${url}/doctor/Signin`, body, header);
	  if (data.status === 'Ok') {
		dispatch({ type: types.DOCTOR_SIGNIN_SUCCESS, payload: data.data });
		toast.success(data.message, {
			position: 'top-right',
		});
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
  
	  const res = await axios.get(`${url}/doctor/${id}`, config);
  
	  dispatch({
		type: types.LOAD_DOCTOR_SUCCESS,
		payload: res.data
	  });
  
	  return res.data;
	} catch (err) {
	  console.error(err);
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