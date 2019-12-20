import web3 from './web3';

// Retrieve the ABI for the KickstarterInstance contract
import KickstarterInstance from './build/KickstarterInstance.json';

// Load up the deployed KickstarterInstance contract from test network
const instance = new web3.eth.Contract(
    JSON.parse(KickstarterInstance.interface),
    '0x559e4cFCf35468B1e8971aBEA463eF6d25f77Bec'
);

export default instance;