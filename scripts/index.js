//Run on site load
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
//Variables and constants
var nav = document.getElementById("navBar");
var dropdownMenu01 = document.getElementById("dropMenu01");
var dropdownMenu02 = document.getElementById("dropMenu02");
var dropdownMenu03 = document.getElementById("dropMenu03");
const checkboxState = document.querySelector('.checkbox input[type="checkbox"]');

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

//Set theme (In local storage, for persistance and dark mode browser extensions)

function localStorThemeTggl(e){
  if (e.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
}
else {
    document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
}    
}