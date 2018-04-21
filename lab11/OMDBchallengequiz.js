$(function(){
  alert("document ready");

  $('#searchform').submit(function(){
    var searchterms = $("#searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB (searchterms){
  var url = "http://www.omdbapi.com/?apikey=db0198e9&s="+searchterms;
  $.getJSON(url, function(jsondata){
      addResultTitles(jsondata);
  });
}



function addResultTitles(jsondata){
  $("#results").html("");
  resultsno = Object.keys(jsondata.Search).length;
  console.log("number of results: "+ resultsno);
  t1 =0; t2 =0; t3 =0; t4 =0; t5 =0;
  var a=0;

  for(  var i=0; i<resultsno; i++){
    var type = jsondata.Search[i].Type;
    if(type =="movie"){
      var imdb_page = jsondata.Search[i].imdbID;
      //htmldtring = [];
      info(imdb_page, a);
      //console.log("score"+a+" = "+score[a]);

      a+=1;

    }else{
      console.log("not a movie");
    }
  }
}

function info (imdb_code, a){
  var adv_url = "http://www.omdbapi.com/?i="+imdb_code+"&apikey=db0198e9";
  var temp = $.getJSON(adv_url, function(jsondata2){
  var adinfo = JSON.stringify(jsondata2);
    var moviestring = "";printresults (jsondata2, a);

  });
}


function printresults (fulljson, a){
  var score = fulljson.Ratings[1].Value;
  score = score.slice(0, -1);
  score = parseInt(score);
  var htmlstring="";
  htmlstring += "<li class='movie'>";
  htmlstring +="<br>"+ fulljson.Title;
  htmlstring += "<br><img src=" + fulljson.Poster +" width=100 alt='poster'>";
  htmlstring += "<br>Year: " + fulljson.Year;
  htmlstring += "<br>" + fulljson.Type;
  htmlstring += "<br><a href = 'https://www.imdb.com/title/" + fulljson.imdbID +"/''>Link to the Movie</a>";
  htmlstring += "<br>Rotten Tomatoes Rating: "+ fulljson.Ratings[1].Value;
  htmlstring += "<br>Plot: " + fulljson.Plot;
  htmlstring += "</li><br><br>";
  //console.log("score"+a+"= "+score);

  top5 (htmlstring, score);
  //$("#results").append(htmlstring);
}


function top5(moviestring, score1){/*
  console.log("working alright = "+score1 + moviestring);
  if(score > t5){
    t1 = score;
  }else{
    if(score > t4){
      t1 = score;
    }else{
      if(score > t3){
        t1 = score;
      }else{
        if(score > t2){
          t1 = score;
        }else{
          if(score > t1){
            t1 = score;
          }else{

          }
        }
      }
    }
  }
*/
  $("#results").append(moviestring);
}
