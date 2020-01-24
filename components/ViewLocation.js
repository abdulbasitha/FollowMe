import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

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
