const net = require("net");
/**
 * Establishes connection with the game server
 */
const connect = function () {
  // LHL server
  // const conn = net.createConnection({
  //   host: "135.23.222.131",
  //   port: 50542,
  // });
  
  // // Local server
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  //Print a message to the screen when the connection is successfully established
  conn.on('connect', function () {
    console.log("Successfully connected to game server")
  })

  // send the server a message in the form: 'Name: SNK' 
  conn.on('connect', () => {
    conn.write('Name: MFC');
  });

//    // If the server is sent a "Move: up" command, it will move our snake up one block 
//    conn.on('connect', () => {
//     conn.write("Move: up");
// //when using setTimeout, we must wit for each action to happen    
//     setTimeout(() => {conn.write("Move: up")}, 50);
// // if we use setInterval without using clearInterval, it goes on and on infinitely
//     setInterval(() => { conn.write("Move: up")}, 50)
//     setInterval(() => { conn.write("Move: up")}, 50)
//     setInterval(() => { conn.write("Move: left")}, 50)
//   });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handle for receiving incoming message from server
  conn.on('data', (data) => {
    console.log(data, "It's got a sharp tongue, this server!")
  })

  return conn;
};


 module.exports = connect;