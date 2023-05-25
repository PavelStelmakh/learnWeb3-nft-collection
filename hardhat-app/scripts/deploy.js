require("hardhat");
const {
  WHITELIST_CONTRACT_ADDRESS,
  METADATA_URL
} = require('../constants');

async function main() {
  const cryptoDevsContract = await ethers.getContractFactory('CryptoDevs');
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    METADATA_URL,
    WHITELIST_CONTRACT_ADDRESS
  );

  await deployedCryptoDevsContract.deployed();

  console.log('Crypto Devs Contract Address: ', deployedCryptoDevsContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
