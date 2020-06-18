
import {createAppContainer, ScrollView} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Splash from '../Screens/Splash';
import Track from '../Screens/Track';
import Login from '../Screens/Login';
import Map from '../Screens/Map';
import TimeLine from '../Screens/TimeLine';
import Logout from '../Screens/Logout';
import Search from '../Screens/Search';
import Reg from '../Screens/Extra-Ui/Registration';
const ScreenContainer =  createDrawerNavigator ({
    Home:{screen:Track},
    Track:{screen:Map,navigationOptions: {
        drawerLabel: () => null
    }},
    Logout:{screen:Logout},
    TimeLine,
    Search

//  Reg,
//  Map,



});
export default createAppContainer(ScreenContainer);