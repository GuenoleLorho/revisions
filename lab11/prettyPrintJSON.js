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
    prettyPrintJSON(jsondata);
  });
}

function prettyPrintJSON(jsondata){
  //prints the prettyJSON to the screen
  var pretty = JSON.stringify(jsondata);
  $('#resultsbox').append("<br><br><br><p>" + pretty + "</p>");
}
