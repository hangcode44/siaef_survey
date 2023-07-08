module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      //host: "127.0.0.1",
      host:"ec2-3-105-228-124.ap-southeast-2.compute.amazonaws.com",
      //port: 7545,
      port: 8545,
      network_id: "*" // Match any network id
    },
    //develop: {
      //port: 8545
    //}
  }
};
