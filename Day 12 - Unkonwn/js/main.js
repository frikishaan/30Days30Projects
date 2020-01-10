const tl = document.querySelector(".tl"),
  tr = document.querySelector(".tr"),
  br = document.querySelector(".br"),
  bl = document.querySelector(".bl"),
  toast = document.querySelector(".toast");

document.getElementById("tl").addEventListener("click", () => {
  btnClicked("tl");
});
document.getElementById("tr").addEventListener("click", () => {
  btnClicked("tr");
});
document.getElementById("br").addEventListener("click", () => {
  btnClicked("br");
});
document.getElementById("bl").addEventListener("click", () => {
  btnClicked("bl");
});

function btnClicked(pos) {
  switch (pos) {
    case "tl":
      tl.classList.add("show-top");
      setTimeout(() => {
        tl.classList.remove("show-top");
      }, 3000);
      break;

    case "tr":
      tr.classList.add("show-top");
      setTimeout(() => {
        tr.classList.remove("show-top");
      }, 3000);
      break;
    case "br":
      br.classList.add("show-bottom");
      setTimeout(() => {
        br.classList.remove("show-bottom");
      }, 3000);
      break;
    case "bl":
      bl.classList.add("show-bottom");
      setTimeout(() => {
        bl.classList.remove("show-bottom");
      }, 3000);
      break;

    default:
      break;
  }
}
