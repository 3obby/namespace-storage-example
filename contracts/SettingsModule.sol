// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SettingsModuleStorage.sol";

contract SettingsModule is SettingsModuleStorage {
    function setSomeSetting(uint newValue) external {
        _settingsStore().someSetting = newValue;
    }

    function getSomeSetting() external view returns (uint) {
        return _settingsStore().someSetting;
    }
}
