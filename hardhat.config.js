require("@nomiclabs/hardhat-waffle");




// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: process.env.URL,
      accounts: [process.env.KEY],
    },
  },
};

