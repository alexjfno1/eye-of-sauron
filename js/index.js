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

  $(".speed span").on("click", function() {
    $(".speed span").removeClass("selected");
    $(this).toggleClass("selected");
    var speed = getServoSpeed($(this).text());
    $("input#speed").val(speed);
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

function getServoSpeed(speed) {
  if(speed === "1") { return "0.0005"; }
  else if(speed === "2") { return "0.005"; }
  else { return "0.01"; }
}
