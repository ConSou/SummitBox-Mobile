import React from 'react';
import Landing from './components/Landing';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import InfoScreen from './components/InfoScreen';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {StackNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = createStackNavigator({
  Landing: {
    screen: Landing,
    // navigationOptions: {
    //   header: null
    // }
  },
  Login: {
    screen: LoginScreen,
    // navigationOptions: {
    //   header: null
    // }
  },
  Signup: {
    screen: SignupScreen,
    // navigationOptions: {
    //   header: null
    // }
  },
  Info: {
    screen: InfoScreen
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
