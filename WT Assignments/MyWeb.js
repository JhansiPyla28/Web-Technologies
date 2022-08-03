function change(){
  document.getElementById("image").src="logo.png";
}
function unchange(){
	document.getElementById("image").src="Jimmy.jpg";
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function searchIt() 
{
	var input, filter, ul, li, a, i;
  	input = document.getElementById("mySearch");
  	filter = input.value.toUpperCase();
  	ul = document.getElementById("myMenu");
  	li = ul.getElementsByTagName("li");
  	for (i = 0; i < li.length; i++) 
  	{
    	a = li[i].getElementsByTagName("a")[0];
    	if (a.innerHTML.toUpperCase().indexOf(filter) > -1) 
    	{
      		li[i].style.display = "";
    	}
    	else 
    	{
      		li[i].style.display = "none";
    	}
  	}
}

function showMenu() {
  
  if(document.getElementsByClassName("sidenav")[0].style.display=="none"){
    document.getElementsByClassName("sidenav")[0].style.display="inline";
    // document.getElementById("image1").src="close.png";
  }
  else{
    document.getElementsByClassName("sidenav")[0].style.display="none";
  }

}
// function changeicon(){
//   document.getElementById("image1").src="close.png";
// }
function changeagain(){
  document.getElementById("image1").src="more.png";
}