'use strict'
console.log("Is Chuck Here?: ")


  var Chatty = (function(chuckNorris) {

    var chuckJokes = [];


    var dataRequest = new XMLHttpRequest();
      dataRequest.addEventListener("load", dataRequestLoadComplete);
      dataRequest.addEventListener("error", dataRequestError);



/***** This function pulls the data from out Json file on the "load" eventListener. ****/
    function dataRequestLoadComplete (event) {
      console.log("Data Loaded");
      var data = JSON.parse(event.target.responseText);
      showData(data);
    }

    function dataRequestError(event) {
      console.log("Failed load: ", event.target.responseText);

    }


/***** This function
          - first assigns the output div
          - for the variable jokes in data(object for JSON)
          - chuckJokes creates an empty array
          - pullJokes gets the value of the key[jokes]
          - chuckJokes pushes all the information
          - listDiv pushes the string to the HTML document
******/

    function showData(data){
      var listDiv = document.getElementById("top");
      for (i = 0; i < 5; i++) {
        for (var jokes in data) {
        var chuckJokes = '';
        var pullJokes = data[jokes];
            chuckJokes += "<article>";
            chuckJokes += "<p>${pullJokes.jokes} </p>";
            chuckJokes += "<button type='button' value='delete' id='btn-delete'>"
            chuckJokes += "</article>";
        listDiv.innerHTML += pullJokes[i];
    }
  }
}


/****** This is accessing the JSON file
        so it is avaiable when called by
        the functions
*******/

dataRequest.open("GET", "chuck.json");
dataRequest.send();

return chuckNorris;

}); (Chatty || {})
