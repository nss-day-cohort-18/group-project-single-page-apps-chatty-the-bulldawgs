"use strict";

var Chatty = (function() {

  //var chuckJokes = [];

var dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", dataRequestLoadComplete);
dataRequest.addEventListener("error", dataRequestError);

  function dataRequestLoadComplete (event) {
    var data = JSON.parse(event.target.responseText);
    showData(data);
  }

  function dataRequestError(event) {
    console.log("Failed load: ", event.target.responseText);
  }

  function showData(data){
    var listDiv = document.getElementById("top");
    var key;
    for(key in data) {
      var chuckJokes = '';
      var chuckItem = data[key];//-----this is working
      //console.log("key", key);
      chuckJokes += `<article id="article${key}">`;
      chuckJokes += `<p>${chuckItem.joke}</p>`;
      chuckJokes += `<button type="button" value="delete" id="btn-delete${key}">Delete</button>`;
      chuckJokes += "</article>"; 
      if (key >= 5) {
        break;
      }
      listDiv.innerHTML += chuckJokes;
    }      
  }

  function deleteArticle(article){
    //console.log("deleteButton0", deleteButton0);
    var elem = document.getElementById(article);
    elem.parentNode.removeChild(elem);
    return false;
  }

dataRequest.open("GET", "chuck.json");
dataRequest.send();

})();