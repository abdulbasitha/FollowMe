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
  Alert,
  SafeAreaView
} from "react-native";
import FetchLocation from './components/FetchLocation';
import Maps from './components/UsersMaps';
 import ViewLocation from './components/ViewLocation';
export default class componentName extends Component {
state = {
  
  userLacation: null,
  viewLocation:null,
  userPlaces : []
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
    });
    fetch('https://react-native-cli.firebaseio.com/places.json',{
      method:'POST',
      body:JSON.stringify({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
    .then(res => console.log(res))
    .catch(err=> console.log(err));
     
   },
   err=>{
     console.log(err);
   });
  }
  Call=()=>{
    this.timer = setInterval(()=> this.Tracking(), 1000)
   }
  Tracking = ()=>{
   
    
    fetch('https://react-native-cli.firebaseio.com/places.json')
    .then(res => res.json())
    .then(parsedResult => {
      const placesArray= [];
      for (const key in parsedResult){
        placesArray.push({
          latitude:parsedResult[key].latitude,
          longitude:parsedResult[key].longitude,
          id:key
        })
       console.log(placesArray);
      }
      this.setState({
        viewLocation:{

          latitude:  placesArray.slice(-1)[0].latitude,
          longitude:  placesArray.slice(-1)[0].longitude,
          latitudeDelta: 0.095,
          longitudeDelta: 0.055
        }
      });
      this.setState({
        userPlaces:placesArray
      })
    })
    .catch(err=> console.log(err));

    console.log(this.state.viewLocation);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <FetchLocation onGetLOcation={this.getUserLocation}/> 
        <View style={styles.map}>
          <Maps  Location={this.state.userLacation}
          userPlace={this.state.userPlace}
          />

        </View>

        <View style={styles.mapfetch}>
      
       
       

        <View style={styles.map}>
          <ViewLocation Location={this.state.viewLocation}/> 

        </View>
        </View>
        <Button color="green" title="Track" onPress={this.Call}/>
      </SafeAreaView>

       
    );
  }
}

const styles = StyleSheet.create({
  container:{
flex:1
  },
  map:{
flex:1,

  },
  mapfetch:{
    flex:1,
    paddingTop:10
   
  }
});
