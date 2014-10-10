var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

var piblaster = require("pi-blaster.js");

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/views/index.html");
});

io.on("connection", function(socket) {
  socket.on("Pi", function(data) {
    move(data.direction);
  });
});

var position = 0.15;

server.listen(1234, function() {
  console.log("App started!")
  piblaster.setPwm(17, position);
  console.log("Servo moved to center position");
  console.log(app.settings.env);
});

function move(direction) {
  if(direction == "left" && position > 0.06) {
    console.log("Going left!");
    position =+ parseFloat((position -= 0.01).toFixed(2));
  } else if(direction == "right" && position < 0.24) {
    console.log("Going right!");
    position =+ parseFloat((position += 0.01).toFixed(2));
  }
  console.log(position);
  piblaster.setPwm(17, position);
}
