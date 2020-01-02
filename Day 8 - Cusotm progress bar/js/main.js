const progress = document.querySelector(".inner");

document.querySelector(".animate").addEventListener("click", function() {
  progress.classList.remove("full");

  setTimeout(() => {
    progress.classList.add("full");
  }, 100);
});

// Set resize observer
let resizeObserver = new ResizeObserver(() => {
  //   console.log(progress.offsetWidth);
  let percentage = Math.round((progress.offsetWidth / 356) * 100);

  if (percentage !== 0) {
    progress.innerHTML = `${percentage}%`;
  }
});

resizeObserver.observe(progress);
