$(function(){
  alert("document ready");

  $('#searchform').submit(function(){
    //get current value and add to item list
    var searchterms = $("#searchterms").val();
    //call our search yotube function
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB (searchterms){
  //call youtube API using ajax
  //build url for the request
  var url = "http://www.omdbapi.com/?apikey=db0198e9&s="+searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata){
    //handle the results
    printJSON(jsondata);
  });
}

function printJSON(jsondata){
  //prints the JSON to the screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");
}
