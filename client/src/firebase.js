import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDxE-PhgjO_5ZbP2_H2xQn5Ye5TEw8mrOc",
    authDomain: "koch-app-466fd.firebaseapp.com",
    projectId: "koch-app-466fd",
    storageBucket: "koch-app-466fd.appspot.com",
    messagingSenderId: "158377757573",
    appId: "1:158377757573:web:70323d7907309e7e8c92ec",
    measurementId: "G-L9YTNKDRWS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;