import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsoJqNpBhDp7IR7aFr_P7G4fGsTTZ6WAA",
    authDomain: "testapp-d6fa6.firebaseapp.com",
    projectId: "testapp-d6fa6",
    storageBucket: "testapp-d6fa6.appspot.com",
    messagingSenderId: "921450921961",
    appId: "1:921450921961:web:2d1cf308ec27a2a3f21578",
    measurementId: "G-3R6ECLYS9M"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BHh-_J7I_71EkBfP7m7rBpVRoVk6ekkx56rtfVVMP8_Uq42-usvGEKbDA8XGWRg0LIEtGLSpSjXhl4RRcCAtYXA"
);
export { messaging };