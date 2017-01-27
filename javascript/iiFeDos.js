'use strict'

var Chatty = (function(event){


	var userInput = [];


	//get the elementById that holds the user's message
	document.getElementById("user")
	//get the user's input from the text field, also by id

	//create a delete button, probably going to use back tics

	//add user's message and accompanying delete button to the DOM via .innerHTMl

	//exposing the array (make public) to make it accessable to the other IIFE's  
	event.getMessage = function(){
		return userInput;
	};

	//delete message from array as well as the DOM...gonna need some work on this one

	//push the user's message into private array 
	event.setMessage = function(message){
		userInput.push(message.toString());//come back to this and see if this toString method is correctly executed
		console.log("You've added this message: ", message);
	};




	return event;

})(Chatty || {});