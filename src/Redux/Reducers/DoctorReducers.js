import * as types from "../Types";

const initialState = {
  status: null,
  selectedChatType: undefined,
  selectedChatData: undefined,
  selectedChatMessages: [],
  directMessagesContacts: [],
  PatientDirectMessagesContacts: [],
  contactStatuses: {},
  notifications: [],
  videoCall: undefined,
  voiceCall: undefined,
  incomingVoiceCall: undefined,
  incomingVideoCall: undefined,
  earnings: 0,
  debts: {
    debt: 0,
    paymentsMade: 0
  }
};

export const getDoctorStatusReducer = (state = {}, action) => {
  switch (action.type) {
      case types.GET_DOCTOR_STATUS_REQUEST:
          return { ...state, loading: true };
      case types.GET_DOCTOR_STATUS_SUCCESS:
          return { ...state, loading: false, status: action.payload };
      case types.GET_DOCTOR_STATUS_FAIL:
          return { ...state, loading: false, error: action.payload };
      case types.CLEAR_ERRORS:
        return { ...state, error: null };
      default:
          return state;
  }
};

export const doctorKYCStatusReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case types.GET_DOCTOR_KYC_STATUS_REQUEST:
      return { ...state, loading: true };
    case types.GET_DOCTOR_KYC_STATUS_SUCCESS:
      return { ...state, loading: false, KYCStatus: action.payload };
    case types.GET_DOCTOR_KYC_STATUS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const doctorAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case types.DOCTOR_AUTH_REQUEST:
    case types.DOCTOR_SIGNIN_REQUEST:
    case types.VERIFY_2SV_REQUEST:
      return { ...state, loading: true };
    case types.DOCTOR_AUTH_SUCCESS:
    case types.DOCTOR_SIGNIN_SUCCESS:
    case types.VERIFY_2SV_SUCCESS:
      return { ...state, loading: false, doctor: action.payload, success: true, message: action.message };
    case types.DOCTOR_AUTH_FAIL:
    case types.DOCTOR_SIGNIN_FAIL:
    case types.VERIFY_2SV_FAIL:
      return { ...state, loading: false, error: action.payload, message: action.message };
    case types.DOCTOR_AUTH_LOGOUT:
    case types.DOCTOR_SIGNIN_FAIL:
      return { ...state, doctor: null };
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const doctorForgetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case types.RESET_PASSWORD_REQUEST:
    case types.FORGOT_PASSWORD_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case types.RESET_PASSWORD_SUCCESS:
    case types.FORGOT_PASSWORD_SUCCESS:
      return { ...state, loading: false, success: true, error: null };
    case types.RESET_PASSWORD_FAIL:
    case types.FORGOT_PASSWORD_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const doctorVerifyOtpReducer = (state = {}, action) => {
  switch (action.type) {
    case types.VERIFY_OTP_REQUEST:
      return { ...state, loading: true };
    case types.VERIFY_OTP_SUCCESS:
      return { ...state, loading: false, success: true, doctor: action.payload };
    case types.VERIFY_OTP_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const doctorVerificationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.DOCTOR_VERIFY_REQUEST:
      return { ...state, loading: true };
    case types.DOCTOR_VERIFY_SUCCESS:
      return { ...state, loading: false, doctorVeri: action.payload };
    case types.DOCTOR_VERIFY_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}

export const searchDoctorsReducer = (state = { doctors: [] }, action) => {
  switch (action.type) {
    case types.SEARCH_DOCTORS_REQUEST:
      return { ...state, loading: true };
    case types.SEARCH_DOCTORS_SUCCESS:
      return { ...state, loading: false, doctors: action.payload };
    case types.SEARCH_DOCTORS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const getAllDoctorsReducer = (state = { doctors: [] }, action) => {
  switch (action.type) {
    case types.GET_ALL_DOCTORS_REQUEST:
      return { ...state, loading: true };
    case types.GET_ALL_DOCTORS_SUCCESS:
      return { ...state, loading: false, doctors: action.payload };
    case types.GET_ALL_DOCTORS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
}

export const loadDoctorReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_DOCTOR_REQUEST:
      return { ...state, loading: true };
    case types.LOAD_DOCTOR_SUCCESS:
      return { ...state, loading: false, doctor: action.payload };
    case types.LOAD_DOCTOR_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const updateDoctorReducer = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_DOCTOR_PROFILE_REQUEST:
      return { ...state, loading: true };
    case types.UPDATE_DOCTOR_PROFILE_SUCCESS:
      return { ...state, loading: false, updatedDoctor: action.payload, success: true, message: action.message };
    case types.UPDATE_DOCTOR_PROFILE_FAIL:
      return { ...state, loading: false, error: action.payload, message: action.message };
    case types.CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
}

export const getTotalEarningReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DOCTOR_EARNINGS_REQUEST:
      return { ...state, loading: true, };
    case types.GET_DOCTOR_EARNINGS_SUCCESS:
      return { ...state, loading: false, earnings: action.payload };
    case types.GET_DOCTOR_EARNINGS_FAIL:
      return { ...state, loading: false, error: action.error, };
    default:
      return state;
  }
};

export const doctorDebtReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DOCTOR_DEBTS_REQUEST:
      return { ...state, loading: true };
    case types.GET_DOCTOR_DEBTS_SUCCESS:
      return { ...state, loading: false, debts: action.payload};
    case types.GET_DOCTOR_DEBTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const searchContactsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SEARCH_CONTACTS_REQUEST:
      return { ...state, loading: true };
    case types.SEARCH_CONTACTS_SUCCESS:
      return { ...state, loading: false, contacts: action.payload };
    case types.SEARCH_CONTACTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}


