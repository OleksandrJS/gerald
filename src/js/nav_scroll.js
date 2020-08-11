/** @format */
import * as $ from '../local_modules/jquery/dist/jquery.min';

$(document).ready(function () {
  $('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate(
        { scrollTop: $(scroll_el).offset().top - 150 },
        1000,
      );
    }
    return false;
  });
});
