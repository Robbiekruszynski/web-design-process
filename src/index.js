import './sass/styles.scss';
import $ from 'jquery';

$(document).ready(function() {
  $(".nav").click(function() {
    $("#dropdown").fadeToggle();
  });
});
