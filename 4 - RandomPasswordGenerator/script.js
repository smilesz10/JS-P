const passwordBox = document.getElementById("password");
const length = 12;

// Character sets
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_~|{}[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

// 1. Function to generate a random password
function createPassword() {
  let password = "";

  // Ensure at least one character from each required set is included
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // Fill the remaining length with random characters from all sets combined
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Display the generated password in the input field
  passwordBox.value = password;
}

// 2. Function to copy the password to the clipboard
function copyPassword() {
  if (!passwordBox.value) {
    alert("Please generate a password first!");
    return;
  }

  // Select input text and write to clipboard
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}