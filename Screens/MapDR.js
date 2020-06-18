/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import Geolocation from '@react-native-community/geolocation';
import Block from '../components/Block';
import Text from '../components/Text';
import * as theme from '../contants/theme';
import Input from '../components/Input';
import Button from '../components/Button';
import firebase, { auth } from "firebase";
import config from '../config/firebase';
import FetchLocation from '../components/FetchLocation';
import Maps from '../components/UsersMaps';
import ViewLocation from '../components/ViewLocation';


import Head from '../components/header';

import {
    View,
    StyleSheet,
    AppState,
    SafeAreaView,StatusBar, Alert,Dimensions
} from "react-native";
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
class MapLocation extends Component {

      componentDidMount(){
        Geolocation.getCurrentPosition(position =>{
          // Alert.alert("hi")
          console.log("initally only",position);
        this.setState({
          initialLocation:{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        });
      })
      this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            () => {
                this.setState({
                  appState: AppState.currentState,
                  userLocation: null,
                  viewLocation:null,
                  userPlaces : [],
                  start:false
                })


    }
    );

}
    state = {
        appState: AppState.currentState,
        region:null,
        userLocation: null,
        viewLocation:null,
        speed:0,
        userPlaces : [],
        initialLocation:{
          latitude:'',
          longitude:'',
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

        },
        currentPlace:''

      }

      getUserLocation= ()=>{


      //  Alert.alert(this.props.navigation.getParam('Busno'))


        Geolocation.watchPosition(position =>{
          fetch('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCSRXncujncTlkXkv2O1CJVV4iR876duPE&address=' + position.coords.latitude + ',' + position.coords.longitude)
          .then((response) => response.json())
          .then((responseJson) => {
                let current = responseJson.results[0].address_components[0].short_name

                current.replace(`"`,``)
                this.setState({currentPlace:current})

            })
            let speed = JSON.stringify(position.coords.speed)

            this.setState({speed:speed})
            let loca = {
            lat:position.coords.latitude,
            lng:position.coords.longitude
          }
          //  console.log(ret);
        this.setState({
          userLocation:{
            // initialLatitude: this.state.initialLocation.latitude,
            // initialLongitude: this.state.initialLocation.longitude,
            latitude:position.coords.latitude,
            longitude: position.coords.longitude,
            speed:position.coords.speed,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        });
        fetch("https://react-native-cli.firebaseio.com/places"+this.props.navigation.getParam('Busno')+".json",{
          method:'POST',
          body:JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            speed:position.coords.speed,
            placename:this.state.currentPlace,
            datetime:new Date()
          })
        })
        // .then(res => console.log(res))
        .catch(err=> console.log(err));

       },
       err=>{
         console.log(err);
       },{enableHighAccuracy: true, timeout: 50000, maximumAge: 0, distanceFilter: 1});
      }




    render() {

        const {navigation} = this.props;
        const toggleDrawer = () => {
            navigation.openDrawer();
          }
        return (
        <Block style={styles.container}>
            <StatusBar barStyle = "light-content"  backgroundColor = {theme.colors.status_bar} />
            <Head name="Bus Location" Option={toggleDrawer}/>
        <Block style={styles.map} >
        <Maps  Location={this.state.userLocation}
              initialLocationLocation = {this.state.initialLocation}
          userPlace={this.state.userPlace}
          />

        </Block>

        {/* <Button color="green" title="Track" onPress={this.Call}/> */}


            <Block flex={.4} style={styles.cardbottom} row  >
              <Block>
                <Block row center middle space="between" >
                  <Block>
                    <Text center h4>Speed: {parseInt(this.state.speed)} KM/H</Text>
                  </Block>
                  <Block>
                    <Text center h4>{this.state.currentPlace}  </Text>
                  </Block>
                  {/* {this.state.currentPlace}  */}
                </Block>
          <FetchLocation onGetLOcation={this.getUserLocation} />
            </Block>

        </Block>


      </Block>
        );
    }
}
export default MapLocation;

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

    },
    cardbottom:{
      backgroundColor:"white",
      width:width,
      height:height/6,
      position:"absolute",
      bottom:0,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      alignItems:"flex-end",




    }
  });
