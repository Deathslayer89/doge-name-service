require("dotenv").config({ path: ".env" });

require("@nomiclabs/hardhat-waffle");


const ALCHEMYURL=process.env.ALCHEMYURL
const PRIVATEKEY=process.env.PRIVATEKEY
module.exports = {
  solidity: "0.8.10",
  networks:{
    mumbai:{
      url:ALCHEMYURL,
      accounts:[PRIVATEKEY],
    }
  }
};
