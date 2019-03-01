import './sass/styles.scss';
import $ from 'jquery';

$(document).ready(function() {
  $(".burger").click(function() {
    $("#dropdown").fadeToggle();
  });
});
