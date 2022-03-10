// preventing confirm resubmission popup on refresh
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

// opening mobile menu
function openMenu() {
  var navLinks = $(".mobile-nav-links");
    navLinks.slideToggle();
    navLinks.css("display", "flex");
}

// active mouseover effects for all buttons
 $(".book-btn").on({
   mouseenter: function() {
     $(".book-btn").css("background-color", "var(--secondary1)");
     $(".book-btn").css("color", "var(--white)");
   },
   mouseleave: function() {
     $(".book-btn").css("background-color", "var(--primary1)");
     $(".book-btn").css("color", "var(--secondary1)");
   }
 });


// Landing Background image switch
var heroImages = [
  "images/hero5.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg",
  "images/hero4.jpg",
  "images/hero1.jpg"
]
var imageHero = document.getElementById("Hero");

var i = 0;
setInterval(function() {
      imageHero.style.backgroundImage = "url(" + heroImages[i] + ")";

      i = i + 1;
      if (i == heroImages.length) {
        i =  0;
      }
}, 5000);
