import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3RJexvj6EZ1ASFjyiYCAnn-Ia6vlFBhM",
  authDomain: "eventos-93f41.firebaseapp.com",
  projectId: "eventos-93f41",
  storageBucket: "eventos-93f41.appspot.com",
  messagingSenderId: "12895592682",
  appId: "1:12895592682:web:637b05a045fd70f0e87793"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);