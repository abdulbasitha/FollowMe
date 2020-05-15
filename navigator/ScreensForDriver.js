
import {createAppContainer, ScrollView} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Splash from '../Screens/Splash';
import TrackDR from '../Screens/TrackDR';
import Login from '../Screens/Login';
import MapDR from '../Screens/MapDR';
import Logout from '../Screens/Logout';
import Reg from '../Screens/Extra-Ui/Registration';
const ScreenContainer =  createDrawerNavigator ({
    HomeDR:{screen:TrackDR},
    TrackDR:{screen:MapDR,navigationOptions: {
        drawerLabel: () => null
    }},
    Logout:{screen:Logout},
    
//  Reg,
//  Map,
 


});
export default createAppContainer(ScreenContainer);