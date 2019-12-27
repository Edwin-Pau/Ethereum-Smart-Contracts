import web3 from './web3';

// Retrieve the ABI for the KickstarterInstance contract
import KickstarterInstance from './build/KickstarterInstance.json';

// Load up the deployed KickstarterInstance contract from test network
const instance = new web3.eth.Contract(
    JSON.parse(KickstarterInstance.interface),
    '0xEf406551CA12417FaEA3006cf737D441599a1903'
);

export default instance;