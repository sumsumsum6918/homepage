document.querySelector(".menu-button").addEventListener("click", () => {
  openDropdownMenu();
});

document.querySelector(".inner-menu-button").addEventListener("click", () => {
  closeDropdownMenu();
});

function openDropdownMenu() {
  document
    .querySelector(".menu-dropdown")
    .classList.add("js-menu-dropdown-open");
}
function closeDropdownMenu() {
  document
    .querySelector(".menu-dropdown")
    .classList.remove("js-menu-dropdown-open");
}
