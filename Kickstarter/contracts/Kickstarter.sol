pragma solidity ^0.4.17;

contract Kickstarter {
    // Struct definition for a Request to spend contract ethereum
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
    }
    
    // Contract holds an array of Requests
    Request[] public requests;
    
    // Contract data members
    address public manager;
    uint public minimumContribution;
    address[] public contributors;
    
    // Modifier function to be used for the functions below
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    // Constructor function for this contract
    function Kickstarter(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }
    
    // Contribute function, value sent in wei along must meet the minimum contribution amount
    function contribute() public payable {
        require(msg.value > minimumContribution);
        contributors.push(msg.sender);
    }
    
    // Function to create a Request for this contract
    function createRequest(string description, uint value, address recipient) public restricted {
        // storage keyword changes how the variable behave. Makes the variable point to the storage data structure
        // memory keyword creates a copy of the object in memory, and makes the variable point to this temp object
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false
        });
        
        requests.push(newRequest);
    }
}