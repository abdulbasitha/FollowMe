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
    SafeAreaView,StatusBar
} from "react-native";

class MapLocation extends Component {
    state = {
        appState: AppState.currentState,
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
        
        const {navigation} = this.props;
        const toggleDrawer = () => {
            navigation.openDrawer();
          }
        return (
        <Block style={styles.container}>
            <StatusBar barStyle = "light-content"  backgroundColor = {theme.colors.status_bar} />
            <Head name="Current Location" Option={toggleDrawer}/>
        <Block style={styles.map} >
          <ViewLocation Location={this.state.viewLocation}/>
        </Block>

        {/* <Button color="green" title="Track" onPress={this.Call}/> */}
     
        <Block flex={.2} center middle>
        <Button   style={{marginBottom:12}} onPress={this.Call}> 
                    <Text button >Locate</Text>
                    
                </Button>
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
  
    }
  });
  