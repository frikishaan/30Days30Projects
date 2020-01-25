// setInterval(() => {
//   console.log(new Date().getTime());
//   let img = document.createElement("img");
//   img.src = "https://picsum.photos/200/300?t=" + new Date().getTime();

//   document.querySelector(".container").appendChild(img);
// }, 2000);

const container = document.querySelector(".container");
const url = "https://picsum.photos/600";
var images = [];
var page = 1;

// OnScroll event
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // console.log({ scrollTop, scrollHeight, clientHeight });

  if (clientHeight + scrollTop >= scrollHeight - 5) {
    loadImages(6);
  }
});

function loadImages(range) {
  for (let i = 0; i < range; i++) {
    let image = document.createElement("div");

    image.classList.add("col");

    image.innerHTML = `
       <img src="${url}?t=${new Date().getTime() + i}" alt="" />
    `;

    container.appendChild(image);
  }
}

loadImages(9);
