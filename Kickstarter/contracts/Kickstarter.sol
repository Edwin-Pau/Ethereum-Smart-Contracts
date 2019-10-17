pragma solidity ^0.4.17;

contract Kickstarter {
    // Struct definition for a Request to spend contract ethereum
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
    }
    
    address public manager;
    uint public minimumContribution;
    address[] public contributors;
    
    // Constructor function
    function Kickstarter(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }
    
    // Contribute function, value sent in wei along must meet the minimum contribution amount
    function contribute() public payable {
        require(msg.value > minimumContribution);
        contributors.push(msg.sender);
    }
}