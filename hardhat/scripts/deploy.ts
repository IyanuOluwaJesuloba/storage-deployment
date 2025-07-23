import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const Storage = await ethers.getContractFactory("Storage");
  const storage = await Storage.deploy({ gasPrice: ethers.utils.parseUnits("50", "gwei") });
  await storage.waitForDeployment();
  const address = await storage.getAddress();
  console.log("Storage deployed to:", address);
  fs.writeFileSync("deployed-address.txt", address);
  return address;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });