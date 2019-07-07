import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import CounterStore from '../../store/counterstore';
import { observer, inject } from 'mobx-react';
import { DefaultNavigationOptions } from '../../constants/defaultHeaderStyle';
import { appRoute } from '../../navigation/appRoute';

interface props {
  counterStore: CounterStore;
  navigation: any;
}

@inject('counterStore')
@observer
class ProfileScreen extends Component<props, {}> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    ...DefaultNavigationOptions,
  });

  render() {
    return (
      <View
        style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}
      >
        <Text style={{ alignSelf: 'center', fontSize: 40 }}>
          
          Counter value {this.props.counterStore.counter}{' '}
        </Text>
        <Button
          onPress={this.props.counterStore.decrement}
          title='Decrement '
        />
        <Button
          onPress={()=>{this.props.navigation.navigate(appRoute.homeScreen)}}
          title='Go back '
        />
      </View>
    );
  }
}

export default ProfileScreen;
