// Toggle the dropdown menu
document.querySelector(".lang-btn").addEventListener("click", function () {
  document.querySelector(".lang-select").classList.toggle("show");
});

// Close the dropdown if clicked outside of it
window.addEventListener("click", function (e) {
  if (!e.target.matches(".lang-btn")) {
    var dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function (dropdown) {
      dropdown.parentElement.classList.remove("show");
    });
  }
});
