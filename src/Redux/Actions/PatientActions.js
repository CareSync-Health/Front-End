import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { authHeader, header } from "../Header"

const url = config.liveUrl

export const patient_register = (body, navigate) => async (dispatch) => {
	try {
	  dispatch({ type: types.PATIENT_AUTH_REQUEST });
  
	  const { data } = await axios.post(`${url}/patient/`, body);
	  if (data.status === 'OK') {
		dispatch({ type: types.PATIENT_AUTH_SUCCESS, payload: data.data });
		toast.success(data.message,  {
			position: 'top-right',
		});
		navigate('/congratulation');
	  } else {
		throw new Error(data.message);
	  }
	} catch (error) {
	  const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
	  toast.error(message);
	  dispatch({ type: types.PATIENT_AUTH_FAIL, payload: message });
	}
  };

// export const patient_login = (body, navigate) => async (dispatch) => {
// 	try {
// 	  dispatch({ type: types.PATIENT_SIGNIN_REQUEST });
  
// 	  const { data } = await axios.post(`${url}/patient/patient-signin`, body);
// 	  console.log(data, 'fetched')
// 	  if (data.status === 'Ok') {
// 		dispatch({ type: types.PATIENT_SIGNIN_SUCCESS, payload: data.data });
// 		toast.success(data.message, {
// 		  position: 'top-right',
// 		});
// 		navigate('/about');
// 	  } else {
// 		throw new Error(data.message);
// 	  }
// 	} catch (error) {
// 	  const message = error.response && error.response.data.message
// 		? error.response.data.message
// 		: 'Something went wrong';
  
// 	  toast.error(message, {
// 		position: 'top-right',
// 	  });
  
// 	  dispatch({ type: types.PATIENT_SIGNIN_FAIL, payload: message });
// 	}
//   };

  export const patient_login = (body, navigate) => async (dispatch) => {
	try {
	  dispatch({ type: types.PATIENT_SIGNIN_REQUEST });
  
	  const { data } = await axios.post(`${url}/doctor/doctor-signin`, body);
	  if (data.status === 'Ok') {
		dispatch({ type: types.PATIENT_SIGNIN_SUCCESS, payload: data.data });
		toast.success(data.message);
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
