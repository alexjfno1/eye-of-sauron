$(document).ready(function() {

  var socket = io.connect("http://eye-of-sauron.herokuapp.com");

  $(".left").click(function() {
    socket.emit("Pi", {direction: "left"});
  });

  $(".right").click(function() {
    socket.emit("Pi", {direction: "right"});
  });

  $(document).on("keydown", function(e) {
    if(e.keyCode === 39) {
      socket.emit("Pi", {direction: "right"});
    } else if(e.keyCode === 37) {
      socket.emit("Pi", {direction: "left"});
    }
  });

});

