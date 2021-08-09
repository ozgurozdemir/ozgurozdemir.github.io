function trans(obj) {
  $('#LA').fadeOut(400, function() {
    $(this).html('<p>“I think therefore I am.”</p>').fadeIn(200);
    $(this).attr("id", "EN");
  });
}


function transBack(obj) {
  $('#EN').fadeOut(400, function() {
    $(this).html('<p>“Cogito ergo sum.”</p> ').fadeIn(200);
    $(this).attr("id", "LA");
  });
}
