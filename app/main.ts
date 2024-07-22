/** @format */

import * as net from "net";

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from Test Program will appear here!");

const server = net.createServer((socket) => {
  socket.write(Buffer.from(`HTTP/1.1 200 OK\r\n\r\n`));

  socket.end();
});

server.listen(4221, "localhost", () => {
  console.log("Server is running on port 4221");
});
