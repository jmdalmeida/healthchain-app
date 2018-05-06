export const registry = {
  address: '0x0e54e8df39e9387c30e526a8dd39b8a1aa131202',
  abi: [
      {
          "constant": false,
          "inputs": [
              {
                  "name": "trialAddress",
                  "type": "address"
              }
          ],
          "name": "add",
          "outputs": [
              {
                  "name": "",
                  "type": "uint256"
              }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [
              {
                  "name": "index",
                  "type": "uint256"
              }
          ],
          "name": "getTrial",
          "outputs": [
              {
                  "name": "",
                  "type": "address"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "getTrialsCount",
          "outputs": [
              {
                  "name": "",
                  "type": "uint256"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      }
  ]
}

export const trial = {
  abi: [
      {
          "constant": false,
          "inputs": [
              {
                  "name": "_ongoing",
                  "type": "bool"
              }
          ],
          "name": "setOngoing",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "name": "_name",
                  "type": "string"
              },
              {
                  "name": "_description",
                  "type": "string"
              }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "getDescription",
          "outputs": [
              {
                  "name": "",
                  "type": "string"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "getName",
          "outputs": [
              {
                  "name": "",
                  "type": "string"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "isOngoing",
          "outputs": [
              {
                  "name": "",
                  "type": "bool"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      }
  ]
}