export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_CHAT_TYPE:
      return {
        ...state,
        selectedChatType: action.payload
      };
    case types.SET_SELECTED_CHAT_DATA:
      return {
        ...state,
        selectedChatData: action.payload
      };
    case types.SET_SELECTED_CHAT_MESSAGES:
      return {
        ...state,
        selectedChatMessages: action.payload
      };
    case types.SET_DIRECT_MESSAGES_CONTACTS:
      return {
        ...state,
        directMessagesContacts: action.payload
      };
    case types.SET_PATIENT_DIRECT_MESSAGES_CONTACTS:
      return {
        ...state,
        patientDirectMessagesContacts: action.payload
      };
    case types.UPDATE_CONTACT_STATUS:
      return {
        ...state,
        contactStatuses: {
          ...state.contactStatuses,
          [action.payload.userId]: action.payload.status,
        },
      };
    case types.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload
      };
    case types.GET_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedChatMessages: action.payload,
      };
    case types.GET_MESSAGES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.ADD_MESSAGE:
      const newMessage = {
        ...action.payload,
        recipient:
          state.selectedChatType === "channel"
            ? action.payload.recipient
            : action.payload.recipient._id,
        sender:
          state.selectedChatType === "channel"
            ? action.payload.sender
            : action.payload.sender._id,
      };
      return {
        ...state,
        selectedChatMessages: [...state.selectedChatMessages, newMessage],
      };
    case types.CLOSE_CHAT:
      return {
        ...state,
        selectedChatData: undefined,
        selectedChatType: undefined,
        selectedChatMessages: []
      };
    case types.SET_VIDEO_CALL:
      return {
        ...state,
        videoCall: action.videoCall
      };
    case types.SET_VOICE_CALL:
      return {
        ...state,
        voiceCall: action.voiceCall
      };
    case types.SET_INCOMING_VOICE_CALL:
      return {
        ...state,
        incomingVoiceCall: action.incomingVoiceCall
      };
    case types.SET_INCOMING_VIDEO_CALL:
      return {
        ...state,
        incomingVideoCall: action.incomingVideoCall
      };
    case types.END_CALL:
      return {
        ...state,
        videoCall: undefined,
        voiceCall: undefined,
        incomingVoiceCall: undefined,
        incomingVideoCall: undefined,
      };
    case types.CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};