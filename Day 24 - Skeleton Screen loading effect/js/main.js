const titles = document.querySelectorAll(".card__title");
const descriptions = document.querySelectorAll(".card__description");
const images = document.querySelectorAll(".card__image");

function removeLoading() {
  // Setting titles
  titles.forEach((title, i) => {
    title.classList.remove("loading");
    title.textContent = "Heading " + (i + 1);
  });

  //   Setting description
  descriptions.forEach(desc => {
    desc.classList.remove("loading");
    desc.textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
  });

  //   Setting images
  images.forEach((img, i) => {
    img.classList.remove("loading");
    img.innerHTML = `<img src="https://picsum.photos/400/300?t=${i}" />`;
  });
}

// After 3 seconds content gets displayed
setTimeout(() => {
  removeLoading();
}, 5000);
