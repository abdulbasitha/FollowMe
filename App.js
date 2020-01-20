/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";

import Geolocation from '@react-native-community/geolocation';
import { 
  View,
  Text,
  StyleSheet,
  Button,
  Alert
} from "react-native";
import FetchLocation from './components/FetchLocation';
import Maps from './components/UsersMaps';
export default class componentName extends Component {
state = {
  
  userLacation: null
}

  getUserLocation= ()=>{
  
    Geolocation.watchPosition(position =>{
      console.log(position);
    this.setState({
      userLacation:{
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    })
   },
   err=>{
     console.log(err);
   });
  }
  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLOcation={this.getUserLocation}/> 
        <View style={styles.map}>
          <Maps Location={this.state.userLacation}/>

        </View>
      </View>

       
    );
  }
}

const styles = StyleSheet.create({
  container:{
flex:1
  },
  map:{
flex:1,
backgroundColor:'red'
  }
});
