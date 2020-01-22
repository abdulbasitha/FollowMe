/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";

import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,
    SafeAreaView,
    Alert
} from "react-native";

class Login extends Component {
state = {
    name:null,
    emai:null,
    pass:null,
    busno:null
}
Test = ()=>{
   if(this.state.name ==null || this.state.email ==null || this.state.pass ==null || this.state.busno ==null)
       return;
    else
    Alert.alert('somthing');



    
   
}
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.signupText}>Signup</Text> 
                </View>

                <View style={styles.registersection}>

                    <View style={styles.cardview}>
                    <View style={styles.elememts}>
                        <TextInput placeholder="Name" autoFocus onChangeText={(name)=>this.setState({name})}/>
                    </View>
                    <View style={styles.elememts}>
                    <TextInput placeholder="email" autoCompleteType="email" onChangeText={(email)=>this.setState({email})}/>
                    </View>
                    <View style={styles.elememts}>
                    <TextInput placeholder="Your Bus Number" onChangeText={(busno)=>this.setState({busno})}/>
                    </View>
                    <View style={styles.elememts}>
                    <TextInput placeholder="Password" onChangeText={(pass)=>this.setState({pass})}/>
                    </View>

                    <View style={styles.submit}>
                        <TouchableOpacity  style={styles.button}  onPress={this.Test}>
                            <Text> Signup</Text>
                            </TouchableOpacity>
                    </View>
                    </View>
                   
                </View>
              
              </SafeAreaView>  
            
        );
    }
}
export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    signupText:{
            fontSize:20,
            fontWeight:"bold",

    },
    registersection:{
        flex:3,
        paddingHorizontal:20
        

    },
    elememts:{
        backgroundColor:'gray',
        margin:10,
        
    },
    submit:{
            backgroundColor:'blue',
            alignItems:'center',
            padding:20,
            margin:10,
    },
    button:{
       width:"100%",
       justifyContent:'center',
       alignItems:'center',
        
    },
    cardview:{
     
    }
    
});