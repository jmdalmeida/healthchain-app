import React, { Component } from 'react';
import { View, NavigatorIOS, AppRegistry } from 'react-native';
import Profile from './src/components/profile';
import Trials from './src/components/trials/list';
import BottomBar from './src/components/bottom-bar';

const ProfileIcon = require('./src/assets/id-picture.png');
const HistoryIcon = require('./src/assets/history.png');
const TrialsIcon = require('./src/assets/trials.png');

const BottomBarItems =  [
  { title: 'Trials', icon: TrialsIcon, component: Trials, route: 'trials' },
  { title: 'History', icon: HistoryIcon, route: 'history' },
  { title: 'Profile', icon: ProfileIcon, component: Profile, route: 'profile' }
]

export default class mobile extends Component {
  state = {
    activeRoute: 'trials'
  }

  onPress(route) {
    this.refs.nav.replace(route);
    this.setState({ activeRoute: route.route })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigatorIOS
          ref='nav'
          initialRoute={{
            component: Trials,
            title: 'Trials'
          }}
          style={{flex: 1}}
        />
        <BottomBar items={BottomBarItems} activeItem={this.state.activeRoute} onItemPress={this.onPress.bind(this)}/>
      </View>
    );
  }}

AppRegistry.registerComponent('mobile', () => mobile);
