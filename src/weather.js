const weatherDiv = document.querySelector("#weather-div");
const API_KEY = "954bd9cedf10d76c0f45afd73e09da5a";

function onGeoOk(position) {
  const icon = weatherDiv.querySelector(".weather-info__img");
  const temp = weatherDiv.querySelector(".weather-info__temp");
  const city = weatherDiv.querySelector(".weather-city");

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const iconSrc = data.weather[0].icon;
      const tempSrc = data.main.temp;
      const contSrc = data.sys.country;

      icon.src = `./icons/${iconSrc}.png`;
      temp.innerHTML = `${Math.floor(tempSrc)}°`;
      city.innerHTML = `${data.name}, ${contSrc}`;
    })
  );
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
