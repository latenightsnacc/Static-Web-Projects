$('#portfolio-btn').click(function () {
    $('#menu-modal').hide();
});

$('#header-btn').click(function () {
    $('#menu-modal').hide();
});

$('#about-btn').click(function () {
    $('#menu-modal').hide();
});

$('#our-work-btn').click(function () {
    $('#menu-modal').hide();
});

$('#download-btn').click(function () {
    $('#menu-modal').hide();
});

// ON SCROLL CHANGE LOGO
var scroll = $(window).scrollTop();
if (scroll >= 500) {
    $("#logo-web").hide();
}

// SLIDESHOW
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
