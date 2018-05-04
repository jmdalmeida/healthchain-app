import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View
} from 'react-native';
import { isConnected, getContract, getBalance, getAccounts } from './util/ethereum';
import Web3 from 'web3';

const web3Utils = new Web3();

export default class App extends Component {
  state = {
    balance: null,
    account: null,
    contract: null,
    isLoading: false
  };

  async componentDidMount() {
    let [account] = await getAccounts()
    let contract = await getContract();
    let balance = await getBalance(account);

    this.setState({ account, contract, balance: web3Utils.fromWei(balance.toNumber()) });
  }

  getCounter() {
    this.state.contract.getCounter.call((err, counter) => {
      this.setState({ counter: counter.toNumber() })
    })
  }

  incrementCounter() {
    let contract = this.state.contract;

    contract.incrementCounter.sendTransaction({ from: this.state.account }, () => {})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HealthChain</Text>
        <View style={styles.wrapper}>
          <Text>Your account is</Text>
          <Text>{this.state.account}</Text>
          <Text>Counter state is:</Text>
          <Text>{this.state.counter}</Text>
          <Text>Your balance is</Text>
          <Text>{this.state.balance}</Text>
          { this.state.isLoading && <Text>Loading...</Text> }
          <TouchableOpacity style={styles.button} onPress={this.incrementCounter.bind(this)}>
            <Text>
              Increment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.getCounter.bind(this)}>
            <Text>
              Get counter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    marginTop: 16,
    flexGrow: 1,
    height: '100%'
  },
  button: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00adef',
    marginTop: 8
  },
  title: {
    fontSize: 24,
    padding: 8,
    color: 'white',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#00adef'
  },
  balance: {
    color: '#00adef',
    backgroundColor: 'transparent'
  }
});
