// store.js
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
import { rootReducer } from "./Reducers/RootReducer";

const logger = createLogger();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["patientAuth", "doctorAuth"]
};

const doctorFromStorage = localStorage.getItem('doctor')
  ? JSON.parse(localStorage.getItem('doctor'))
  : null;

const initialState = {
  doctorLogin: { doctor: doctorFromStorage },
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];

const configStore = () => {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware, logger))
  );
};

export default configStore;