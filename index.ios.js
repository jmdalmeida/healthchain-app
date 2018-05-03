import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import App from './src/App';

export default class mobile extends Component {
  render () {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('mobile', () => mobile);
