// preventing confirm resubmission popup on refresh
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}
