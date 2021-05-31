importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCsoJqNpBhDp7IR7aFr_P7G4fGsTTZ6WAA",
    authDomain: "testapp-d6fa6.firebaseapp.com",
    projectId: "testapp-d6fa6",
    storageBucket: "testapp-d6fa6.appspot.com",
    messagingSenderId: "921450921961",
    appId: "1:921450921961:web:2d1cf308ec27a2a3f21578",
    measurementId: "G-3R6ECLYS9M"
  };
  firebase.initializeApp(firebaseConfig)
  const messaging  = firebase.messaging