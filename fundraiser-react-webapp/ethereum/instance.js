import web3 from './web3';

// Retrieve the ABI for the KickstarterInstance contract
import KickstarterInstance from './build/KickstarterInstance.json';

// Load up the deployed KickstarterInstance contract from test network
const instance = new web3.eth.Contract(
    JSON.parse(KickstarterInstance.interface),
    '0x41F08bef7a979620d69ee42A15E992A93c3b1dE4'
);

export default instance;