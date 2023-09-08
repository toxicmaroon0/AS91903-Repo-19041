// Import modules//
import "@popperjs/core"
import "bootstrap"

//Dark mode toggler js code//
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})