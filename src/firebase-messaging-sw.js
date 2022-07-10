importScripts("./firebase-app.js");
importScripts("./firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    projectId: 'my-city-ae094',
    appId: '1:1063249174048:web:685b665c2ab5eff373a645',
    storageBucket: 'my-city-ae094.appspot.com',
    apiKey: 'AIzaSyAqFLcZzR2dSzSNAIb65JQNW_BYQxzrvR4',
    authDomain: 'my-city-ae094.firebaseapp.com',
    messagingSenderId: '1063249174048',
    measurementId: 'G-5LJRYXTHQ1',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();