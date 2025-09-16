// Function to get saved notes from LocalStorage
function getNotes() {
  let notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}

// Function to display notes from LocalStorage
function displayNotes() {
  let notes = getNotes();
  let notesList = document.getElementById("notes-list");
  notesList.innerHTML = ""; // Clear previous notes before rendering

  notes.forEach((note, index) => {
    notesList.innerHTML += `
            <div class="note">
                <h4>${note.title}</h4>
                <p>${note.content}</p>
                <div class="buttons">
                    <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
                </div>
            </div>
        `;
  });
}

// Function to add a new note
function addNote() {
  let title = document.getElementById("note-title").value.trim();
  let content = document.getElementById("note-content").value.trim();

  if (title === "" || content === "") {
    alert("Please enter both title and content!");
    return;
  }

  let notes = getNotes();
  notes.push({ title, content });

  localStorage.setItem("notes", JSON.stringify(notes));

  // Clear input fields
  document.getElementById("note-title").value = "";
  document.getElementById("note-content").value = "";

  displayNotes();
}

// Function to delete a note
function deleteNote(index) {
  let notes = getNotes();
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();
}

// Display saved notes on page load
document.addEventListener("DOMContentLoaded", displayNotes);
