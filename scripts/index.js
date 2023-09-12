//Variables and constants
var nav = document.getElementById("navBar");
var dropdownMenu01 = document.getElementById("dropMenu01");
var dropdownMenu02 = document.getElementById("dropMenu02");
var dropdownMenu03 = document.getElementById("dropMenu03");
var dropNavbar = document.getElementById("navbarSupportedContent");
var checkbox = document.getElementById("darkLightToggle");

// Functions //
darkModeCheck = function(localStorVal){
  if(localStorVal) {
      document.body.classList.add('dark');
      nav.classList.remove("bg-light");
      nav.classList.add("bg-dark");
      nav.classList.remove("navbar-light");
      nav.classList.add("navbar-dark");
      dropdownMenu01.classList.add("dark");
      dropdownMenu02.classList.add("dark");
      dropdownMenu03.classList.add("dark");
      dropNavbar.classList.add("dark");
      checkbox.classList.add('checked');
  } else{
      null
  }};
finishCheckReset = function(){
  if(checkbox.classList.contains('checked')){
    checkbox.classList.remove('checked');
    checkbox.classList.add('reset_pos');
  };
  setTimeout(() => {checkbox.classList.remove('reset_pos');},500)
};

////Dark mode toggler js code//
//checkbox.addEventListener("change", () => {
//  document.body.classList.toggle("dark");
//  nav.classList.toggle("bg-light");
//  nav.classList.toggle("bg-dark");
//  nav.classList.toggle("navbar-light");
//  nav.classList.toggle("navbar-dark");
//  dropdownMenu01.classList.toggle("dark");
//  dropdownMenu02.classList.toggle("dark");
//  dropdownMenu03.classList.toggle("dark");
//  dropNavbar.classList.toggle("dark");
//  finishCheckReset()
//});
//if(document.body.classList.contains("dark")){
//  localStorage.setItem('dark', true)
//} else {
//  localStorage.setItem('dark', false)
//};

////Page load
//document.addEventListener("DOMContentLoaded", function() {
//  darkModeCheck(localStorage.getItem('dark'));
//});