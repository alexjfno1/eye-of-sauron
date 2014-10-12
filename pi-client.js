var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io-client")("http://eye-of-sauron.herokuapp.com", {reconnect: true});
var piblaster = require("pi-blaster.js");

var position = 0.15

io.on("connect", function() {
  piblaster.setPwm(17, position);
  console.log("Resetting servo position");
  io.on("Pi", function(data) {
    move(data.direction);
  });
});

server.listen((process.env.PORT || 2345), function() {
  console.log("App started!");
});

function move(direction) {
  if(direction == "left" && position > 0.06) {
    console.log("Going left!");
    position =+ parseFloat((position -= 0.01).toFixed(2));
  } else if(direction == "right" && position < 0.23) {
    console.log("Going right!");
    position =+ parseFloat((position += 0.01).toFixed(2));
  }
  console.log(position);
  piblaster.setPwm(17, position);
}

