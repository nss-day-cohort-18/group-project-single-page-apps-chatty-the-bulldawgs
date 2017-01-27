//verbs: accept, remove from DOM, remove from array

//One IIFE should accept a message element id and then remove the correct element 
//from the DOM. This IIFE should also remove the corresponding message from the 
//private array that was created in the previous IIFE.

'use strict';

console.log("Hello from Tres");

var Chatty = (function(originalChatty){

  var messageData = [];

  var dataRequest = new XMLHttpRequest();
  dataRequest.addEventListener("load", dataRequestLoadComplete);
  dataRequest.addEventListener("error", dataRequestError);

  function dataRequestLoadComplete(event){
    console.log("message Data has loaded");
    var data = JSON.parse(event.target.responseText);
    showData(data);
  }
/////////////////////////////////////////////////////////////////////////////////
  function showData(itDontMatter){
    var listDiv = document.getElementById("all-messages");
    var whatever;
    for(whatever in itDontMatter) {
      var messageData = '';
      var messageItem = itDontMatter[whatever];
      messageData += "<div>";
      messageData += `<p> ${messageItem.name}: ${messageItem.type} </p>`
      messageData += "</div>";
      listDiv.innerHTML += messageData;
    }
  }
/////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////
  function dataRequestError(event){
    console.log("DataRequest - Error", event.target.responseText);
  }

  originalChatty.getAllmessages = function(){
 	return messageData;
  }

  dataRequest.open("GET", "messages.json");
  dataRequest.send();

  return originalChatty;

})(Chatty || {});
