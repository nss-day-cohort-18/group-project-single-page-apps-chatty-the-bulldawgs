"use strict";

  var Chatty = (function() {

    //var chuckJokes = [];

    var dataRequest = new XMLHttpRequest();
      dataRequest.addEventListener("load", dataRequestLoadComplete);
      dataRequest.addEventListener("error", dataRequestError);

/***** This function pulls the data from out Json file on the "load" eventListener. ****/
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
        console.log("key", key);
        chuckJokes += "<article>";
        chuckJokes += `<p>${chuckItem.joke}</p>`;
        chuckJokes += `<button type="button" value="delete" id="btn-delete">`;
        chuckJokes += "</article>"; 
        if (key >= 7) {
          break;
        };
        listDiv.innerHTML += chuckJokes;
      }      
    }

dataRequest.open("GET", "chuck.json");
dataRequest.send();

})();
