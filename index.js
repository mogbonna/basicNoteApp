// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");
// let inputBox = document.querySelectorAll(".input-box");

// function showNotes() {
//   notesContainer.innerHTML = localStorage.getItem("notes");
// }
// showNotes();

// function updateStorage() {
//   localStorage.setItem("notes", notesContainer.innerHTML);
// }

// createBtn.addEventListener("click", () => {
//   let inputBox = document.createElement("p");
//   let img = document.createElement("img");
//   inputBox.className = "input-box";
//   inputBox.setAttribute("contenteditable", "true");
//   img.src = "images/delete.png";
//   notesContainer.appendChild(inputBox).appendChild(img);
//   updateStorage();
// });

// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//     e.target.parentElement.remove();
//     updateStorage();
//   } else if (e.target.tagName === "P") {
//     notes = document.querySelectorAll(".input-box");
//     notes.forEach((nt) => {
//       nt.onkeyup = function () {
//         updateStorage();
//       };
//     });
//   }
// });

// document.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     document.execCommand("insertLineBreak");
//     event.preventDefault();
//   }
// });

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Show notes from localStorage on page load
function showNotes() {
  const notes = localStorage.getItem("notes");
  if (notes) {
    notesContainer.innerHTML = notes;
  }
}
showNotes();

// Update localStorage with current notes
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create a new note
createBtn.addEventListener("click", () => {
  const note = document.createElement("p");
  const deleteBtn = document.createElement("img");

  note.className = "input-box";
  note.setAttribute("contenteditable", "true");

  deleteBtn.src = "images/delete.png";
  deleteBtn.alt = "Delete Note";

  note.appendChild(deleteBtn);
  notesContainer.appendChild(note);

  updateStorage();
});

// Handle note deletion and updates
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

notesContainer.addEventListener("input", (e) => {
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});

// Prevent Enter key from creating a new paragraph
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
