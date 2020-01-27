const menu = document.querySelector(".menu"),
  close = document.querySelector(".close"),
  sidebar = document.querySelector(".mobile-nav");

//   Show
menu.addEventListener("click", () => {
  sidebar.classList.add("show");
});

// Close
close.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
