let connection;
// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);// The event listener

  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  //const stdout = process.stdout;
  if ( key === 'a'){
    connection.write('Move: left');
  }
  if ( key === 'w'){
    connection.write('Move: up');
  }
  if ( key === 'd'){
    connection.write('Move: right');
  }
  if ( key === 's'){
    connection.write('Move: down');
  }
  if ( key === '\u0003'){
    process.exit();
  }
  //return stdout;
};

module.exports = { setupInput };