/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from "react-native";
import Text from './Text';
import * as theme from '../contants/theme';
const {width} = Dimensions.get("window");
class Button extends Component {
    
    render() {
        const {style,full,opacity,color,...props} =this.props;
        const ButtonStyle = [
               styles.button,
               styles.full,
               color && color === 'white' && styles.white,
               
                style,
                
                
                

        ] ;
       

        return (
            <TouchableOpacity
            style={ButtonStyle}{...props}
            activeOpacity={opacity||.8}
            
            >
            
             </TouchableOpacity>
           
        );
    }
}

export default Button;




const styles = StyleSheet.create({
   button:{
    backgroundColor:theme.colors.blue,
    borderRadius:4,
    fontSize:15,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    
   },
   full:{
       width:width-50
   },
   white: { backgroundColor: theme.colors.white, },
});

// width: 325px;
// height: 50px;
// background: transparent;
