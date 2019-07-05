import { createStackNavigator } from 'react-navigation';
import { appRoute } from './appRoute';
import LoginScreen from '../screens/login-screen/loginScreen';

export const AuthNavigator = createStackNavigator({
  [appRoute.loginScreen]: LoginScreen,
});
