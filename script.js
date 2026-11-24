const url = "https://api.open-meteo.com/v1/forecast?latitude=29.95465&longitude=-90.07507&current=temperature_2m,wind_speed_10m,precipitation,wind-direction_10m&temperature_unit=fahrenheit";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    weatherArea.textContent = ""; //first line inside getWeather

    // Temperature
    const temp = document.createElement("p");
    temp.className = "fs-4";
    temp.textContent = "Temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;
    weatherArea.appendChild(temp);

    // Wind Speed
    const wind = document.createElement("p");
    wind.className = "fs-4";
    wind.textContent = "Wind Speed: " + data.current.wind_speed_10m + " " + data.current_units.wind_speed_10m;
    weatherArea.appendChild(wind);

    // Precipitation
    const precipitation = document.createElement("p");
    precipitation.className = "fs-4";
    precipitation.textContent = "Precipitation: " + data.current.precipitation + " mm ";
    weatherArea.appendChild(precipitation);

    //Is Day
    const windDirection = document.createElement("p");
    windDirection.className = "fs-4";
    windDirection.textContent = "Wind Direction " + data.current_weather.winddirection + "°";
    weatherArea.appendChild(windDirection);
}

button.addEventListener("click", getWeather);