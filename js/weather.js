const API_KEY = "7424f262b5ad02958b37e52625ea069c";

const weatherText = document.querySelector("#weather #weather-text");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = Math.round(data.main.temp);
      const desc = data.weather[0].description;
      weatherText.innerText = `${temp}℃ / ${desc}`;
    })
    .catch(() => {
      weatherText.innerText = "Weather unavailable";
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
