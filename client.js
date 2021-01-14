const net = require("net");
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //Print a message to the screen when the connection is successfully established
  conn.on('connect', function () {
    console.log("Successfully connected to game server")
  })

  // send the server a message in the form: 'Name: SNK' 
  conn.on('connect', () => {
    conn.write('Name: MFC');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handle for receiving incoming message from server
  conn.on('data', (data) => {
    console.log(data, "It's got a sharp tongue, this server!")
  })

  return conn;
};


 module.exports = { connect };