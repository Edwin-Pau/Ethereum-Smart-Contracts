const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// Import the entire source code for both contracts
const compiledKickstarterInstance = require('../ethereum/build/KickstarterInstance.json');
const compiledKickstarter = require('../ethereum/build/Kickstarter.json')

let accounts;
let instance;
let kickstarterAddress;
let kickstarter;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    instance = await new web3.eth.Contract(JSON.parse(compiledKickstarterInstance))
        .deploy({ data: compiledKickstarterInstance.bytecode })
        .send({ from: accounts[0], gas: '1000000' });
})