var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io-client")("http://eye-of-sauron.herokuapp.com", {reconnect: true});
var piblaster = require("pi-blaster.js");

var position = 0.15;
var key = "SERVO_KEY";

io.on("connect", function() {
  piblaster.setPwm(17, position);
  console.log("Servo Key: " + key);
  console.log("Resetting servo position");
  io.on("PiServo", function(data) {
    if(data.servoName === key) {
      move(data.direction, data.speed);
    }
  });
});

server.listen((process.env.PORT || 2345), function() {
  console.log("App started!");
});

function move(direction, speed) {
  if(typeof(speed) === "undefined") {
    speed = 0.01
  }
  speed = parseFloat(speed);
  if(speed > 0.01) {
   speed = 0.01
  }
  if(direction == "right" && position > 0.06) {
    console.log("Going right!");
    position =+ parseFloat((position -= speed).toFixed(5));
  } else if(direction == "left" && position < 0.23) {
    console.log("Going left!");
    position =+ parseFloat((position += speed).toFixed(5));
  } else if(direction == "centre") {
    console.log("Centreing!");
    position = 0.15;
  }
  piblaster.setPwm(17, position);
}

