const notes = document.querySelectorAll(".key");

// Setting key-notes pairs
const keys = {
  a: "C",
  w: "Db",
  s: "D",
  e: "Eb",
  d: "E",
  g: "F",
  h: "G",
  y: "Gb",
  j: "A",
  u: "Ab",
  i: "Bb",
  k: "B"
};

// Setting Click events for each key
notes.forEach(note => {
  note.addEventListener("click", () => {
    document.getElementById(note.getAttribute("data-note")).play();
  });
});

// Keypress events
window.addEventListener("keypress", e => {
  playNote(e.key);
});

// Play note function
function playNote(note) {
  if (note in keys) {
    document.getElementById(keys[note]).play();

    let key = document.querySelector(`[data-note="${keys[note]}"]`);

    if (key.classList.contains("white")) {
      key.classList.add("white-active");
      setTimeout(() => {
        key.classList.remove("white-active");
      }, 300);
    } else {
      key.classList.add("black-active");
      setTimeout(() => {
        key.classList.remove("black-active");
      }, 300);
    }
  }
}
