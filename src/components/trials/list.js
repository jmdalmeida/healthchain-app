import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  NavigatorIOS,
} from 'react-native';
import TrialListItem from './list-item';
import TrialListToggle from './list-toggle';
import TrialDetail from './detail';
import CategoryTitle from '../category-title';

let trials = [
  { title: 'Flu', description: 'asdasdsda', photo: 'aa', subtitle: 'sub', id: 1, active: true },
  { title: 'Flu', description: 'asdasdsda', photo: 'aa', subtitle: 'sub', id: 2, active: true },
  { title: 'Flu', description: 'asdasdsda', photo: 'aa', subtitle: 'sub', id: 3, open: true },
  { title: 'Flu', description: 'asdasdsda', photo: 'aa', subtitle: 'sub', id: 4, elegible: true },
  { title: 'Flu', description: 'asdasdsda', photo: 'aa', subtitle: 'sub', id: 5, elegible: true },
  { title: 'Flu', description: 'asdasdsda', photo: 'aa', subtitle: 'sub', id: 6, open: true },
]

export default class Trials extends Component {
  state = {
    trials
  }

  navigateToItem(title) {
    this.props.navigator.push({
      title,
      component: TrialDetail
    })
  }

  changeItemValue(updatedTrial) {
    updatedTrial.elegible = !updatedTrial.elegible;

    let trials = this.state.trials.reduce((acc, trial) => {
      if (trial.id === updatedTrial.id) {
        trial = updatedTrial; 
      }
        
      return acc.concat(trial);
    }, []);

    this.setState({ trials });
  }

  render() {
    let activeTrials = this.state.trials.filter(trial => trial.active);
    let openTrials = this.state.trials.filter(trial => trial.open);
    let elegibleTrials = this.state.trials;

    return (
      <View style={styles.wrapper}>
        <ScrollView automaticallyAdjustContentInsets={false}>
          <CategoryTitle text="Active" />
          { activeTrials.map((trial) => <TrialListItem onPress={this.navigateToItem.bind(this, trial.title)} key={trial.id} {...trial} />) }
          <CategoryTitle text="Open" />
          { openTrials.map((trial) => <TrialListItem onPress={this.navigateToItem.bind(this, trial.title)} key={trial.id} {...trial} />) }
          <CategoryTitle text="Elegibility" />
          { elegibleTrials.map((trial, index) => <TrialListToggle onValueChange={this.changeItemValue.bind(this, trial)} key={`${trial.id}-${trial-index}`} {...trial} value={trial.elegible} />) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 8
  }
});
