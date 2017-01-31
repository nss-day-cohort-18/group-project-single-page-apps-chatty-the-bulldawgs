'use strict'
console.log("Second IIFE is working");

var Chatty = (function(otherChatty) {
console.log("here?:");

	var array = [];
console.log("array>");


	otherChatty.submitInput = function(event) {
		console.log("here?");
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

	return otherChatty;

})(Chatty || {});
