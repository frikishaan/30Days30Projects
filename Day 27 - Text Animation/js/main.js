window.onload = function() {
  document.querySelector(".text").classList.add("spaced");

  const steps = document.querySelectorAll(".advice");
  var count = 0;
  setInterval(() => {
    steps[count].style.display = "block";
    steps[count].style.opacity = "1.0";
  }, 3000);
};
