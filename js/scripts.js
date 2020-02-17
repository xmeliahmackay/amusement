$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches? (try a number under 48, and then try a number over"));

  if (height > 48) {
    $('.tall').show();
  } else {
    $('.short').show();
  }

  $("#allRides").click(function() {
    $('.tall').toggle();
    $('.short').toggle();
  })
  $("#hilight").click(function() {
    $('.descript').toggle();
    $('.descriptor').toggle();
  })
});