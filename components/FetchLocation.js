import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

const FetchLocation = (props) => {
    return(
     <Button title="Get Location" onPress={props.onGetLOcation}/>
    );
}
export default FetchLocation;

const styles = StyleSheet.create({
    
    
});
