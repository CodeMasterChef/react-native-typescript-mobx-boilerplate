import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'mobx-react';
import stores from './store';
import AppNavigator from './navigation/appNavigator';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {

  state = {
    isReady: false,
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
        <Provider {...stores}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});