// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBm_6iZT8Yuvk1BzAJfMoqbnPXY6GesZmk",
    authDomain: "caresync-med-563cb.firebaseapp.com",
    projectId: "caresync-med-563cb",
    storageBucket: "caresync-med-563cb.appspot.com",
    messagingSenderId: "1017941247419",
    appId: "1:1017941247419:web:d5073697206470c28b309e",
    measurementId: "G-CJTDHY0JJF"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  // Customize notification here
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});