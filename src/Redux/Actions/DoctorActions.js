import * as types from "../Types";
import axios from "axios";
import toast from "react-hot-toast";
import { config } from "../Config";
import { authHeader, header } from "../Header";

const url = config.liveUrl;

export const doctor_register = (body, navigate) => async (dispatch) => {
  try {
    dispatch({ type: types.DOCTOR_AUTH_REQUEST });

    const { data } = await axios.post(`${url}/doctor/`, body, header);
    if (data.status === 'OK') {
      dispatch({ type: types.DOCTOR_AUTH_SUCCESS, payload: data.data });
      	toast.success(data.message, {
			position: 'top-right',
		})
      	navigate('/congratulation');
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
    toast.error(message, {
		position: 'top-right',
	});
    dispatch({ type: types.DOCTOR_AUTH_FAIL, payload: message });
  }
};

export const doctor_login = (body, navigate) => async (dispatch) => {
	try {
	  dispatch({ type: types.DOCTOR_SIGNIN_REQUEST });
  
	  const { data } = await axios.post(`${url}/doctor/doctor-signin`, body, header);
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