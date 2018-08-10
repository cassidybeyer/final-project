function questionTwo(){
  console.log("button clicked");
  var answer1  = document.getElementById("secondQuestion");
  window.scrollBy(0,200);

}

$(document).ready(function(){
    $('#TextBoxId').keypress(function(e){
      if(e.keyCode==13)
      $('#linkadd').click();
    });
});
