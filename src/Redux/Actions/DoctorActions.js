import * as types from "../Types";
import axios from "axios";
import toast from "react-hot-toast";
import { config } from "../Config";

const url = config.liveUrl;

export const doctor_register = (body, navigate) => async (dispatch) => {
  try {
    dispatch({ type: types.DOCTOR_AUTH_REQUEST });

    const { data } = await axios.post(`${url}/doctor/`, body);
    if (data.status === 'OK') {
      dispatch({ type: types.DOCTOR_AUTH_SUCCESS, payload: data.data });
      toast.success(data.message);
      navigate('/congratulation');
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
    toast.error(message);
    dispatch({ type: types.DOCTOR_AUTH_FAIL, payload: message });
  }
};

export const doctor_login = (body, navigate) => async (dispatch) => {
	try {
	  dispatch({ type: types.DOCTOR_SIGNIN_REQUEST });
  
	  const { data } = await axios.post(`${url}/doctor/doctor-signin`, body);
	  if (data.status === 'Ok') {
		dispatch({ type: types.DOCTOR_SIGNIN_SUCCESS, payload: data.data });
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

  export const doctor_logout = (navigate) => (dispatch) => {
	dispatch({ type: types.DOCTOR_SIGNIN_LOGOUT });
	dispatch({ type: types.DOCTOR_AUTH_LOGOUT });
	toast.success("Logged out successfully");
	navigate('/doctorAuth');
  };

// export const loadDoctor = () => async (dispatch) => {
//   try {
//     dispatch({ type: types.LOAD_DOCTOR_REQUEST });

//     const { data } = await axios.get(`${url}/doctor/${id}`);

//     dispatch({
//       type: types.LOAD_DOCTOR_SUCCESS,
//       payload: data.data,
//     });
//   } catch (error) {
//     const message = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong';
//     toast.error(message);
//     dispatch({ type: types.LOAD_DOCTOR_FAIL, payload: message });
//   }
// };