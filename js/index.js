function trans(obj) {
  $('#LA').fadeOut(400, function() {
    $(this).html('<p>“I doubt therefore I think,<br><span style="padding-left: 2em;">I think therefore I am.”</span></p>').fadeIn(200);
    $(this).attr("id", "EN");
  });
}


function transBack(obj) {
  $('#EN').fadeOut(400, function() {
    $(this).html('<p>“Dubito ergo cogito,<br><span style = "padding-left: 2em;"> cogito ergo sum.” </span></p> ').fadeIn(200);
    $(this).attr("id", "LA");
  });
}