import { registry, trial } from './contract';
import config from '../../config';

const {promisify} = require("es6-promisify");
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(config.httpProvider));

const getAccounts = promisify(web3.eth.getAccounts);

const isConnected = () => web3.isConnected();

const getRegistry = () => {
  let contractAbi = web3.eth.contract(registry.abi);

  return contractAbi.at(registry.address);
}

const getTrial = (address) => {
  let contractAbi = web3.eth.contract(trial.abi);

  return contractAbi.at(address);
}

const getTrialsCount = (account) => {

}


export { web3, getTrial, getRegistry, getAccounts, isConnected };
