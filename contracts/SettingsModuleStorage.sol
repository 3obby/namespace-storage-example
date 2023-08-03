// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SettingsModuleStorage {
    struct SettingsStore {
        uint256 someSetting;
    }

    function _settingsStore()
        internal
        pure
        returns (SettingsStore storage store)
    {
        assembly {
            // keccak256("SettingsModuleStorage.sol") == 0x490b8631ecda3f6bca6524abe55ce3ec5d0487f5236e1a1c6fda91e2c4869206
            // run the following to compute:
            // yarn hardhat getHash --input SettingsModuleStorage.sol
            store.slot := 0x490b8631ecda3f6bca6524abe55ce3ec5d0487f5236e1a1c6fda91e2c4869206
        }
    }
}
