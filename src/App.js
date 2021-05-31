import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";

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
messaging.getToken({ vapidKey: 'BHh-_J7I_71EkBfP7m7rBpVRoVk6ekkx56rtfVVMP8_Uq42-usvGEKbDA8XGWRg0LIEtGLSpSjXhl4RRcCAtYXA' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
