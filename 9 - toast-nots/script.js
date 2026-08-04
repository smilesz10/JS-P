// ==========================================
// 1. SELECT CONTAINER & DEFINE MESSAGES
// ==========================================
const toastBox = document.getElementById("toastBox");

// Message strings containing Font Awesome icons for each type of notification
const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
const invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid input, check again';

// ==========================================
// 2. MAIN TOAST GENERATION FUNCTION
// ==========================================
function showToast(msg) {
    // Step A: Create a brand new <div> element in memory
    let toast = document.createElement("div");
    
    // Step B: Add the base 'toast' class for styling
    toast.classList.add("toast");
    
    // Step C: Inject the message text and icon into our new div
    toast.innerHTML = msg;

    // Step D: Add specific contextual modifier classes based on message content
    if (msg.includes("error")) {
        toast.classList.add("error");
    }
    if (msg.includes("Invalid")) {
        toast.classList.add("invalid");
    }

    // Step E: Append the newly created toast div into the #toastBox container on screen
    toastBox.appendChild(toast);

    // Step F: Self-destruct after 5000ms (5 seconds) to clean up the DOM
    setTimeout(() => {
        toast.remove();
    }, 5000);
}