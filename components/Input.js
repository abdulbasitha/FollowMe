/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    TextInput,
    Dimensions
} from "react-native";
import Text from './Text';
import * as theme from '../contants/theme';
const {width} = Dimensions.get("window");
class Input extends Component {
    
    render() {
        const {label,rightlabel,full,email,number,phone,password,style,...props} =this.props;
        const inputStyle = [
                styles.input,
                full && styles.full,
                style,
                

        ] ;
        const inputType  = 
            email   ?     'email-address' :
            number  ?     'numeric' : 
            phone   ?     'phone-pad':
                          'default'

        return (
            <View>
                <View style={styles.labelContainer}>
                <Text caption medium
             
                style={styles.label} 
        >{label}</Text>
        {rightlabel}
        </View>
            <TextInput style={inputStyle}
            secureTextEntry={password}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={inputType}
            {...props} />
             </View>
           
        );
    }
}

export default Input;




const styles = StyleSheet.create({
    input: {
        backgroundColor:theme.colors.input,
        borderColor:theme.colors.border,
        borderWidth:1,
        borderRadius:5,
        color:theme.colors.black,
        fontSize:theme.sizes.font,
        height:40,
        paddingVertical:11,
        paddingHorizontal:16,
      
     },
     label:{
    textTransform:'uppercase',
        marginBottom:4
     },
     full:{
         width:width - 50
     },
     labelContainer:{
         flexDirection:'row',
         justifyContent:'space-between',
         marginBottom:2
        

     }
   
});