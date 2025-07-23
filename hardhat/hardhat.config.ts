import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
};

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    coredao_testnet: {
      url: process.env.COREDAO_TESTNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1115, // CoreDAO testnet chain ID
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY,
      coredao_testnet: process.env.COREDAO_API_KEY, // If CoreDAO requires a custom API key
    },
    customChains: [
      {
        network: "coredao_testnet",
        chainId: 1115,
        urls: {
          apiURL: "https://api.testnet.coredao.org/api", // Replace with actual CoreDAO explorer API
          browserURL: "https://testnet.coredao.org", // Replace with actual CoreDAO explorer URL
        },
      },
    ],
  },
};

export default config;
