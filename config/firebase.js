import firebase from "firebase";
const config = {
    apiKey: "AIzaSyBH0s1rHRKvju1F7E4zLD8dByw_7WX-JD4",
    authDomain: "react-native-cli.firebaseapp.com",
    databaseURL: "https://react-native-cli.firebaseio.com",
    projectId: "react-native-cli",
    storageBucket: "react-native-cli.appspot.com",
    messagingSenderId: "81557500562",
    appId: "1:81557500562:web:8b26df4706445fb0276c4b",
    measurementId: "G-TDNYS1443C"
};
const fire = firebase.initializeApp(config);
export default fire;
