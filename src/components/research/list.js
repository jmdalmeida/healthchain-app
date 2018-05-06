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
const {promisify} = require("es6-promisify");

import { registry, trial } from '../../util/contract';
import { web3, getTrial, getRegistry, getAccounts } from '../../util/ethereum';

const MedicalPrescriptionIcon = require('../../assets/medical-prescription.png');
const MedicalAppointmentIcon = require('../../assets/medical-appointment.png');
const VaccinationIcon = require('../../assets/medical-vaccination.png');

export default class Trials extends Component {
  state = {
    trials: [],
    myTrials: []
  }

  async componentDidMount() {
    let [account] = await getAccounts();
    let contract = await getRegistry();
    let trialsCount = await contract.getTrialsCount((_, count) => {
      this.setState({ trialsCount: count.toNumber() }, () => this.getTrials());
    });

    this.setState({ contract, account });
  }

  async getTrials() {
    let { trialsCount, contract, myTrials, account } = this.state;

    for (let i = 0; i < trialsCount; i++) {
      contract.getTrial(i, (_, address) => {
        let contract = getTrial(address)
        this.setState(
          { myTrials: myTrials.concat(contract) }, 
          () => this.formatContracts(i)
        )
      })
    }
  }

  async formatContracts(index) {   
    let trials = this.state.myTrials.map(async (contract) => {
      let isOngoingPromised = promisify(contract.isOngoing)
      let getNamePromised = promisify(contract.getName)
      let getDescriptionPromised = promisify(contract.getDescription)

      return Promise.all([isOngoingPromised(), getNamePromised(), getDescriptionPromised(), Promise.resolve(index)])
    });

    
    let allTrials = await trials;
    let trialsData = allTrials.map(async (singleTrial) => {
      let [isOngoing, label, description, id] = await singleTrial;

      return { open: isOngoing, label, description, id };
    });

    Promise.all(trialsData)
      .then((trials) => {
        let onGoingTrials = trials.filter(trial => trial.open);
        this.setState({ trials: this.state.trials.concat(onGoingTrials) })
      })
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
