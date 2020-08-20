  	
let downMe = document.getElementById("down");
let navBarToggle = document.getElementById("js-navbar-toggle");


navBarToggle.addEventListener('click' , function(){
  downMe.classList.toggle('active');

});

function mine(x){
    x.classList.toggle("change");
  }