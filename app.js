var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

var piblaster = require("pi-blaster.js");

server.listen(1234);

app.use("/css", express.static(__dirname + "/css"));
app.get("/", function(req, res) {
  res.sendfile(__dirname + "/views/index.html");
});

io.on("connection", function(socket) {
  socket.on("Pi", function(data) {
    console.log(data);
    piblaster.setPwm(7, 0.24);
  });
});
