const express = require("express");
const app = express();
const socketio = require("socket.io");

const port = 8000;

app.use(express.static(__dirname + "/public"));

app.get("/randomroute", (req, res) => {
  console.log("req", req.method);
  res.send("Welcome to random route");
});

const expressServer = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const io = socketio(expressServer);

io.on("connect", (socket) => {
  console.log("on connect do something", socket.id);
  // in websocket api, send is used. In socket.io uses "emit"
  socket.emit("messageFromServerWithMadeUpLabel", {
    data: "Welcome to the socket server",
  });

  socket.on("messageFromClient", (message) => {
    console.log("client response", message.data);
  });
});
