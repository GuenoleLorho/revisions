$(function(){

  //make alternating rows grey
  $("tr:odd").css("backgroundColor", "grey");
  //makes the column header orange
  $("thead").css("backgroundColor", "orange");
  //make a selected row have a border


  $("td").click(function(){
    /*$(this).removeClass("nonhighlighted");*/
    //$("tr").toggleClass("highlighted");
    $(this).toggleClass("highlighted");
    console.log("Clicking ok");
  });

  $("tr").mouseup(function(){

    $(".highlighted").removeClass("highlighted");
    //$(this).toggleClass("highlighted");
    console.log("unclicking ok");
  });
  console.log("working up to now");

});
