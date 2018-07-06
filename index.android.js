import 'es6-symbol/implement';
import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import Profile from './src/components/profile';
import Research from './src/components/research/list';
import BottomBar from './src/components/bottom-bar';
import History from './src/components/history/list';
import Colors from './src/enums/colors';
import Insurance from './src/components/insurance';

const BottomBarItems =  [
  {
    title: 'Research',
    icons: {
      default: require('./src/assets/research.png'),
      active: require('./src/assets/research-active.png')
    },
    component: Research,
    route: 'research',
    color: Colors.RESEARCH
  },
  { 
    title: 'History',
    icons: {
      default: require('./src/assets/history.png'),
      active: require('./src/assets/history-active.png')
    },
    component: History,
    route: 'history',
    color: Colors.HISTORY 
  },
  { 
    title: 'Insurance',
    icons: {
      default: require('./src/assets/insurance.png'),
      active: require('./src/assets/insurance-active.png')
    }, 
    component: Insurance,
    route: 'insurance',
    color: Colors.INSURANCE
  },
  { 
    title: 'Profile', 
    icons: {
      default: require('./src/assets/profile.png'),
      active: require('./src/assets/profile-active.png')
    }, 
    component: Profile,
    route: 'profile',
    color: Colors.PROFILE
  }
]

global.__DEV__ = false

export default class mobile extends Component {
  state = {
    activeRoute: 'research'
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
