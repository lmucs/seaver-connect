var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var submit = document.getElementById("submit");
var signup = document.getElementById("signup");


signup.onclick = function(){
	window.open("https://jsfiddle.net/934ygdf2/");
}

submit.onclick = function() {
	username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  if(username == "Seaver" && password == "Potato"){
   	alert("login successful!");
  }
  
};

