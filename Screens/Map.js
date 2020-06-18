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
  SafeAreaView, StatusBar,
  Dimensions
} from "react-native";
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
class MapLocation extends Component {

  state = {
    appState: AppState.currentState,
    userLacation: null,
    viewLocation: null,
    userPlaces: [],
    initialLocation: {
      latitude: '',
      longitude: '',
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    speed: 0,
    placename: '',
    placesWithTime: [],
    temp: []
  }

  getUserLocation = () => {

    Geolocation.watchPosition(position => {
      // console.log(position);
      this.setState({
        userLacation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      });
      fetch('https://react-native-cli.firebaseio.com/places.json', {
        method: 'POST',
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));

    },
      err => {
        console.log(err);
      });
  }
  Call = () => {
    this.timer = setInterval(()=> this.Tracking(), 1000)
    // this.Tracking();
  }
  Tracking = () => {


    fetch("https://react-native-cli.firebaseio.com/places" + this.props.navigation.getParam('Busno') + ".json")
      .then(res => res.json())
      .then(parsedResult => {
        const placesArray = [];
        for (const key in parsedResult) {
          placesArray.push({
            latitude: parsedResult[key].latitude,
            longitude: parsedResult[key].longitude,
            placename: parsedResult[key].placename,
            id: key
          })
          this.setState({
            placename: parsedResult[key].placename,
            speed: parsedResult[key].speed,

          })

          if (this.state.temp.indexOf(parsedResult[key].placename) == -1) {
            let temp = []
            let Data = {}
            if (parsedResult[key].datetime != undefined && parsedResult[key].placename != undefined) {
              temp.push(parsedResult[key].datetime)
              Data['place'] = parsedResult[key].placename
              Data['time'] = parsedResult[key].datetime
              let newData = []
              newData = this.state.placesWithTime

              // if( newData[parsedResult[key].placename]
              temp = this.state.temp

              temp.push(parsedResult[key].placename)

              newData.push(Data)

              console.log(this.state.temp)
              console.log(this.state.placesWithTime)
              this.setState({
                placesWithTime: newData
              })

            }
          }
          // console.log("stateData",this.state.placesWithTime)
        }
        this.setState({
          initialLocation: {
            latitude: placesArray[0].latitude,
            longitude: placesArray[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          // placename:placesArray[-1].placename,

          viewLocation: {

            latitude: placesArray.slice(-1)[0].latitude,
            longitude: placesArray.slice(-1)[0].longitude,
            latitudeDelta: 0.095,
            longitudeDelta: 0.055
          }
        });
        this.setState({
          userPlaces: placesArray
        })
      })
      .catch(err => console.log(err));

    // console.log(this.state.viewLocation);
  }


  render() {

    const { navigation } = this.props;
    const toggleDrawer = () => {
      navigation.openDrawer();
    }
    const navigateToTimeLine = () => {
     this.props.navigation.navigate('TimeLine',{data: this.state.placesWithTime})
    }
    return (
      <Block style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.status_bar} />
       {this.state.temp ==''?
       <Head name="Current Location" Option={toggleDrawer}  />
      :<Head name="Current Location" Option={toggleDrawer} TimeLine={navigateToTimeLine}   goto={'TimeLine'} icon={'TimeLine'} />

      }
        <Block style={styles.map} >
          <ViewLocation Location={this.state.viewLocation}
            initialLocation={this.state.initialLocation}
          />
        </Block>

        {/* <Button color="green" title="Track" onPress={this.Call}/> */}

        <Block flex={.2} center middle >
          <Block row center middle space="between" >
            <Block>
              <Text center h4>Bus Speed: {parseInt(this.state.speed)} KM/H</Text>
            </Block>
            <Block>
              <Text center h4>{this.state.placename}  </Text>
            </Block>
            {/* {this.state.currentPlace}  */}
          </Block>
        </Block>
        <Button style={{ width: "100%" }} onPress={this.Call} >
          <Text button >Locate</Text>

        </Button>

      </Block>
    );
  }
}
export default MapLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1,

  },
  mapfetch: {
    flex: 1,
    paddingTop: 10

  },
  cardbottom: {
    backgroundColor: "white",
    width: width,
    height: height / 6,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "flex-end",


  }
});
