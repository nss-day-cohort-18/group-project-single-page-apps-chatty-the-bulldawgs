/*var inputBox = document.getElementById("userInput")

var Chatty = (function(){
console.log("change stuff");
`What is ${console.log("in template literal")}`

}());*/
var array = [];
var userInput = document.getElementById('userInput');
var last_element = array[array.length - 1];
var btn_userInput = document.getElementById('btn-userInput');
var userOutput = document.getElementById('userOutput');
var outPut = "<div  id='newInput'>" + array.slice(-1)[0] + "<button type='button' class='btn btn-danger' id='btn-delete'>Chuck Chop This Joke</button>" + "</div>" + "<br>";

document.getElementById('dark').addEventListener('click', function() {
    body.classList.toggle('new-element-class');
document.getElementById('large').addEventListener('click', function() {
    body.classList.toggle('new-larger-class');

/****** document.userInput.onkeyup:
        1) if the user pushes enter
        2) the submitInput function is invoked.
******/
userInput.onkeyup = function () {
    if (window.event.keyCode == '13') {
        submitInput();
    }
}

/****** function (submitInput):
         1) executed on keyCode == '13' keyup (ABOVE)
         2) pushes the userInput to the end of the array
         3) output the string into the userOutput div.
*******/

function submitInput() {
  var newMessage = userInput.value;
  array.push(newMessage);
  console.log("array :", array);
  document.querySelector('.userOutput').innerHTML += "<div  id='newInput'>" + array.slice(-1)[0] + "<button type='button' class='btn btn-danger' id='btn-delete'>Chuck Chop This Joke</button>" + "</div>" + "<br>";
  console.log("output :", array)
}