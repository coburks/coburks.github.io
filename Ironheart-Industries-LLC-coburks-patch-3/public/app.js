// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// Gallery scroll section

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}







var config = Zooming.config(),
TRANSITION_DURATION_DEFAULT = config.transitionDuration,
TRANSITION_DURATION_SLOW = 1.0,
TRANSITION_DURATION_FAST = 0.2,
BG_COLOR_DEFAULT = config.bgColor,
BG_COLOR_DARK = '#000',
ENABLE_GRAB_DEFAULT = config.enableGrab,
ACTIVE_CLASS = 'button-primary',

btnFast = document.getElementById('btn-fast'),
btnSlow = document.getElementById('btn-slow'),
btnDark = document.getElementById('btn-dark'),
btnNoGrab = document.getElementById('btn-no-grab');

function isActive(el) {
  return el.classList.contains(ACTIVE_CLASS);
}

function activate(el) {
  el.classList.add(ACTIVE_CLASS);
}

function deactivate(el) {
  el.classList.remove(ACTIVE_CLASS);
}

function fast() {
  var t;
  if (isActive(btnFast)) {
    t = TRANSITION_DURATION_DEFAULT;
    deactivate(btnFast);
  } else {
    t = TRANSITION_DURATION_FAST;
    activate(btnFast);
    deactivate(btnSlow);
  }

  Zooming.config({ transitionDuration: t });
}

function slow() {
  var t;
  if (isActive(btnSlow)) {
    t = TRANSITION_DURATION_DEFAULT;
    deactivate(btnSlow);
  } else {
    t = TRANSITION_DURATION_SLOW;
    activate(btnSlow);
    deactivate(btnFast);
  }

  Zooming.config({ transitionDuration: t });
}

function dark() {
  var c;
  if (isActive(btnDark)) {
    c = BG_COLOR_DEFAULT;
    deactivate(btnDark);
  } else {
    c = BG_COLOR_DARK;
    activate(btnDark);
  }

  Zooming.config({ bgColor: c });
}

function noGrab() {
  var enable;
  if (isActive(btnNoGrab)) {
    enable = ENABLE_GRAB_DEFAULT;
    deactivate(btnNoGrab);
  } else {
    enable = !ENABLE_GRAB_DEFAULT;
    activate(btnNoGrab);
  }

  Zooming.config({ enableGrab: enable });
}