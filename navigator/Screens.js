
import {createAppContainer, ScrollView} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Splash from '../Screens/Splash';
import Track from '../Screens/Track';
import Login from '../Screens/Login';
import Map from '../Screens/Map';
import Logout from '../Screens/Logout';
import Reg from '../Screens/Extra-Ui/Registration';
const ScreenContainer =  createDrawerNavigator ({
    Home:{screen:Track},
    Logout:{screen:Logout},
    
//  Reg,
//  Map,
 


});
export default createAppContainer(ScreenContainer);