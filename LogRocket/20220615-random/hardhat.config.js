require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/WAbpZ8tflz_SaH8S2-GXaFlhBKtbvxDG",
       accounts: ["0222b495ee294d6d744eb287f0cb8ec4f9bb4f556b62c25ab536270004d0d88d"]
    }
  }

};
