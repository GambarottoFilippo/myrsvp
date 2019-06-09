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

$("[data-name='preferences_count_1']").on('click', function(e) {
  var old_value = parseInt($(this).children('div').html());
  if ($(e.target).hasClass('minus-btn') && old_value > 1) {
    $(this).children('div').html(old_value - 1);
    if (old_value === 2) {
      $(this).children('.minus-btn').attr('src', 'assets/img/app-preview/minus.svg')
    }
  } else if ($(e.target).hasClass('plus-btn')) {
    $(this).children('div').html(old_value + 1);
    if (old_value === 1) {
      $(this).children('.minus-btn').attr('src', 'assets/img/app-preview/minus-active.svg')
    }
  }
})

$("[data-name='preferences_count_0']").on('click', function(e) {
  var old_value = parseInt($(this).children('div').html());
  if ($(e.target).hasClass('minus-btn') && old_value > 0) {
    $(this).children('div').html(old_value - 1);
    if (old_value === 1) {
      $(this).children('.minus-btn').attr('src', 'assets/img/app-preview/minus.svg')
    }
  } else if ($(e.target).hasClass('plus-btn')) {
    $(this).children('div').html(old_value + 1);
    if (old_value === 0) {
      $(this).children('.minus-btn').attr('src', 'assets/img/app-preview/minus-active.svg')
    }
  }
})