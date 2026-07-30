const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// 1. Retrieve saved notes on startup
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// 2. Save notes HTML state to Local Storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// 3. Create a new editable note box
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    
    // Using a trash icon from CDN for easy setup
    img.src = "https://cdn-icons-png.flaticon.com/512/3096/3096673.png";
    
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

// 4. Delete note OR trigger auto-save when typing
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function() {
                updateStorage();
            };
        });
    }
});

// 5. Prevent default Enter key behavior (inserts clean line break instead of <div>)
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});