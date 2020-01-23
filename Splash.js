/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, {Component} from "react";
import 'react-native-gesture-handler';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,
    SafeAreaView,
    Alert,
    Modal
} from "react-native";

class Login extends Component {

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.signupText}>MEA BUS TRACKER</Text>
                    <Text style={styles.signupText}>Alpha-Version</Text>
                </View>
                <View style={styles.tag}>
                    <Text>BY TECHZIA </Text>
                </View>

            </SafeAreaView>


        );
    }
}

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    signupText: {
        fontSize: 20,
        fontWeight: "bold",

    },
    tag:{
        alignItems: 'center',
        paddingBottom:10
    },


});
