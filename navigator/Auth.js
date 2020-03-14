import {createAppContainer, ScrollView} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Menu from '../Screens/Menu';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Forgot from '../Screens/Forgot';

const AppNavigator = createStackNavigator({
    Menu,
    Login,
    Forgot,
    Register





},
{
    defaultNavigationOptions:{
        headerShown: false
    }
}
);
export default createAppContainer(AppNavigator);