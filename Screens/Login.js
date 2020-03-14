/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import Block from '../components/Block';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';
import firebase, { auth } from "firebase";
import config from '../config/firebase';
import { 
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Dimensions,StatusBar, Alert
   
} from "react-native";
const {height} = Dimensions.get('window');
class Login extends Component {
    state =  {
        email: "",
        pass:"",
        error:"",
        loading:""


    }
    login = ()=> {
        if( this.state.email == "" || this.state.pass == "" ){
            Alert.alert("All fields are required")
            return;
            }
        try{
            firebase
            .auth()
            .signInWithEmailAndPassword
            (this.state.email,this.state.pass)
            
            .then((user) => {
                console.log(user);
                Alert.alert("Login ok");
                this.props.navigation.navigate('Track');
              //  this.props.navigation.navigate('Login')

            }).catch((error) => Alert.alert(error.toString(error)));
        }catch (error) {
            console.log(error.toString(error));
          }



      //  this.props.navigation.navigate('Track');
    }
   
    render() {
        //const {navigation} = this.props;
        return (
            <KeyboardAvoidingView style={{flex:1}}  behavior="height" enabled>
                  <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Block center middle >
                <Block middle>
                    <Image source={require('../assets/Src/img/logo.png')}
                    style={{height:70,width:70}}
                    />
                </Block>
                <Block flex={2.3} center>
            
              
                    <Text h3
                    // size={28} 
                    // // color="#2e384d" 
                    // spacing={0} 
                    // height={32} 
                    // weight={'normal'}
                     style={{marginBottom:5}}
                    >
                    Sign in to Zia Tracker</Text>
                    
                    <Text 
                    paragraph
                    color="black3"
                    // size={15} 
                    // color="#8798ad" 
                    // spacing={0} 
                    // height={22} 
                    // weight={'normal'} 
                    >Please enter your credentials to proceed.</Text>
               
                <Block center style={{marginTop:40}}>
                <Input label={"email address"} 
                 onChangeText={(email)=>this.setState({email})} 
                  style={{  marginBottom:15}} 
                  full 
                  email/>
                <Input
                onChangeText={(pass)=>this.setState({pass})} 
                 label={"password"}
                
                rightlabel={

                <Text onPress={()=> navigation.navigate('Forgot') }   paragraph color="gray">Forgot password?</Text>
            
            } 
                
                style={{  marginBottom:25}} password full/>
               

 
                <Button   style={{marginBottom:12}} onPress={this.login}> 
                    <Text button >Sign in</Text>
                </Button>
                <Text paragraph color="gray" >
                    Dont’ have an account? <Text  color="blue" height={18} onPress={()=> this.props.navigation.navigate('Register')}>
                  Sign up</Text>
                </Text>

                </Block>
                </Block>
        </Block>
        </KeyboardAvoidingView>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    
         
          
    
    
    }

);

