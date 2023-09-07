// Import modules//
import "@popperjs/core"
import "bootstrap"

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function phoneScreenToggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }