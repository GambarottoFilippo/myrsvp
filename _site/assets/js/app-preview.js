$('#agree_submit').on('click', function() {
  $('#modal_agree').modal('hide');
  $('#modal_confirm').modal('show');
  $('.selected').removeClass('selected');
  $('#agree_button').addClass('selected');
  setTimeout(function() {
    $('#modal_confirm').modal('hide');
  }, 3000);
})

$('#refuse_submit').on('click', function() {
  $('#modal_refuse').modal('hide');
  $('#modal_confirm').modal('show');
  $('.selected').removeClass('selected');
  $('#refuse_button').addClass('selected');
  setTimeout(function() {
    $('#modal_confirm').modal('hide');
  }, 3000);
})