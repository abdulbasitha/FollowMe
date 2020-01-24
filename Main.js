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
import MapF from "./App";

class SplashtoLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            timePassed: false,
        };
    }

    componentDidMount() {
        setTimeout( () => {
            this.setTimePassed();
        },1000);
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



