/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Dimensions,
    Image,
    SafeAreaView,
    TouchableOpacity
  
} from "react-native";
import Text from './Text';
import firebase, { auth } from "firebase";
import config from '../config/firebase';
import * as theme from '../contants/theme';
const {widths} = Dimensions.get("window");
class header extends Component {
    
    render() {
        
        const {style,...props} =this.props;
        const CustomStyle = [
               
                styles,
                

        ] ;
       

        return (
            <SafeAreaView style={styles.container}>
                <View  style={styles.icon} >
                    
                        <TouchableOpacity activeOpacity={.5} onPress={this.props.Option}>
                     <Image source={require('../assets/Src/icons/header/Menu.png')}
                        style={{ height: 13, width: 18 }}
                        />
                        </TouchableOpacity>
                     
                      
                        
                     
                      
                      <TouchableOpacity activeOpacity={0.1} style={{flexDirection:'row',alignItems:"center"}}>
                        <Text h4   color="black" >Track</Text>
                         <Image source={require('../assets/Src/icons/header/Element-Icon-Caret.png')}
                        style={{ height: 6, width: 10 ,marginLeft:5.5}}
                        />
                        </TouchableOpacity>
                        
                       
                       
                        <TouchableOpacity activeOpacity={.5} onPress= {()=>{firebase.auth().signOut()}}>
                        <Image source={require('../assets/Src/icons/header/notification.png')}
                        style={{ height: 21, width: 20 }}
                        />
                        </TouchableOpacity>
                       
                        
                        
                      
                  </View>
             
            </SafeAreaView>
           
        );
    }
}

export default header;




const styles = StyleSheet.create({
   container:{
       flex:0,
       width:"100%",
       paddingTop:20
       
   
       
       
       
       

   },
   icon:{
   
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    alignItems:'center'
    
   }
});