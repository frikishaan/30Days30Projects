const card = document.querySelector(".card");

document.querySelector("#login").addEventListener("click", () => {
  card.classList.remove("rotate");
});
document.querySelector("#signup").addEventListener("click", () => {
  card.classList.add("rotate");
});
