import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ethers } from "ethers";

export async function getHash(input: string, hre: HardhatRuntimeEnvironment) {
  const message = ethers.toUtf8Bytes(input);
  const messageHash = ethers.keccak256(message);

  // Convert the message hash (hex string) to BigInt, subtract 1, and convert back to hex string
  const hashMinusOneBigInt = ethers.toBigInt(messageHash) - 1n;
  const hashMinusOneHex = ethers.toBeHex(hashMinusOneBigInt);

  return hashMinusOneHex;
}

task("hash", "Hashes a string")
  .addParam("str", "The input string")
  .setAction(async (taskArgs, hre) => {
    const hash = await getHash(taskArgs.str, hre);
    console.log(' "' + taskArgs.str + '" : ' + hash);
  });
