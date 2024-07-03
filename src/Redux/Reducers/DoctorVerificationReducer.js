import * as types from '../Types'
  
  const initialState = {
    loading: false,
    fileData: null,
    error: null,
    verification: null,
  };
  
  export const fileReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.UPLOAD_FILE_REQUEST:
      case types.VERIFY_FILE_REQUEST:
        return { ...state, loading: true };
  
      case types.UPLOAD_FILE_SUCCESS:
        return { ...state, loading: false, fileData: action.payload };
  
      case types.VERIFY_FILE_SUCCESS:
        return { ...state, loading: false, verification: action.payload };
  
      case types.UPLOAD_FILE_FAILURE:
      case types.VERIFY_FILE_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  