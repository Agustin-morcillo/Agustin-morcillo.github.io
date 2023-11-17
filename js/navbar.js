const navbarCheckbox = document.querySelector("#nav-toggle")
const navOptionsContainer = document.querySelector(".navigation__list")

navOptionsContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("navigation__link") &&
    navbarCheckbox.checked
  ) {
    navbarCheckbox.checked = false
  }
})
