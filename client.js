const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data); //a message sent from the server
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    
  });
  conn.on("connect", () => {
    conn.write("Name: RQI");
  });
 
  // conn.on("connect", () => {
  //   //let timer = 100;
  //   // for (let count = 0; count < 20; count++){
  //   //   setTimeout(() => {
  //   //     conn.write("Move: up"), timer}
  //   //     , timer += 50)
  //   // }
  //     // setTimeout(() => {
  //     //   conn.write("Move: left");
  //     // }, 400)
  //     // setTimeout(() => {
  //     //   conn.write("Move: up");
  //     // }, 600)
  //     // setTimeout(() => {
  //     //   conn.write("Move: left");
  //     // }, 800)
  //     // setTimeout(() => {
  //     //   conn.write("Move: up");
  //     // }, 1000)
  //     // setTimeout(() => {
  //     //   conn.write("Move: left");
  //     // }, 1200)

  // });

  // process.stdin.on('data', (userInput) => {
  //   conn.write(userInput);
  // })
  return conn;
};
module.exports = { connect };