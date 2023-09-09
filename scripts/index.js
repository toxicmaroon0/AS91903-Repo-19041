//Variables
var nav = document.getElementById("navBar");
var dropdownMenu01 = document.getElementById("dropMenu01");
var dropdownMenu02 = document.getElementById("dropMenu02");
var dropdownMenu03 = document.getElementById("dropMenu03");

//Dark mode toggler js code//
const checkbox = document.getElementById("darkLightToggle");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  nav.classList.toggle("bg-light");
  nav.classList.toggle("bg-dark");
  nav.classList.toggle("navbar-light");
  nav.classList.toggle("navbar-dark");
  dropdownMenu01.classList.toggle("dark");
  dropdownMenu02.classList.toggle("dark");
  dropdownMenu03.classList.toggle("dark");
});