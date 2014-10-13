$(document).ready(function() {

  var socket = io.connect("http://eye-of-sauron.herokuapp.com");

  $(".left").click(function() {
    socket.emit("Pi", {direction: "left", speed: $('input#speed').val()});
  });

  $(".right").click(function() {
    socket.emit("Pi", {direction: "right", speed: $('input#speed').val()});
  });

  $(".centre").click(function() {
    socket.emit("Pi", {direction: "centre", speed: $('input#speed').val()});
  });

  $(document).on("keydown", function(e) {
    if(e.keyCode === 39) {
      socket.emit("Pi", {direction: "right", speed: $('input#speed').val()});
    } else if(e.keyCode === 37) {
      socket.emit("Pi", {direction: "left", speed: $('input#speed').val()});
    } else if(e.keyCode === 32) {
      socket.emit("Pi", {direction: "centre", speed: $('input#speed').val()});
    }
  });

});

