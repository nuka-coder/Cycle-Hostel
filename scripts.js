// preventing confirm resubmission popup on refresh
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}
// Animation for .pageTitle
$(document).on("load", function() {
  $(h1).slideDown();
})
//Button Effects
$("button").on("click", function() {
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
