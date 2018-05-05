import React, { Component } from 'react';
import { NavigatorIOS, AppRegistry } from 'react-native';
import Profile from './src/components/profile'

export default class mobile extends Component {
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: Profile,
          title: 'test'
        }}
        style={{flex: 1}}
      />
    );
  }}

AppRegistry.registerComponent('mobile', () => mobile);
