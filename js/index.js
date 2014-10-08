$(document).ready(function() {

  var socket = io.connect("http://localhost:1234");

  $(".left").click(function() {
    socket.emit("Pi", {direction: "left"});
  });

  $(".right").click(function() {
    socket.emit("Pi", {direction: "right"});
  });

});

