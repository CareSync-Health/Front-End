// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBm_6iZT8Yuvk1BzAJfMoqbnPXY6GesZmk",
    authDomain: "caresync-med-563cb.firebaseapp.com",
    projectId: "caresync-med-563cb",
    storageBucket: "caresync-med-563cb.appspot.com",
    messagingSenderId: "1017941247419",
    appId: "1:1017941247419:web:d5073697206470c28b309e",
    measurementId: "G-CJTDHY0JJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };