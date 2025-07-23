import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY!],
    },
    coredao_testnet: {
      url: process.env.COREDAO_TESTNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 1115,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY!,
      coredao_testnet: process.env.COREDAO_API_KEY!,
    },
    customChains: [
      {
        network: "coredao",
        chainId: 1115,
        urls: {
          apiURL: "https://api.testnet.coredao.org/api", // Replace with actual CoreDAO explorer API
          browserURL: "https://scan.test2.btcs.network", // Replace with actual CoreDAO explorer URL
        },
      },
    ],
  },
};

export default config;
