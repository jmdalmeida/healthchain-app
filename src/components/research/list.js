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
import Header from '../header';

const MedicalPrescriptionIcon = require('../../assets/medical-prescription.png');
const MedicalAppointmentIcon = require('../../assets/medical-appointment.png');
const VaccinationIcon = require('../../assets/medical-vaccination.png');

let trials = [
  { label: 'medical trial', icon: MedicalPrescriptionIcon, subtitle: 'New flu shot', id: 1, active: true },
  { label: 'medical trial', icon: VaccinationIcon, subtitle: 'Hepatitis A new treatment', id: 2, open: true },
  { label: 'Flu', photo: 'aa', subtitle: 'sub', id: 4, elegible: true },
  { label: 'Flu', photo: 'aa', subtitle: 'sub', id: 5, elegible: true },
]

export default class Trials extends Component {
  state = {
    trials
  }

  navigateToItem(title) {
    this.props.navigator.push({
      title,
      component: TrialDetail,
      route: 'trial-detail'
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
        <Header text="Research" color="#ff2d55" />
        <ScrollView style={styles.scrollView} contentInset={{bottom: 150}}>
          <CategoryTitle text="On going research" />
          { activeTrials.map((trial) => <TrialListItem onPress={this.navigateToItem.bind(this, trial.title)} key={trial.id} {...trial} />) }
          <CategoryTitle text="Open enrollment" />
          { openTrials.map((trial) => <TrialListItem onPress={this.navigateToItem.bind(this, trial.title)} key={trial.id} {...trial} />) }
          <CategoryTitle text="Research elegibility" />
          { elegibleTrials.map((trial, index) => <TrialListToggle onValueChange={this.changeItemValue.bind(this, trial)} key={`${trial.id}-${trial-index}`} {...trial} value={trial.elegible} />) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 56,
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 56
  },
  pageTitle: {
    fontSize: 24
  }
});
