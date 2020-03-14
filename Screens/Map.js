/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class MapLocation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MapLocation</Text>
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