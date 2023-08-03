import { ethers } from "hardhat";
import { expect } from "chai";
import { SettingsModule } from "../typechain-types";
import { getHash } from "hardhat";

describe("SettingsModule", function () {
  let settingsModule: SettingsModule;
  console.log(
    "Generated Storage Slot: " + getHash("SettingsModuleStorage.sol")
  );

  beforeEach(async function () {
    const SettingsModuleFactory = await ethers.getContractFactory(
      "SettingsModule"
    );
    settingsModule = (await SettingsModuleFactory.deploy()) as SettingsModule;
    await settingsModule.waitForDeployment();
  });

  it("Should set the new value correctly", async function () {
    await settingsModule.setSomeSetting(5);
    expect(await settingsModule.getSomeSetting()).to.equal(5);
  });

  it("Should return the initial value", async function () {
    expect(await settingsModule.getSomeSetting()).to.equal(0);
  });
});
