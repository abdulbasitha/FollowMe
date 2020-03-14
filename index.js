import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
import Reg from './Screens/Track';
import Home from './Home';
AppRegistry.registerComponent(appName, () => Home);
