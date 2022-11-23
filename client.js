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
    conn.write("Name: Ray");
  });

  // process.stdin.on('data', (userInput) => {
  //   conn.write(userInput);
  // })
  return conn;
};

module.exports = connect;