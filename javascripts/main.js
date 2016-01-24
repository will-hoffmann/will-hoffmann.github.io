function displayVisibleEntries(selector) {
  var windowBottom = $(window).scrollTop() + $(window).height();
  $(selector).each(function(i){
    if(windowBottom > $(this).offset().top){
      $(this).animate({'opacity':'1', 'margin-top': '7px'}, 400);
    }
  });
}

function loadLiveContent() {
  $.get("https://s3.amazonaws.com/charlieegan3/status.json", function(data) {
    $('.spinner').remove();
    displayVisibleEntries('.live');
  });
}

$(document).ready(function() {
  loadLiveContent();
  displayVisibleEntries('.later');
  $(window).scroll(function(){
    displayVisibleEntries('.later');
    displayVisibleEntries('.live');
  });
});
