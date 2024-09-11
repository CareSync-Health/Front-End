// src/components/NotificationSetup.js
import React, { useEffect } from 'react';
import { messaging, getToken } from './firebase';

const NotificationSetup = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const token = await getToken(messaging, { vapidKey: "YOUR_PUBLIC_VAPID_KEY" });
        if (token) {
          console.log('FCM Token:', token);
          // Optionally, send the token to your server
          await fetch('/api/store-fcm-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });
        } else {
          console.log('No registration token available.');
        }
      } catch (error) {
        console.error('Error getting FCM token:', error);
      }
    };

    requestPermission();
  }, []);

  return <div>Notification setup</div>;
};

export default NotificationSetup;
