/** @format */

import * as net from "net";
// Closing the Socket
const server = net.createServer((socket) => {
  socket.on("close", () => {
    socket.end();
  });

  // Openning the Socket
  // const server = net.createServer((socket) => {
  // socket.write("HTTP/1.1 200 OK\r\n\r\n");

  socket.on("data", (data) => {
    const request = data.toString();
    const path = request.split(" ")[1];
    const content_type = "Plain Text";

    //  const response =
    //    path === "/" ? "HTTP/1.1 200 OK\r\n\r\n" : "HTTP/1.1 404 Not Found\r\n\r\n";
    //  socket.write(response);

    // Updated Response
    let response = "HTTP/1.1 404 Not Found\r\n\r\n";
    if (path === "/") {
      response = "HTTP/1.1 200 OK\r\n\r\n";
    }

    if (path.startsWith("/echo/")) {
      const resp_body = path.slice("/echo/".length);
      // console.log(path);
      // console.log(resp_body);
      response = `HTTP/1.1 200 OK\r\nContent-Type: ${content_type}\r\nContent-Length: ${resp_body.length}\r\n\r\n${resp_body}`;
    }

    // Testing for User-Client
    if (path === "/user-client") {
      const resp_body = request.split("\r\n").find((el) => el.toLowerCase().includes("user-client:"));
      //!
      //  .slice("user-client:".length)
      //  .trim();
      console.log("request", request.split("\r\n"));
      console.log("resp_body",resp_body);
      response = `HTTP/1.1 200 OK\r\nContent-Type: ${content_type}\r\nContent-Length: ${resp_body.length}\r\n\r\n${resp_body}`;
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
