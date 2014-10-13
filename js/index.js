$(document).ready(function() {

  var socket = io.connect("http://eye-of-sauron.herokuapp.com");
  var servoSpeed = "0.0005"

  $(".left").click(function() {
    send("left");
  });

  $(".right").click(function() {
    send("right");
  });

  $(".centre").click(function() {
    send("centre");
  });

  $(".speed span").on("click", function() {
    $(".speed span").removeClass("selected");
    $(this).toggleClass("selected");
    servoSpeed = getServoSpeed($(this).text());
  });

  $(document).on("keydown", function(e) {
    if(e.keyCode === 39) {
      send("right");
    } else if(e.keyCode === 37) {
      send("left");
    } else if(e.keyCode === 32) {
      send("centre");
    }
  });

  function getServoSpeed(speed) {
    if(speed === "1") { return "0.0005"; }
    else if(speed === "2") { return "0.005"; }
    else { return "0.01"; }
  }

  function send(direction) {
    socket.emit("Pi", {direction: direction, speed: servoSpeed});
  }

});

