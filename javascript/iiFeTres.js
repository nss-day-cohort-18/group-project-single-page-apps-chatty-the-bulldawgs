"use strict";


var Chatty = (function(originalChatty){
  //var userInput = [];
  //var newMessage = document.getElementById("user");
console.log("Hello from Tres");
  return {

    //originalChatty.removeMessageFromArray: function(input){
        //get the buttonID--btn-delete2 for example
        //possibly get the index number
        //see splice below

        input.splice(whichIndex, 1);
        console.log("Which index: ", whichIndex);
        console.log("The new userInput array: ", userInput);
    };

    originalChatty.removeMessageFromDom: function(input){
      //newInput += "<article>";---should the articles have IDs as well?
      //newInput += "<p>"${messageString.message}"</p>";
      //newInput += "<button type='button' value='delete' id='btn-delete'>Delete</button>"
      //newInput += "</article>";

      var element = document.getElementById('user' + itemid );
      element.parentNode.removeChild(element);

      //possibility
      //var element = document.getElementById("articleId");
      //while (element.firstChild) {
      //element.removeChild(element.firstChild);
}
    }
  }

})(Chatty || {});

//One IIFE should accept a message element id and then remove the correct element
//from the DOM. This IIFE should also remove the corresponding message from the
//private array that was created in the previous IIFE.
