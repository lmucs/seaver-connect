
$("leftButton").click(function(){plusDivs(-1)});
$("rightButton").click(function(){plusDivs(1)});
$("currendSlide1").click(function(){currentDiv(1)});
$("currendSlide2").click(function(){currentDiv(2)});
$("currendSlide3").click(function(){currentDiv(3)});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n);
}

function currentDiv(n){
  showDivs(slideIndex = n);
}

function showDivs(n){
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("currentSlide");
  if(n > x.length){
    slideIndex = 1;
  }
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.("currentSlide")
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "currentSlide";
}

