const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // event handle for receiving incoming message from server
  conn.on('data', (data) => {
    console.log(data, "It's got a sharp tongue, this server!")
  })
  return conn;
};

console.log("Connecting ...");
connect();
