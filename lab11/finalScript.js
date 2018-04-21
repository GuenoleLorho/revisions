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
    addResultTitles(jsondata);
  });
}

function addResultTitles(jsondata){
  //create a string to contain our HTML code to inject
  var htmlstring="";
  //iterate over the collection of results
  for(var i=0; i<10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
  }
  //inject the HTML into our empty submitToList
  console.log("htmlstrin: " + htmlstring);
  $("#results").html(htmlstring);
}
