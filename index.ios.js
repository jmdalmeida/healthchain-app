import React, { Component } from 'react';
import { View, NavigatorIOS, AppRegistry } from 'react-native';
import Profile from './src/components/profile';
import Trials from './src/components/trials/list';
import BottomBar from './src/components/bottom-bar';
import History from './src/components/history/list';
import Insurance from './src/components/insurance';
import TrialDetail from './src/components/trials/detail';
import HistoryDetail from './src/components/history/detail';

const ProfileIcon = require('./src/assets/id-picture.png');
const HistoryIcon = require('./src/assets/history.png');
const TrialsIcon = require('./src/assets/trials.png');
const InsuranceIcon = require('./src/assets/insurance.png');

const BottomBarItems =  [
  { title: 'Research', icon: TrialsIcon, component: Trials, route: 'trials' },
  { title: 'History', icon: HistoryIcon, component: History, route: 'history' },
  { title: 'Profile', icon: ProfileIcon, component: Profile, route: 'profile' },
  { title: 'Insurance', hide: true, icon: ProfileIcon, component: HistoryDetail, route: 'history-detail' },
  { title: 'Trial Detail', hide: true, icon: InsuranceIcon, component: Insurance, route: 'insurance' },
  { title: 'History Detail', hide: true, icon: ProfileIcon, component: HistoryDetail, route: 'history-detail' },
]

export default class mobile extends Component {
  state = {
    activeRoute: 'insurance'
  }

  onPress(route) {
    this.setState({ activeRoute: route.route })
  }

  renderRoute() {
    let Route = BottomBarItems.filter((item) => {
      return item.route === this.state.activeRoute;
    })[0];

    const push = ({ route }) => {
      this.setState({ activeRoute: route })
    }

    const replace = ({ route }) => {
      this.setState({ activeRoute: route })
    }

    return <Route.component navigator={{push, replace}} />
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderRoute(this.state.activeState)}
        <BottomBar items={BottomBarItems.filter(item => !item.hide)} activeItem={this.state.activeRoute} onItemPress={this.onPress.bind(this)}/>
      </View>
    );
  }}

AppRegistry.registerComponent('mobile', () => mobile);
