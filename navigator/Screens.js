
import {createAppContainer, ScrollView} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Splash from '../Screens/Splash';
import Track from '../Screens/Track';
import Login from '../Screens/Login';
import Map from '../Screens/Map';
import Reg from '../Screens/Extra-Ui/Registration';
const ScreenContainer =  createDrawerNavigator ({
    Track
//  Reg,
//  Map,
 


});
export default createAppContainer(ScreenContainer);