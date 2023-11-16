const popupBackground = document.querySelector(".popup")

popupBackground.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    return (window.location.hash = "section-tours")
  }
})
