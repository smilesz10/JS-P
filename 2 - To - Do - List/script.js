const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// 1. Add a new task
function addTask() {
  if (inputBox.value.trim() === '') {
    alert("You must write something!");
  } else {
    // Create a new <li> element dynamically
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Create the 'x' delete button inside a <span> tag
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode for 'x' symbol
    li.appendChild(span);
  }

  // Clear input box after adding
  inputBox.value = "";
  
  // Save current list state to browser storage
  saveData();
}

// 2. Click event listener to handle checking & deleting tasks (Event Delegation)
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    // Toggle checked class to strike through text
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    // Remove the parent <li> when 'x' is clicked
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// 3. Save tasks to browser's Local Storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// 4. Load saved tasks when page opens
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Automatically load saved tasks on initial page load
showTask();