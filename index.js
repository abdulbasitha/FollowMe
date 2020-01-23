import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
//import App from './App';
import {name as appName} from './app.json';
//import Login from './Login';
//import Splash from './Splash';
//import Route from './Routenavigator';
import Main from './Main';
AppRegistry.registerComponent(appName, () =>Main);
