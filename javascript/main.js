// var inputBox = document.getElementById("userInput")
console.log("earth to major tom");


var Chatty = (function(){
  console.log("change stuff");
  `What is ${console.log("in template literal")}`;

  return {
      submitInput: function () {
      var newMessage = userInput.value;
      messageArray.push(newMessage);
      console.log("messageArray :", messageArray);
      document.querySelector('.userOutput').innerHTML += "<div  id='newInput'>" + messageArray.slice(-1)[0] + "<button type='button' class='btn btn-danger' id='btn-delete'>Chuck Chop This Joke</button>" + "</div>" + "<br>";
      console.log("output :", messageArray)
      }

      /****** document.userInput.onkeyup:
        1) if the user pushes enter
        2) the submitInput function is invoked.
      ******/

      // userInput: function () {
      //   if (window.event.keyCode == '13'){
      //   submitInput();
      //   }
      // };
  }
}());
  console.log("Working here");
//empty array to put messages in
var messageArray = [];
//the input field in the input div.input-group
var userInput = document.getElementById('userInput');
//the position of the last element of the array
var last_element = messageArray[messageArray.length - 1];
//this button doesn't exist
var btn_userInput = document.getElementById('btn-userInput');
//grabs the div which the user's input will show up in
var userOutput = document.getElementById('userOutput');
//creating a new div for the messages in messageArray
var outPut = "<div  id='newInput'>" + messageArray.slice(-1)[0] + "<button type='button' class='btn btn-danger' id='btn-delete'>Chuck Chop This Joke</button>" + "</div>" + "<br>";
//toggles the theme from light to dark
document.getElementById('dark').addEventListener('click', function() {
    div.classList.toggle('btn-darkTheme');//need to fix this class name since it doesn't exist 
  })
//toggles the font size from default size to bigger
document.getElementById('large').addEventListener('click', function() {
    div.classList.toggle('btn-largeText');//need to fix this class name since it doesn't exist
  })




/****** function (submitInput):
         1) executed on keyCode == '13' keyup (ABOVE)
         2) pushes the userInput to the end of the messageArray
         3) output the string into the userOutput div. 
*******/


