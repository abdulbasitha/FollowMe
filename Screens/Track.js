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
    StatusBar
} from "react-native";
import Block from '../components/Block';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';
import Head from '../components/header';
import * as Operation from '../contants/operation';
import firebase, { auth } from "firebase";
import config from '../config/firebase';
class Track extends Component {
   
    render() {
        const {navigation} = this.props;
        const toggleDrawer = () => {
            navigation.openDrawer();
          }
        return (
            <Block center middle style={{backgroundColor:'white'}}>
                 <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Head Option={toggleDrawer}/>
             
                 <Block middle>
                    <Image source={require('../assets/Src/img/logo.png')}
                    style={{height:70,width:70}}
                    />
                </Block>
                <Block flex={2.8} center>
                <Text h3
                    // size={28} 
                    // // color="#2e384d" 
                    // spacing={0} 
                    // height={32} 
                    // weight={'normal'}
                     style={{marginBottom:5}}
                    >
                     Zia Tracker</Text>
                    
                    <Text 
                    paragraph
                    color="black3"
                    // size={15} 
                    // color="#8798ad" 
                    // spacing={0} 
                    // height={22} 
                    // weight={'normal'} 
                    >Track Your Bus With Zia Tracker.</Text>
                    <Block center style={{marginTop:40}}>
                    <Input label={"Bus Number"}  style={{  marginBottom:15}} full number/>
                    <Button   style={{marginBottom:12}} onPress={()=>navigation.navigate('Map')}> 
                    <Text button >Track</Text>
                    
                </Button>
                <Text paragraph color="gray" onPress={() => Linking.openURL('mailto:support@techzia.in?subject=Zia Tracker&body=Your Message') }
      title="support@example.com">
                Report a Problem
                </Text>
                    </Block>
                </Block>
            </Block>   
        );
    }
}
export default Track;

const styles = StyleSheet.create({
   
});