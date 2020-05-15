
import {createAppContainer, ScrollView} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import firebase, { auth } from "firebase";
import config from '../config/firebase';
import Screens from './Screens';
import ScreensDR from './ScreensForDriver';
import Auth from './Auth';


const AppNavigator = createStackNavigator({
   Auth,
   Screens,
   ScreensDR
},{
   
    headerMode: false
});




export default createAppContainer(AppNavigator);