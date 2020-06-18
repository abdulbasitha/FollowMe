import React from "react";
import {
    View,
    StyleSheet,

} from "react-native";
import Button from './Button';
import Text from './Text';
import Block from "./Block";
const FetchLocation = (props) => {
    return(

     <Button style={{width:"100%"}}  onPress={props.onGetLOcation}>
          <Text button> Start</Text>
         </Button>

    );
}
export default FetchLocation;

const styles = StyleSheet.create({


});
