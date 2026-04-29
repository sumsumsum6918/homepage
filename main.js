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
function copyNumber() {
  const phoneNumber = "+46765668780";

  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      alert("Phone number copied: " + phoneNumber);
    })
    .catch(() => {
      alert("Could not copy the number.");
    });
}
