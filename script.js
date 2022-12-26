const dropDownMenw = document.querySelector('.dropdown');

const burgerIcon = document.querySelector('.dropdownmenu');


$( ".dropdownmenu" ).click(function() {
    $( ".dropdown" ).slideToggle( "slow", function() {
    });
  });