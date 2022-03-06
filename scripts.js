// preventing confirm resubmission popup on refresh
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}
// Animation for .pageTitle
$(document).on("load", function() {
  $(h1).slideDown();
})
//Button Effects
$(".book-btn").on("click", function() {
  $(this).css("background-color", "#334147").slideUp(200).slideDown(300);
  $(this).css("color", "white");
})

//Navbar Links Effects
$(".nav-link").on("mouseover", function() {
  $(this).addClass("nav-link-effect");
  $(this).css("color", "#334147");
})
$(".nav-link").on("mouseout", function() {
  $(this).removeClass("nav-link-effect");
  $(this).css("color", "white");
})

// HAMBURGER MENU //
const navMenuIcon1 = $(".menu-icon-1"); //triple bar menu icon
const navMenuIcon2 = $(".menu-icon-2"); //double bar menu icon
const pageLinkMenu = $("#nav-links"); //menu links (i.e. Menu, Contact, Home)

//function attached to 'click' event listener for mobile menu dropdown (click event applied in html)
function mobileMenuClick1() {
    navMenuIcon2.slideDown(); //appear double line menu icon
    navMenuIcon1.css("display", "none");//hide triple line menu icon
    pageLinkMenu.slideDown();//slide down menu links from navabr
};
function mobileMenuClick2() {
  navMenuIcon2.css("display", "none");//hide double line menu icon
  navMenuIcon1.slideDown();//appear triple line menu icon
  pageLinkMenu.slideUp();//hide menu links dropdown
};
//function for mouseover event listener for menu icons
function mobileMenuMouseover() {
$(".menu-icon-1").css("color","#BBA484");
$(".menu-icon-2").css("color","#BBA484");
};

function mobileMenuMouseleave() {
$(".menu-icon-1").css("color","#fff");
$(".menu-icon-2").css("color","#fff");
};


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
