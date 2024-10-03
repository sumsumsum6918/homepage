document.querySelector(".menu-button").addEventListener("click", () => {
  openDropdownMenu();
});

function openDropdownMenu() {
  document
    .querySelector(".menu-dropdown")
    .classList.add("js-menu-dropdown-open");
}
