import web3 from './web3';

// Retrieve the ABI for the KickstarterInstance contract
import KickstarterInstance from './build/KickstarterInstance.json';

// Load up the deployed KickstarterInstance contract from test network
const instance = new web3.eth.Contract(
    JSON.parse(KickstarterInstance.interface),
    '0xf38E0ff87B4a571cF06e85A667a74c8D2EE48140'
);

export default instance;