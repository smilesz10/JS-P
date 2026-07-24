// 1. API Configuration
// DO NOT declare apiKey here anymore! Just use it directly.
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// 2. Select HTML Elements (DOM Selection)
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// 3. Async Function to Fetch Weather Data
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  // Handle Unauthorized API Key
  if (response.status === 401) {
    alert("API Key not active yet! Please wait 15-30 minutes after signing up on OpenWeather.");
    return;
  }

  // Handle City Not Found
  if (response.status === 404) {
    alert("Invalid city name! Please check your spelling.");
    return;
  }

  // Parse JSON only if the response was successful (200 OK)
  const data = await response.json();

  // Safely update the DOM
  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerText = data.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed + " km/h";

  // Dynamic Image Switching
  const weatherState = data.weather[0].main;

  if (weatherState === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (weatherState === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (weatherState === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (weatherState === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (weatherState === "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}

// 4. Event Listeners (Triggers)

// Click the Search Button
searchBtn.addEventListener("click", () => {
  if (searchBox.value.trim() !== "") {
    checkWeather(searchBox.value);
  }
});

// Press "Enter" Key in Input Field
searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && searchBox.value.trim() !== "") {
    checkWeather(searchBox.value);
  }
});