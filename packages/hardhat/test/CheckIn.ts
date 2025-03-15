import { expect } from "chai";
import { ethers } from "hardhat";
import { CheckIn, BatchRegistry } from "../typechain-types";

describe("CheckIn", () => {
  let _checkIn: CheckIn;
  let _batchRegistry: BatchRegistry;

  before(async () => {
    const [owner] = await ethers.getSigners();
    const checkInFactory = await ethers.getContractFactory("CheckIn");
    const batchRegistryFactory = await ethers.getContractFactory("BatchRegistry");
    _batchRegistry = (await batchRegistryFactory.deploy(owner.address, 14)) as BatchRegistry;
    await _batchRegistry.waitForDeployment();
    _checkIn = (await checkInFactory.deploy(_batchRegistry.target)) as CheckIn;
    await _checkIn.waitForDeployment();
  });

  describe("Deployment", () => {
    it("should deploy the contract successfully", async () => {
      expect(_checkIn.target).to.not.equal(0);
    });
    it("should have the right owner", async () => {
      const [owner] = await ethers.getSigners();
      expect(await _checkIn.owner()).to.equal(owner.address);
    });
  });

  describe("CheckIn Function", () => {
    it("should call the checkIn function successfully", async () => {
      const [owner] = await ethers.getSigners();
      await _batchRegistry.updateAllowList([owner.address], [true]);
      const tx = await _checkIn.callCheckIn();
      await tx.wait();
      expect(await _checkIn.owner()).to.equal(owner.address);
    });
  });
});
