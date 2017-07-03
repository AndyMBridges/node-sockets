var socket = io();
$('button').click(function() {
  socket.emit('video select', $(this).data('video'));
});
socket.on('video select', function(video){
  console.log(video);
  // console.log(logoPath);
  $('#video').html(video);
  $('button').addClass('disabled');
  setTimeout(function () {
      $('#video').html('default video');
      $('button').removeClass('disabled');
  }, 5000)
});
$('.url').text(window.location.href + 'remote');
