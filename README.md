<!-- @format -->
---
[![progress-banner](https://backend.codecrafters.io/progress/http-server/c0244b38-47ec-4d61-9992-09940cf4b97f)](https://app.codecrafters.io/users/codecrafters-bot?r=2qF)

---
# CodeCrafters  —  Build Your Own HTTP 1.1 Server in TypeScript + Bun
My personal Practice Repo on [CodeCrafters](https://app.codecrafters.io/courses/http-server/stages/df4?repo=c0244b38-47ec-4d61-9992-09940cf4b97f). You will not be able to access it though, and it's here for a personal reference.

To test the server's functionality the CodeCrafters's [HTTP Server Tester](https://github.com/codecrafters-io/http-server-tester) public repository was made available.

#### Future-planned Variants of the Same Concepts
[Variation 1 - HTTP 1.2 Server with TypeScript]()
[Variation 2 - HTTP 1.2 Server With Python]()
[Variation 3 - HTTP 1.2 Server With C]()
[Variation 4 - HTTP 1.2 Server With Rust]()

## Introduction
Welcome to the Build your own HTTP server challenge!

HTTP is the protocol that powers the web. In this challenge, you'll build a HTTP server that's capable of handling simple GET/POST requests, serving files and handling multiple concurrent connections.

Along the way, we'll learn about TCP connections, HTTP headers, HTTP verbs, handling multiple connections and more.


This is a starting point for **TypeScript** solutions to the
["Build Your Own HTTP server" Challenge](https://app.codecrafters.io/courses/http-server/overview).

[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) is the
protocol that powers the web. In this challenge, you'll build a **HTTP/1.1** server that is capable of serving multiple clients.

Along the way you'll learn about TCP servers,
[HTTP request syntax](https://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html),
and more.

**Note**: If you're viewing this repo on GitHub, head over to
[codecrafters.io](https://codecrafters.io) to try the challenge.

* This project contains various files of the main server logic for handling HTTP requests at different stages of development - **main.ts** through to **main6.ts**.
 * It creates a TCP server that listens on port 4221 and handles GET and POST requests.
 * The server can serve static files, echo back request paths, and return the User-Agent header value.
 * The server requires a directory path to serve files from, which can be passed as a command line argument.
 * The server can additionally

## Stage 1 — Binding to a Port

The entry point for your HTTP server implementation is in `app/main.ts`. Study
and uncomment the relevant code, and push your changes to pass the first stage:

#### Using CodeCrafters CLI to Run & Test the Code on CodeCrafters
```sh
codecrafters test # Visit https://codecrafters.io/cli to install
```
They recommend using the **[CodeCrafters CLI](https://codecrafters.io/cli)**, but you can use Git too.

#### Using Git Commands to Run & Test the Code on CodeCrafters

```sh
git add .
git commit -m "pass 1st stage" # any msg
git push origin master
```

Time to move on to the next stage!

## Stage 2  —  Responding With SC "200"

Note: This section example is for stages 2 and beyond.

1. Ensure you have `bun (1.1)` installed locally
1. Run **`$ ./your_program.sh`** in a **Bash Terminal** to run your program, which is implemented in
   **`app/main.ts`**.
1. Commit your changes and run **_`git push origin master`_** to submit your solution
   to CodeCrafters. Test output will be streamed to your terminal.

## Stage 3  —  Extracting URL Path

### 1. Components or Elements of a URL

### 2. Splitting URLs with TypeScript

### 3. Determining the Validity of the URL


## Stage 4  —  Responding With the HTML Body
Add content ...

References:

    https://stackoverflow.com/a/74061022
    https://docs.python.org/3/library/
    http.server.html#http.server.BaseHTTPRequestHandler.end_headers
    https://www.ibm.com/docs/en/cics-ts/beta?topic=protocol-http-responses

_## This is a WIP - To Be Continued_
## Stage 5  —  Reading the Header
Add content ...

References:


## Stage 6  —  Building Concurrent Connections
Add content ...

References:


## Stage 7  —  Returning a File
Add content ...

References:


## Stage 8  —  Reading the Request Body
Add content ...

References:


# HTTP Compression

## Stage 9  —  Compression Headers
Add content ...

References:

## Stage 10  —  Multiple Compression Schemes
Add content ...

References:

## Stage 11  —  GZip Compression
Add content ...

References:
