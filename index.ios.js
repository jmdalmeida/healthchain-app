import React, { Component } from 'react';
import { NavigatorIOS, AppRegistry } from 'react-native';
import Profile from './src/components/profile';
import Trials from './src/components/trials/list';

export default class mobile extends Component {
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: Trials,
          title: 'Trials'
        }}
        style={{flex: 1, backgroundColor: 'red'}}
      />
    );
  }}

AppRegistry.registerComponent('mobile', () => mobile);
