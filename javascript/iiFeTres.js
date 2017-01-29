//verbs: accept, remove from DOM, remove from private array
///////////////////////////////////////////////////////////////////////////////////
//remove element from the DOM

// <div id="div1">
// <p id="p1">This is a paragraph.</p>
// <p id="p2">This is another paragraph.</p>
// </div>

// var parent = document.getElementById("div1");
// var child = document.getElementById("p1");
// parent.removeChild(child);

///////////////////////////////////////////////////////////////////////////////////
//the private array is userInput
//userInput.splice(index, 1);



'use strict';

console.log("Hello from Tres");

var Chatty = (function(originalChatty){
console.log("userInput from Taco2 is: ", userInput);

  originalChatty.removeMessage = function(input){
          
      // var whichIndex;
      // jedi.forEach(function(item, index) {
      //         if (item === who){
      //                 whichIndex = index;
      //         }   
      // }); 

      input.splice(whichIndex, 1); 
      console.log("Which index: ", whichIndex);
  };  

})(Chatty || {});



//One IIFE should accept a message element id and then remove the correct element 
//from the DOM. This IIFE should also remove the corresponding message from the 
//private array that was created in the previous IIFE.