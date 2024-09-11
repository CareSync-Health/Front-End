import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import configureStore from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './index.css'
import './App.css'
import './Doctor Dashboard/Components/Language_Locales/i18n'; // Import the i18n configuration
import { SocketProvider } from './Redux/context/SocketContext.jsx'
import { messaging, getToken, onMessage } from './Components/firebase.js'; // Import Firebase messaging functions

const store = configureStore()
const persistor = persistStore(store)

// Functional component to handle Firebase messaging
const FirebaseSetup = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        // Request permission for notifications
        await Notification.requestPermission();
        console.log('Notification permission granted.');

        // Get and save the FCM token
        const token = await getToken(messaging, { vapidKey: 'BPq3AIVkjsbJctmiwkG5Be8agJgHGzyFvZrh5AKqHxRtSvv1Z0eR_PUMjRzIV33hjqrAw4HsSGM2eTSir8uBzS4' }); // Replace 'YOUR_VAPID_KEY' with your VAPID key
        if (token) {
          console.log('FCM Token:', token);
          // Save the token to your backend or use it as needed
        }
      } catch (error) {
        console.error('Unable to get permission to notify.', error);
      }
    };

    const handleMessage = () => {
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        // Customize notification here
        const { title, body } = payload.notification;
        if (Notification.permission === 'granted') {
          new Notification(title, { body });
        }
      });
    };

    requestPermission();
    handleMessage();
  }, []);

  return null; // This component doesn't need to render anything
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SocketProvider>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <React.StrictMode>
            <App />
            <FirebaseSetup />
          </React.StrictMode>
        </BrowserRouter>
      </PersistGate>
    </SocketProvider>
  </Provider>
)