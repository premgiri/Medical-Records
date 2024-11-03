const Web3 = require("web3");

const web3 = new Web3("http://127.0.0.1:7545");

// console.log(web3);
const privateKey =
  "0x48ea4e269e3220a853b838917309c1c36a18c12bf09d27705a304b446d34bb01";
const myAccount = web3.eth.accounts.wallet.add(privateKey);

console.log(myAccount);

module.exports = {
  web3: web3,
  myAccount: myAccount,
};
