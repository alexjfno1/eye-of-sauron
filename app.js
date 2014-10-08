var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

var piblaster = require("pi-blaster.js");

server.listen(1234, function() {
  console.log("App started!")
});

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/views/index.html");
});

io.on("connection", function(socket) {
  socket.on("Pi", function(data) {
    move(data.direction);
    // piblaster.setPwm(7, 0.24);
  });
});

function move(direction) {
  if(direction == "left") {
    console.log("Going left!");
  } else if(direction == "right") {
    console.log("Going right!");
  }
}
