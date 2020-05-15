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
    Alert,
    AsyncStorage
} from "react-native";

import Block from '../components/Block';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';
import Head from '../components/header';
import * as Operation from '../contants/operation';
import firebase, { auth } from "firebase";
import config from '../config/firebase';
import * as theme from '../contants/theme';
class Track extends Component {

//     componentDidMount(){
            
            
//         this.willFocusSubscription = this.props.navigation.addListener(
//             'willFocus',
//             () => {
//                 this.setState({
//                     busno:null
//                 })
                
            
//     }
//     );
    
// }
    constructor(){
        super()
       
        this.getData("userType")
    }
    state = {
        busno:null
    }
Track = ()=>{
   if(this.state.busno == null){
        Alert.alert("Enter a valid Bus no")
   }else{
       this.props.navigation.navigate("TrackDR",{
        Busno:this.state.busno
      })
   }
        
}
    async getData(key) {
        try {
          let userData = await AsyncStorage.getItem(key);
          let data = JSON.parse(userData);
          console.log(data)
          
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
    render() {
        const {navigation} = this.props;
        const toggleDrawer = () => {
            navigation.openDrawer();
          }
        return (
            <Block center middle style={{backgroundColor:'white'}}>
              <StatusBar barStyle = "light-content"  backgroundColor = {theme.colors.status_bar} />
                <Head  name ="FolowMe Driver" Option={toggleDrawer}/>
             
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
                      FollowMe Driver</Text>
                    
                    <Text 
                    paragraph
                    color="black3"
                    // size={15} 
                    // color="#8798ad" 
                    // spacing={0} 
                    // height={22} 
                    // weight={'normal'} 
                    >Navigate Your Bus With Zia Driver.</Text>
                    <Block center style={{marginTop:40}}>
                    <Input value={this.state.busno} onChangeText={(no)=>this.setState({busno:no})} label={"Bus Number"}  style={{  marginBottom:15}} full number/>
                    <Button   style={{marginBottom:12}} onPress={this.Track}> 
                    <Text button >Start</Text>
                    
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