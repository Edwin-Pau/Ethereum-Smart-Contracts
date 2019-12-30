import web3 from './web3';

// Retrieve the ABI for the KickstarterInstance contract
import KickstarterInstance from './build/KickstarterInstance.json';

// Load up the deployed KickstarterInstance contract from test network
const instance = new web3.eth.Contract(
    JSON.parse(KickstarterInstance.interface),
    '0x0446661227f0D03192e1101b7e145eF8706b9D47'
);

export default instance;