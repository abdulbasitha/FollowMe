/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import Block from '../components/Block';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';
import firebase, { auth } from "firebase";
import config from '../config/firebase';
import Map from '../components/ViewLocation';
import { 
    View,
    StyleSheet
} from "react-native";

class MapLocation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Map />
            </View>
        );
    }
}
export default MapLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});