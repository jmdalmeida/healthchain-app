import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NavigatorIOS
} from 'react-native';
import TrialListItem from './list-item';
import TrialDetail from './detail';

export default class Trials extends Component {
  state = {
    trials: [
      { title: 'Flu', photo: 'aa', subtitle: 'sub', id: 1 },
      { title: 'Cancer', photo: 'aa', subtitle: 'sub', id: 2 },
      { title: 'Leuchemia', photo: 'aa', subtitle: 'sub', id: 3 },
      { title: 'Sarampus', photo: 'aa', subtitle: 'sub', id: 4 },
    ]
  }

  navigateToItem(title) {
    this.props.navigator.push({
      title,
      component: TrialDetail
    })
  }

  render() {
    return (
      <View style={styles.wrapper}>
        { this.state.trials.map((trial) => <TrialListItem onPress={this.navigateToItem.bind(this, trial.title)} key={trial.id} {...trial} />) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 64,
    flexGrow: 1,
    padding: 8
  }
});
