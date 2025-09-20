// API_KEY 제거 (이제 프론트에는 키가 필요 없음)
// const API_KEY = "api 키";

const weatherText = document.querySelector("#weather #weather-text");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // OpenWeather 대신, Vercel 서버리스 함수 호출
  const url = `/api/weather?lat=${lat}&lon=${lon}`;
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
