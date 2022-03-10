// preventing confirm resubmission popup on refresh
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

// mobile menu

function openMenu() {

  var navLinks = $(".mobile-nav-links");
    $(".mobile-nav-links").slideToggle();
    $(".mobile-nav-links").css("display", "flex");
}



// Landing Background switch
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
