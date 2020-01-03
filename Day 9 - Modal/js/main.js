const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

document.querySelector(".btn").addEventListener("click", function() {
  modal.style.display = "block";
  modalContent.classList.add("show");
});

document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none";
  modalContent.classList.remove("show");
});

window.onclick = e => {
  if (e.target == modal) {
    modal.style.display = "none";
    modalContent.classList.remove("show");
  }
};
