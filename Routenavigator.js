/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import Login from './Login';
import Splash from './Splash';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';


const AppNavigator = createSwitchNavigator({
Splash :{
    screen: Splash
},
Login :{
    screen:Login
},


},{

    initialRouteName:'Splash'
});
// export default SplashController;
 export default createAppContainer(AppNavigator);
