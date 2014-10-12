$(document).ready(function() {

  var socket = io.connect("http://eye-of-sauron.herokuapp.com");

  $(".left").click(function() {
    socket.emit("Pi", {direction: "left"});
  });

  $(".right").click(function() {
    socket.emit("Pi", {direction: "right"});
  });

  $(".centre").click(function() {
    socket.emit("Pi", {direction: "centre"});
  });

  $(document).on("keydown", function(e) {
    if(e.keyCode === 39) {
      socket.emit("Pi", {direction: "right"});
    } else if(e.keyCode === 37) {
      socket.emit("Pi", {direction: "left"});
    } else if(e.keyCode === 32) {
      socket.emit("Pi", {direction: "centre"});
    }
  });

});

