// For Navigation Bar
var navlinks = document.getElementById("navlinks");

function showMenu() {
  navlinks.style.right = '0px';
}
function hideMenu() {
  navlinks.style.right = '-200px';
}



//Code Editor Made By Abhishek Dhawan
var runBtn = document.getElementById("run-btn");
var result = document.getElementById("result");
var editor = document.getElementById("editor");
var runframe = document.getElementById("runframe");
var runBtns = document.querySelectorAll(".runCode")
runBtn.addEventListener("click", function () {
  runframe.srcdoc = editor.value;
});
function tabKey() {
  document.onkeydown = function (t) {
    if (t.which == 9) {
      editor.value = editor.value + "  ";
      return false;
    }
  }
}
function hideBtn() {
  runBtns.forEach(
    (button) =>{
      button.style.display = "none";
    })
}