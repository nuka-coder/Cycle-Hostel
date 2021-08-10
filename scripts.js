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
  $(this).css("background-color", "#C0B018").slideUp(200).slideDown(300);
  $(this).css("color", "white");
})
