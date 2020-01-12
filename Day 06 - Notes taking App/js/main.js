const newNote = document.getElementById("note"),
  notes = document.querySelector(".notes"),
  form = document.getElementById("add-note");

class Note {
  // Add note
  addNote() {
    Note.showNote(newNote.value);

    // add to Local storage
    if (localStorage.getItem("notes")) {
      let n = JSON.parse(localStorage.getItem("notes"));

      n.push(newNote.value);

      localStorage.setItem("notes", JSON.stringify(n));

      console.log(localStorage.getItem("notes"));
    } else {
      localStorage.setItem("notes", JSON.stringify([newNote.value]));
    }

    newNote.value = "";
  }

  //   Getting notes from LS
  static getNotes() {
    if (localStorage.getItem("notes")) {
      return JSON.parse(localStorage.getItem("notes"));
    } else {
      return false;
    }
  }

  //   Show single note
  static showNote(n) {
    let content = document.createElement("div");

    content.classList.add("note");
    content.innerHTML = `
        <p>${n}</p>
        <p class="actions">
            <button class="delete" onclick="btnClicked(event)"><i class="fas fa-trash-alt"></i></button>
        </p>
        `;

    notes.prepend(content);
  }

  //   Display All notes
  static display() {
    if (localStorage.getItem("notes")) {
      let n = Note.getNotes();

      n.forEach(note => {
        Note.showNote(note);
      });
    } else {
      localStorage.setItem("notes", JSON.stringify([]));
    }
  }

  //   Delete note
  static deleteNote(n) {
    if (Note.getNotes()) {
      let ns = Note.getNotes();

      ns.forEach((i, index) => {
        if (n === i) {
          ns.splice(index, 1);
          localStorage.setItem("notes", JSON.stringify(ns));
        }
      });
    } else {
      console.log("Nopes");
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // Display Notes
  Note.display();

  //   Submit on Ctrl+Enter
  window.addEventListener("keydown", function(e) {
    if (event.keyCode == 13 && event.ctrlKey) {
      e.preventDefault();

      if (newNote.value !== "") {
        console.log("opre");

        let note = new Note();
        note.addNote();
      }
    }
  });

  //   Form submit event
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (newNote.value !== "") {
      let note = new Note();
      note.addNote();
    }
  });
});

// Delete Button onclick function
function btnClicked(e) {
  e.preventDefault();

  Note.deleteNote(
    e.target.parentElement.parentElement.previousElementSibling.textContent
  );

  e.target.parentElement.parentElement.parentElement.remove();
}
