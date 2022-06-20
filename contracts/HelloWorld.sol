//SPDX-License-Identifier: Unlicense

// compiler version must be greater than or equal to 0.8.13 and less than 0.9.0
pragma solidity ^0.8.13;

contract HelloWorld {
    // https://docs.soliditylang.org/en/latest/contracts.html#state-variable-visibility
    // compiler automatically generates getter functions
    string public greet = "Hello world!";
}
