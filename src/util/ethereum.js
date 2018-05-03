import { abi, address } from './contract';

const {promisify} = require("es6-promisify");
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://b8b3cac3.ngrok.io'));

const getAccounts = promisify(web3.eth.getAccounts);

const getBalance = function(account) {
  return new Promise((res, rej) => {
    web3.eth.getBalance(account, (err, balance) => {
      if (err) {
        return rej(err);
      }

      res(balance);
    })
  });
}

const isConnected = () => web3.isConnected();

const getContract = () => {
  let contractAbi = web3.eth.contract(abi);

  return contractAbi.at(address);
}


export { getContract, getBalance, getAccounts, isConnected };
