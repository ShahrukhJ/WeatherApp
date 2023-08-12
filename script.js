const apiKey = "cd86a189605296555beb789af40e099f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "photos/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "photos/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "photos/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "photos/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "photos/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.querySelector("input").value);
});
