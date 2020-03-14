
import {createAppContainer, ScrollView} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import firebase, { auth } from "firebase";
import config from '../config/firebase';
import Screens from './Screens';
import Auth from './Auth';


const AppNavigator = createStackNavigator({
   Auth,
   Screens
},{
   
    headerMode: false
});




export default createAppContainer(AppNavigator);