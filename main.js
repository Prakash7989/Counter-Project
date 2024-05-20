var count = 0;

var add = document.getElementById("add");
var minus = document.getElementById("minus");
var demo = document.getElementById("demo");

function decrease() {
  demo.innerHTML = --count;
}
function increase() {
  demo.innerHTML = ++count;
}

