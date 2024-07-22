/** @format */

import * as net from "net";
// Closing the Socket
const server = net.createServer((socket) => {
  socket.on("close", () => {
    socket.end();
  });

  // Openning the Socket
  const server = net.createServer((socket) => {
    // socket.write("HTTP/1.1 200 OK\r\n\r\n");

    socket.on("data", (data) => {
      const request = data.toString();
      const path = request.split(" ")[1];
      //  const response =
      //    path === "/" ? "HTTP/1.1 200 OK\r\n\r\n" : "HTTP/1.1 404 Not Found\r\n\r\n";
      //  socket.write(response);

      // Updated Response
      let response = 'HTTP/1.1 404 Not Found\r\n\r\n';
      if (path === '/') {
        response = 'HTTP/1.1 200 OK\r\n\r\n';
      }
      if (path.startsWith('/echo/')) {
        response = `HTTP/1.1 200 OK\r\nContent-Type: Plain Text\r\nContent-Length: 3\r\n\r\n${path.split('/echo/')}`;
      }
      socket.write(response);
      socket.end();
    });
  });

  // You can use print statements as follows for debugging, they'll be visible when running tests.

  console.log("Logs from your program will appear here!");

  // Uncomment this to pass the first stage

  server.listen(4221, "localhost", () => {
    console.log("Server is running on port 4221");
  });
})