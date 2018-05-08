$(document).ready(function() {
  $('#pump').click(function() {
    $.get('/home/pump', { status: 1 }, function() {
      console.log('agurkas');
    });
  });

  $('#gate1').click(function() {
    $.get('/home/pump', function() {
      console.log('agurkas');
    });
  });

  $('#gate2').click(function() {
    $.get('/home/pump', function() {
      console.log('agurkas');
    });
  });

  $('#gate3').click(function() {
    $.get('/home/pump', function() {
      console.log('agurkas');
    });
  });
});