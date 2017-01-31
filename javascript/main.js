console.log("main IIFE is working");

var array = [];
var userInput = document.getElementById('userInput');
var last_element = array[array.length - 1];
var btn_userInput = document.getElementById('btn-userInput');
var userOutput = document.getElementById('userOutput');
var outPut = "<div  id='newInput'>" + array.slice(-1)[0] + "<button type='button' class='btn btn-danger' id='btn-delete'>Chuck Chop This Joke</button>" + "</div>" + "<br>";


/****** document.userInput.onkeyup:
        1) if the user pushes enter
        2) the submitInput function is invoked.
******/
userInput.onkeyup = function () {
    if (window.event.keyCode == '13') {
        submitInput();
        var deleteAllButton = document.getElementById("btn-deleteAll");
        deleteAllButton.removeAttribute("disabled");
    }
}


/****** function (submitInput):
         1) executed on keyCode == '13' keyup (ABOVE)
         2) pushes the userInput to the end of the array
         3) output the string into the userOutput div.
*******/

function submitInput() {
  var newMessage = userInput.value;
  if (newMessage.length < 1) {
  alert("Chuck does not have time for your games...");
  return;
}
  else {
  array.push(newMessage);
  console.log("array :", array);
  userOutput.innerHTML += "<div id='newInput'>" + array.slice(-1)[0] + "<br>" + "<button type='button' class='btn btn-danger' id='btn-delete'>Chuck Chop This Joke</button>" + "</div>" + "<br>";
  userInput.value = "";
  console.log("output :", array)
  }
}


/********This is the clear all fields button that is supposed to clear all the messages from the ouput divs*****/



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
