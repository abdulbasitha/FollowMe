import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = 'AIzaSyCSRXncujncTlkXkv2O1CJVV4iR876duPE';

const UserMaps = (props) => {
 //  console.log(props.Location);

   let LocationMarker=null;
   if(props.Location){
        LocationMarker =  <MapView.Marker coordinate={props.Location} /> ;
   }
    return(

   <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            region={props.Location}

            >
               <MapViewDirections
            origin={props.initialLocation}
            destination={{
              latitude: 11.0384,
              longitude: 76.2627,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
    />
             {LocationMarker}
              </MapView>

    );
}
export default UserMaps;

const styles = StyleSheet.create({
    map: {
        flex: 1,
      },
      container: {
        flex: 1,
      },
      header: {
        flex: 1,
        backgroundColor: 'red',
      },
      body: {
        flex: 8,
        backgroundColor: 'green',
      },
      mapView: {
        height: 325,
        width: 375,
      },
      footer: {
        flex: 2,
        backgroundColor: 'yellow',
      },
});
