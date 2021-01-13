
const connect = require('./client')

console.log("Connecting ...");
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume(); 
  
  //check for the ctrl + c input and terminate the game
  stdin.on('data', function handleUserInput(key) {
    if (key === '\u0003') {
      process.exit();
    }
  })

return stdin;
}

setupInput();

