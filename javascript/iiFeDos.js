'use strict'

var Chatty = (function(event){


	var userInput = [];

	//get the elementById that holds the user's message, and get the user's input from the text field


	//add user's message and accompanying delete button to the DOM via .innerHTML, create a delete button, probably going to use back tics
		function showData(userInput){
			var newMessage = document.getElementById("user");

		  for(message in userInput) {
		    var newInput = '';
		    var messageString = userInput[message];
		    newInput += "<article>";
		    newInput += "<p>"${messageString.message}"</p>";
		    newInput += "<button type='button' value='delete' id='btn-delete'>Delete</button>"
		    newInput += "</article>";

		    newMessage.innerHTML += newInput;
		  }
		};

	//exposing the array (make public) to make it accessable to the other IIFE's  
	event.getMessage = function(){
		return userInput;
	};

	//delete message from array as well as the DOM...gonna need some work on this one

	//push the user's message into private array 
	event.setMessage = function(message){
		userInput.push(message);//come back to this
		console.log("You've added this message: ", message);
	};




	return event;

})(Chatty || {});