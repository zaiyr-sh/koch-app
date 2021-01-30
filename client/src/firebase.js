import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCM0lXebMMB1jmTGnCVqKioBDZV1yh8IYY",
    authDomain: "kochapp-ec21e.firebaseapp.com",
    projectId: "kochapp-ec21e",
    storageBucket: "kochapp-ec21e.appspot.com",
    messagingSenderId: "85868020404",
    appId: "1:85868020404:web:bd39f30d42171079ad0de1",
    measurementId: "G-03FGQM3MBC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;