// Stores the active TCP connection object.
let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume(); 
  
  //check for the ctrl + c input and terminate the game
  stdin.on('data', function handleUserInput(key) {
    if (key === '\u0003') {
      process.exit();
    }
    else if (key === 'w') {
      connection.write("Move: up");
      // console.log("Move: up")
    }
    else if (key === 'a') {
      connection.write("Move: left");
      // console.log("Move: left")
    }
    else if (key === 's') {
      // console.log("Move: down");
      connection.write("Move: down");
      // console.log("Move: down")
    }
    else if (key === 'd') {
      connection.write("Move: right");
      // console.log("Move: right")
    }
    else if (key === 'x') {
      connection.write("Say: passing through")
      console.log("Message!")
    }
  })
return stdin;
}

module.exports = { setupInput };