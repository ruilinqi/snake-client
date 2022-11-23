const net = require("net");

// establishes a connection with the game server
connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541, // PORT number here,
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
    let timer = 100;
    for (let count = 0; count < 20; count++){
      setTimeout(() => {
        conn.write("Move: up"), timer}
        , timer += 50)
    }
      // setTimeout(() => {
      //   conn.write("Move: left");
      // }, 400)
      // setTimeout(() => {
      //   conn.write("Move: up");
      // }, 600)
      // setTimeout(() => {
      //   conn.write("Move: left");
      // }, 800)
      // setTimeout(() => {
      //   conn.write("Move: up");
      // }, 1000)
      // setTimeout(() => {
      //   conn.write("Move: left");
      // }, 1200)

  });

  // process.stdin.on('data', (userInput) => {
  //   conn.write(userInput);
  // })
  return conn;
};
module.exports = connect;