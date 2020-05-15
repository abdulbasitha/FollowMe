/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    StatusBar
} from "react-native";
import * as theme from '../config/theme';
import Logo from '../assets/Src/img/img.png';
class Splash extends Component {
    render() {
        return (

            <SafeAreaView style={styles.main}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View style={styles.container}>
                <View style={styles.imageView}>

                <Image source={Logo} style={styles.image}/>

                </View>
                </View>
                <View>
                <View style={styles.tag}>
                    {/* <Text>BY TECHZIA </Text> */}
                </View>
                </View>
            </SafeAreaView>

        );
    }
}
export default Splash;

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:theme.colors.white,

    },

    image:{

        width: 70,
        height: 70,
        borderBottomLeftRadius: 100/1,
        borderTopLeftRadius: 100/1,
        resizeMode: 'contain'
    
    },
    imageView:{

        width: 70,
        height: 70,
        backgroundColor:theme.colors.blue,
        borderRadius: 150/1
    },
    tag:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:10
    }

});
