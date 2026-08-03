// ==========================================
// 1. SELECT HTML ELEMENTS & API ENDPOINT
// ==========================================
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// Free public quotes API endpoint
const api_url = "https://api.quotable.io/random";

// ==========================================
// 2. FETCH QUOTE FROM API
// ==========================================
async function getQuote(url) {
    try {
        // Show loading state while fetching
        quote.innerHTML = "Loading quote...";
        author.innerHTML = "...";

        // Fetch data from the API
        const response = await fetch(url);
        var data = await response.json();

        // Update HTML content with API response
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    } catch (error) {
        // Fallback in case of API network failure
        quote.innerHTML = "An error occurred while fetching the quote.";
        author.innerHTML = "Unknown";
    }
}

// Call function immediately on page load to display the first quote
getQuote(api_url);

// ==========================================
// 3. TWEET / SHARE FUNCTION
// ==========================================
function tweet() {
    // window.open() opens a new browser popup/tab with pre-filled tweet text
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.innerHTML)} ---- by ${encodeURIComponent(author.innerHTML)}`;
    
    window.open(twitterUrl, "Tweet Window", "width=600, height=300");
}