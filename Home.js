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
    Model,
    StatusBar,
    
} from "react-native";
import 'react-native-gesture-handler';
import Navigator from './navigator/AppNavigator';
import Core from './navigator/Screens';
import CoreDriver from './navigator/ScreensForDriver';
import Splash from './Screens/Splash';
import Track from './Screens/Track';
//import MapF from "./App";
import firebase, { auth } from "firebase";
import config from './config/firebase';


class SplashtoLogin extends Component {

   
    


    constructor(props){
        super(props);
        this.checkLoginStatus();
        this
        this.state = {
            timePassed: false,
            logginIn:false,
            type:null,
        };
        
    }
    state={
        
        isLoadingComplete: false
    }
    componentDidMount() {
       
        setTimeout( () => { 
            
            this.setTimePassed();
        },1000);
    }
    setTimePassed() {
        this.setState({timePassed: true});
        
    }
    checkLoginStatus  = () =>{
        firebase.auth().onAuthStateChanged(user => {
            if(user)
               this.setState({logginIn:true})
            })
    }
    async getData(key) {
        try {
          let userData = await AsyncStorage.getItem(key);
          let data = JSON.parse(userData);
          this.setState({
              type:data
          })
          
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
    render() {
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        if (!this.state.timePassed) {
            
            return <Splash />;
        }
        else {
            if(this.state.logginIn){
            if(this.state.type=="user")
            return <Core />
            else
            return <CoreDriver />

            }
            else
            return <Navigator />
            
        }
    }
}
export default SplashtoLogin;



