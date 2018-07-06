import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  View,
  Alert,
  Platform,
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
    myTrials: [],
    activeTrials: [],
    isLoading: true,
    elegibleTrials: [
      {
        open: false,
        description: 'Asthma',
        id: 10,
        elegible: true
      },
      {
        open: false,
        description: 'Common cold',
        id: 11
      },
      {
        open: false,
        description: 'Diabetes',
        id: 12,
        elegible: true
      }
    ]
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
    this.setState({ isLoading: true });

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
        this.setState({ isLoading: false, trials: this.state.trials.concat(onGoingTrials) })
      })
  }

  navigateToItem(title) {
    // this.props.navigator.push({
    //   title,
    //   component: TrialDetail,
    //   route: 'trial-detail'
    // })
  }

  changeItemValue(updatedTrial) {
    updatedTrial.elegible = !updatedTrial.elegible;
    let isIos = Platform.OS === 'ios';

    setTimeout(() => {
      Alert.alert(
        'New trial available!',
        `${updatedTrial.description} - New drug`,
        [
          {
            text: 'See more',
            onPress: () => console.log('Cancel Pressed'),
            // style: 'cancel',
          },
          {
            text: 'Enrol',
            onPress: () => {
              let coldTrial = { ...updatedTrial, label: 'New drug' };
              this.setState({ activeTrials: [coldTrial] })
            },
          },
        ]
      );
    }, 2000);

    let trials = this.state.trials.reduce((acc, trial) => {
      if (trial.id === updatedTrial.id) {
        trial = updatedTrial; 
      }
        
      return acc.concat(trial);
    }, []);

    this.setState({ trials });
  }

  render() {
    let { isLoading } = this.state;
    let { activeTrials } = this.state;
    let openTrials = this.state.trials.filter(trial => trial.open);
    let elegibleTrials = this.state.elegibleTrials;

    return (
      <View style={styles.wrapper}>
        <Header text="Research" color="#ff2d55" />
        <ScrollView style={styles.scrollView} contentInset={{bottom: 150}}>
          <CategoryTitle text="Ongoing research" />
          { activeTrials.length === 0 && isLoading && <ActivityIndicator size="large" color="#4a4a4a" /> }
          { activeTrials.map((trial) => <TrialListItem onPress={this.navigateToItem.bind(this, trial.title)} key={trial.id} {...trial} />) }
          { activeTrials.length === 0 && !isLoading && <Text style={{color: '#4a4a4a', paddingLeft: 20}}>There are no active trials at the moment</Text> }
          <CategoryTitle text="Open enrollment" />
          { openTrials.map((trial) => <TrialListItem onPress={this.navigateToItem.bind(this, trial.title)} key={trial.id} {...trial} />) }
          { openTrials.length === 0 && isLoading && <ActivityIndicator size="large" color="#4a4a4a" /> }
          <CategoryTitle text="Research elegibility" />
          { elegibleTrials.map((trial, index) => <TrialListToggle onValueChange={this.changeItemValue.bind(this, trial)} key={`${trial.id}-${trial-index}`} {...trial} value={trial.elegible} />) }
          { elegibleTrials.length === 0 && isLoading && <ActivityIndicator size="large" color="#4a4a4a" /> }
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
    paddingBottom: 56,
    flex: 1
  },
  pageTitle: {
    fontSize: 24
  }
});
