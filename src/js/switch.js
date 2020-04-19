$( document ).ready(function() {
    toggleCanvas("#Diseasecanvas");
    console.log("hello");
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

function toggleCanvas(target) {
  $("#canvashold").children().removeClass("displaycanvas");
  $(target).toggleClass("displaycanvas");
}
