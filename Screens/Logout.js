/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import firebase, { auth } from "firebase";
import config from '../config/firebase';
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
class Logout extends Component {
    constructor(){
        super()
       this.signout();
        
    }

    signout = ()=>{
       // firebase.auth().signOut();
       this.props.navigation.navigate("Track")
    }
    render() {
        
        return null;
    }
}
export default Logout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});