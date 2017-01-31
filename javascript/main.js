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


/****** document.btn-userInput.onclick = function():
        1) on the btn-userInput click
        2) the userInput is pushed to the end of the array
        3) outputs the string into the userOutput div with a button.
******/


/******
This is to reset the search bar after input... NOT WORKING
*******/
function resetform() {
  document.getElementById("input-group").reset();
      resetform();
}

btn_userInput.onclick = function() {
    var newMessage = userInput.value;
    array.push(newMessage);
    console.log("array :", array);
    document.querySelector('.userOutput').innerHTML += "<div  id='newInput'>" + array.slice(-1)[0] + "<button type='button' class='btn btn-danger' id='btn-delete'>Chuck Chop This Joke</button>" + "</div>" + "<br>";
    resetform();
    console.log("output :", array)
}

/********This is the clear all fields button that is supposed to clear all the messages from the ouput divs*****/

function clearBox("top"){
  var removeMessages = document.getElementById("top").innerHTML = "";
  console.log("Everything's clear";
};


//Example found from StackOverflow:
// function clearBox(elementID)
// {
//     document.getElementById(elementID).innerHTML = "";
// }





