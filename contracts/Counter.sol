//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.13;

contract Counter {
    uint256 public count;

    // Function to get the current count
    function get() public view returns (uint256) {
        return count;
    }

    // Function to increment the count by 1
    function increment() public {
        count = count + 1;
    }

    // Function to decrement the count by 1
    function decrement() public {
        // this function will fail if count = 0
        // because the type of count is uint256
        count = count - 1;
    }
}
