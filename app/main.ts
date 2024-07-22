/** @format */

import * as net from "net";
import { readFileSync, statSync } from "fs";

// Closing the Socket
const server = net.createServer((socket) => {
  socket.on("close", () => {
    socket.end();
  });

  // Openning the Socket

  socket.on("data", (data) => {
    const request = data.toString();
    const path = request.split(" ")[1];
    const content_type = "text/plain";

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
    if (path === "/User-Agent") {
      const resp_body = request
        .split("\r\n")
        .find((el) => el.toLowerCase().includes("User-Agent:"))!
        .slice("User-Agent:".length)
        .trim();
      console.log("request", request.split("\r\n"));
      console.log("resp_body", resp_body);
      response = `HTTP/1.1 200 OK\r\nContent-Type: ${content_type}\r\nContent-Length: ${resp_body.length}\r\n\r\n${resp_body}`;
    }

    // Testing for Files
    if (path.startsWith("/files/")) {
      const resp_body = request;
      const fileName = path.slice("/files/".length);
      //const fileSize = statSync("tmp/" + fileName).size;
      const fileSize = statSync(process.argv[3] + fileName).size;
      response = `HTTP/1.1 200 OK\r\nContent-Type: application/octet-stream\r\nContent-Length: ${fileName}\r\n\r\n${resp_body}`;
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
