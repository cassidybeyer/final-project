function userName() {
    var inputName = document.getElementById("inName").value;
    var inputAge = document.getElementById("inAge");
}

function girlFunction() {
  var genderEntered = "female";
  document.getElementById("genders").innerHTML = "Great. We will find you a female friend!";
}
function boyFunction() {
  var genderEntered = "male";
  document.getElementById("genders").innerHTML = "Great. We will find you a male friend!";
}
function otherFunction() {
  var genderEntered = "other";
  document.getElementById("genders").innerHTML = "Great. We will find you a friend!";
}
