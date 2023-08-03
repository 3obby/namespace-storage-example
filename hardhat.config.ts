import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./scripts/hash";
import "hardhat-generate-storage-namespace";

import { task } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

task("getHash", "Gets the hash of an input string")
  .addParam("input", "The input string")
  .setAction(async (taskArgs, hre) => {
    const result = await hre.getHash(taskArgs.input);
    console.log(result);
  });

export default config;
