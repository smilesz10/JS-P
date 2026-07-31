const userInput = document.getElementById("date");
const result = document.getElementById("result");

// Disable future dates in the calendar picker
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  if (!userInput.value) {
    result.innerHTML = "Please select a valid date!";
    return;
  }

  // Parse birth date and current date
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1; // getMonth() is 0-indexed (0 = Jan, 11 = Dec)
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  // Calculate year difference
  y3 = y2 - y1;

  // Calculate month difference
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  // Calculate day difference
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  // Display result
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}

// Helper function to get exact number of days in a specific month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}