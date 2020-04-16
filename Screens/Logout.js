/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from "react-native";
import firebase, { auth } from "firebase";
import Navigator from '../navigator/AppNavigator';
class Logout extends Component {
    constructor(){
        super();
        
    }
   componentDidMount(){
       firebase.auth().signOut();
   }
    
    render() {
        return (
           
                <Navigator />
            
        );
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