//verbs: accept, remove from DOM, remove from private array
///////////////////////////////////////////////////////////////////////////////////

'use strict';

console.log("Hello from Tres");

var Chatty = (function(originalChatty){
  console.log("userInput from Taco2 is: ", userInput);
  //var userInput = [];
  //var newMessage = document.getElementById("user");

  return {

    originalChatty.removeMessageFromArray = function(input){
        //get the buttonID--btn-delete2 for example
        //possibly get the index number
        //see splice below

        input.splice(whichIndex, 1); 
        console.log("Which index: ", whichIndex);
        console.log("The new userInput array: ", userInput);
    };  

    originalChatty.removeMessageFromDom = function(input){
      //get the buttonID--btn-delete2 for example
      //possibly get the index number

      var element = document.getElementById('user' + itemid ); 
      element.parentNode.removeChild(element); 
    }
  }

})(Chatty || {});

//One IIFE should accept a message element id and then remove the correct element 
//from the DOM. This IIFE should also remove the corresponding message from the 
//private array that was created in the previous IIFE.