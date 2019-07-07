import * as React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { appRoute } from './appRoute';
import HomeScreen from '../screens/home-screen/homeScreen';
import { Colors } from '../constants/colors';
import ProfileScreen from '../screens/profile-screen/profileScreen';

/***
 * HOME TAB
 */

const homeRoute = {
  [appRoute.homeScreen]: HomeScreen,
}

const homeStack = createStackNavigator(homeRoute);

homeStack.navigationOptions = () => ({
  tabBarLabel: 'home',
  tabBarOptions: {
    showLabel: true,
    activeTintColor: Colors.tabIconSelected,
  },
  tabBarIcon: ({focused}) => (
    <FontAwesome name='home' size={26} style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />
  ),
});


/***
 * MORE TAB
 */

const moreRoute = {
  [appRoute.profileScreen]: ProfileScreen,
}

const moreStack = createStackNavigator(moreRoute);

moreStack.navigationOptions = () => ({
  tabBarLabel: 'profile',
  tabBarOptions: {
    showLabel: true,
    activeTintColor: Colors.tabIconSelected,
  },
  tabBarIcon: ({focused}) => (
    <MaterialIcons name='menu' size={26} style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />
  ),
});

export default createBottomTabNavigator({
  homeStack,
  moreStack,
}, {
    initialRouteName: 'homeStack'
  });
