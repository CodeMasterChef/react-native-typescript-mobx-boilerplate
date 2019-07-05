import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'mobx-react';
import stores from './store';
import AppNavigator from './navigation/appNavigator';

export default class App extends Component {

  state = {
    isReady: false,
  };


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