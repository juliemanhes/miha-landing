// BURGER NAV //

var navbar = document.querySelector('.header--nav');

document.addEventListener('scroll', function (event) {
	if (document.body.scrollTop  > 80 || event.pageY > 80) {
		navbar.classList.add('sticky');
	}
	else if (document.body.scrollTop  < 80 || event.pageY < 80){
		navbar.classList.remove('sticky');
  	}
 });
var burger = document.querySelectorAll(".header--nav-burger div");
var burger1 = document.querySelector(".burger-1");
var burger2 = document.querySelector(".burger-2");
var burger3 = document.querySelector(".burger-3");

if (burger) {
  for (let i = 0; i < burger.length; i++) {
    burger[i].addEventListener("click", function() {
      navbar.classList.toggle("hidden-nav");
      burger1.classList.toggle("burger-transform-1");
      burger2.classList.toggle("burger-transform-3");
      burger3.classList.toggle("burger-transform-2");
    });
  }
}




