$( document ).ready(function() {
    toggleCanvas("#Diseasecanvas");
});


$("#Fire").click(function() {
  toggleCanvas("#Firecanvas")
});

$("#Flood").click(function() {
  toggleCanvas("#Floodcanvas")
});

$("#Drought").click(function() {
  toggleCanvas("#Droughtcanvas")
});

$("#Disease").click(function() {
  toggleCanvas("#Diseasecanvas")
});

$("#War").click(function() {
  toggleCanvas("#Warcanvas")
});

$("#info").click(function() {
  $(".causedejour").toggleClass("casenon");
  console.log("hello");
});

function toggleCanvas(target) {
  $("#canvashold").children().removeClass("displaycanvas");
  $(target).toggleClass("displaycanvas");
}
