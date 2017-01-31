console.log("main IIFE is working");

var userInput = document.getElementById('userInput');
var btn_userInput = document.getElementById('btn-userInput');
var userOutput = document.getElementById('userOutput');


/****** document.userInput.onkeyup:
        1) if the user pushes enter
        2) the submitInput function is invoked.
******/
userInput.addEventListener('keypress', function () {
    if (window.event.keyCode == '13') {
        Chatty.submitInput(event);
    }
});



/********
This is the clear all fields button
that is supposed to clear all the messages
from the ouput divs
********/

//function clearBox(jumbotron){
  function clearBox(){
  var removeTop = document.getElementById("top").innerText = "";
  var removeUserOutput = document.getElementById("userOutput").innerText = "";
  //array = [];
  var deleteAllButton = document.getElementById("btn-deleteAll");
  if (removeTop === "") {
    deleteAllButton.setAttribute("disabled", true)};
};


  /*********************
    Toggle Functions (color syntax)
  **********************/

document.getElementById('dark').addEventListener('click', function() {
  jumbotron.classList.toggle('dark');
})
document.getElementById('large').addEventListener('click', function() {
  jumbotron.classList.toggle('large');
})
