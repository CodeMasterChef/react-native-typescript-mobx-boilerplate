import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './mainTabNavigator';
import { AuthNavigator } from './authNavigator';


export default createAppContainer(
  createSwitchNavigator({
    MainTabNavigator: MainTabNavigator,
    AuthNavigator: AuthNavigator,

  },
    {
      initialRouteName: 'MainTabNavigator'
    }
  )

);
