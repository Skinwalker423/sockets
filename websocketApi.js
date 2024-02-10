// core node module
// const http = require("http");
// ws is a 3rd party npm module
// const websocket = require("ws");

// const server = http.createServer((req, res) => {
//   console.log(req.method);
//   res.end("I an connected");
// });

// const wss = new websocket.WebSocketServer({ server });

// wss.on("headers", (headers, req) => {
//   console.log("headers", headers);
// });

// wss.on("connection", (connection, req) => {
//   console.log("connected");
//   connection.send("Welcome to the websocket server");
//   connection.onmessage = (message) => {
//     console.log("msg in server", message.data);
//   };
// });

// server.listen(8000);
