//const connect = require("./client");
const net = require("net");
const { connect }  = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ...");
let newConnection = connect();
setupInput(newConnection);
//module.exports = setupInput;