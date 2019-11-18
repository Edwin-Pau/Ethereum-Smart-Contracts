import Web3 from 'web3';

// Instance of the web3 using injected metamask
const web3 = new Web3(window.web3.currentProvider);

export default web3;