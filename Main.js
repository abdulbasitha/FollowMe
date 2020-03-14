/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Model
} from "react-native";
import 'react-native-gesture-handler';
import Login from './Login';
import Splash from './Splash';
//import MapF from "./App";
import firebase from "firebase";


class SplashtoLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            timePassed: false,

        };
    }
    state={
        logginIn:null
    }
    componentDidMount() {
        
        setTimeout( () => {
            this.setTimePassed();
        },1000);
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
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(user =>{
            if(user) {
                this.setState({
                    logginIn: true
                })
                console.log("login");
            }
                else{
                    this.setState({
                        logginIn:false
                    })
                }
            console.log("not login");


        })
    }
    setTimePassed() {
        this.setState({timePassed: true});
    }
    render() {
        if (!this.state.timePassed) {
            return <Splash />;
        } else {
            return (
            <Login />
            )
        }
    }
}
export default SplashtoLogin;



