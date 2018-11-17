const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");
const navTag = document.querySelector("nav");

// when click toggle tag, toggle a class of open on main tag
// and if it's OPEN, make the toggle tag say "closed"
// and if not, make the toggle tag "open"
toggleTag.addEventListener("click", function() {
  console.log("you're clicking");

  mainTag.classList.toggle("open");
  navTag.classList.toggle("open");

  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="./assets/close.svg"> CLOSE`;
  } else {
    toggleTag.innerHTML = `<img src="./assets/menu.svg"> OPEN`;
  }
});
