/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, {Component} from "react";
import {createAppContainer, ScrollView} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from "./config/firebase";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    AppState
} from "react-native";
import MapF from './App';
import Geolocation from "@react-native-community/geolocation";
 class Signup extends Component {
     state = {
         email: null,
        pass: null,
         err:''

    }
    register = ()=>{
         firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.pass).then(console.log("ok"))
             .catch(err=>{
                 this.state.err=err
             })
    }

    render() {

        return (
            <ScrollView style={styles.container} >

                <View style={styles.head} >
                    <Text style={styles.signupText}>Signup</Text>
                </View>

                <View style={styles.registersection}>

                    <View style={styles.cardview}>

                        <View style={styles.elememts}>
                            <TextInput style={styles.TextInput}  placeholder="email" autoCompleteType="email"
                                       onChangeText={(email) => this.setState({email})}/>
                        </View>

                        <View style={styles.elememts}>
                            <TextInput style={styles.TextInput}  placeholder="Password"  onChangeText={(pass) => this.setState({pass})}/>
                        </View>

                        <View style={styles.submit}>
                            <TouchableOpacity style={styles.button} onPress={this.register} >
                                <Text> Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </ScrollView>


        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    head: {

        alignItems: 'center',
        justifyContent: 'center'

    },
    signupText: {
        fontSize: 20,
        fontWeight: "bold",

    },
    registersection: {
        flex: 1,
        paddingHorizontal: 20,


        justifyContent: 'center',
        alignContent:'center'
    },
    elememts: {
        backgroundColor: 'gray',
        margin: 10,

    },
    submit: {
        backgroundColor: '#3498db',
        alignItems: 'center',
        padding: 20,
        margin: 10,
    },
    button: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',

    },
    TextInput:{
        margin:"4%"
    },
    cardview: {

    }

});

const AppNavigator = createStackNavigator({
    SIgnup:{
    screen: Signup },
    Track:{
        screen: MapF},



});
export default createAppContainer(AppNavigator);

