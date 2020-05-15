/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Alert
} from "react-native";
import Block from '../components/Block';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';
import firebase, { auth } from "firebase";
import config from '../config/firebase';
class Menu extends Component {
  
    render() {
        const {navigation} = this.props;
        return (
            <KeyboardAvoidingView style={{flex:1}}  behavior="height" enabled>
          <Block center middle>
              <Block middle>
                    <Image source={require('../assets/Src/img/logo.png')}
                    style={{height:70,width:70}}
                    />
                    
                </Block>
                <Block center flex={2.3}>
                <Text h3
                    // size={28} 
                    // // color="#2e384d" 
                    // spacing={0} 
                    // height={32} 
                    // weight={'normal'}
                     style={{marginBottom:5}}
                    >
                    Continue With FollowMe</Text>
                    
                    <Text 
                    paragraph
                    color="black3"
                    // size={15} 
                    // color="#8798ad" 
                    // spacing={0} 
                    // height={22} 
                    // weight={'normal'} 
                    >It's Your Choice.</Text>
                    <Block style={{marginTop:40}} >
                    <Button style={{marginBottom:10,flexDirection:'row'}} color="white">
                    <Image source={require('../assets/Src/Social/Google.png')}
                        style={{height:30,width:30,marginRight:20}}
                        />
                        <Text button color="black">
                        
                        Continue With Google
                        </Text>

                        
                    
                </Button>
                <Button style={{marginBottom:10,flexDirection:'row'}} onPress={()=>navigation.navigate('Register')}>
                    <Image source={require('../assets/Src/Social/envelope.png')}
                        style={{height:30,width:30,marginRight:20}}
                        />
                    <Text button >
                   
                        Continue With Email   </Text>
                </Button>
                </Block>
                </Block>
          </Block>
          </KeyboardAvoidingView>
        );
    }
}
export default Menu;

const styles = StyleSheet.create({
    container: {
      
    }
});