/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import {
    View,
    Image,
    StyleSheet,
    Linking,
    StatusBar,
    Dimensions
} from "react-native";
import * as theme from '../contants/theme';
import Block from '../components/Block';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';
import Head from '../components/header';
import * as Operation from '../contants/operation';
import firebase, { auth } from "firebase";
import config from '../config/firebase';
import { ScrollView } from "react-native-gesture-handler";
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
class TimeLine extends Component {
    renderData = ()=>{
        const {state} = this.props.navigation;

        return(
            <Block>
                {state.params.data.slice(0).reverse().map(e =>(

                <Block style={styles.box}>
                    <Block middle row>
                        <Block middle>
                            <Text h4 center>{e.place}</Text>
                        </Block>
                        <Block middle center>
                            <Text h4>-</Text>
                        </Block>
                        <Block middle>
                            <Text h4 center>{e.time}</Text>
                        </Block>
                    </Block>

                </Block>


                 ))
                }
               </Block>

        )
    }
    render() {
        const { navigation } = this.props;
        const toggleDrawer = () => {
            navigation.openDrawer();
        }
        return (
            <Block center middle style={{ backgroundColor: 'white' }}>
                <StatusBar barStyle="light-content" backgroundColor={theme.colors.status_bar} />
                <Head name="Time Line" Option={toggleDrawer} />
                <Block >
                    <ScrollView>
                <Block style={{  width:"100%"}}>

                    {this.renderData()}


                    </Block>
                    </ScrollView>
                </Block>







                <Button style={{width:"100%"}}  onPress={() => navigation.navigate('Track')}>
                            <Text button >Return Back</Text>

                        </Button>
            </Block>
        );
    }
}
export default TimeLine;

const styles = StyleSheet.create({
    box:{
        // backgroundColor:"",
        height:height/15,
        width:width-20,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:'white',
        marginTop:2,
        borderBottomColor:theme.colors.gray
    }
});