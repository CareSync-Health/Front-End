import axios from 'axios';
// import {
//   UPLOAD_FILE_REQUEST,
//   UPLOAD_FILE_SUCCESS,
//   UPLOAD_FILE_FAILURE,
//   VERIFY_FILE_REQUEST,
//   VERIFY_FILE_SUCCESS,
//   VERIFY_FILE_FAILURE,
// } from '';
import * as types from '../Types'

export const uploadFile = (file, email) => async (dispatch) => {
  dispatch({ type: types.UPLOAD_FILE_REQUEST });

  const formData = new FormData();
  formData.append('file', file);
  formData.append('email', email);

  try {
    const { data } = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({ type: types.UPLOAD_FILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: types.UPLOAD_FILE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const verifyFile = (email) => async (dispatch) => {
  dispatch({ type: types.VERIFY_FILE_REQUEST });

  try {
    const { data } = await axios.post(`/api/verify`, { email });
    dispatch({ type: types.VERIFY_FILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: types.VERIFY_FILE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
