// ==========================================
// 1. SELECT HTML ELEMENTS
// ==========================================
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

// ==========================================
// 2. MAIN GENERATE FUNCTION
// ==========================================
function generateQR() {
    // Check if input field has text (trim() removes extra whitespace)
    if (qrText.value.trim().length > 0) {
        
        // Pass the user's input directly into the free QR Server API URL
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        
        // Add the CSS class that expands max-height to reveal the image
        imgBox.classList.add("show-img");

    } else {
        // If input is empty, trigger a quick shake animation to alert the user
        qrText.classList.add("error");
        
        // Remove the error class after 1 second so it can shake again on future clicks
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}