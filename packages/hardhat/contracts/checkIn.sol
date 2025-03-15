// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;


interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {

    address public batchRegistryAddress;
    address public owner;

    constructor(address _batchRegistryAddress){
        batchRegistryAddress = _batchRegistryAddress;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Ownable: caller is not the owner");
        _;
    }

    function callCheckIn() public {
        IBatchRegistry batchRegistry = IBatchRegistry(batchRegistryAddress);
        batchRegistry.checkIn();
    }
}