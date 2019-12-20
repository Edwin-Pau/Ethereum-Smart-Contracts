import web3 from './web3';
import Kickstarter from './build/Kickstarter.json';

// Create a function to be used for the display page.
export default (address) => {
    return new web3.eth.contract(JSON.parse(Kickstarter.interface), address);
};