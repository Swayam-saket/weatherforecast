document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search");
    searchButton.addEventListener("click", () => {
        const locationInput = document.getElementById("location");
        const locationName = document.getElementById("location-name");
        const weatherDescription = document.getElementById("weather-description");
        const temperature = document.getElementById("temperature");

        const apiKey = "3d4c74911deaf085a415c30627368564";
        const location = locationInput.value;
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                locationName.textContent = data.name;
                weatherDescription.textContent = data.weather[0].description;
                temperature.textContent = `${(data.main.temp - 273.15).toFixed(1)}°C`;
            })
            .catch((error) => console.log("Error: " + error));
    });
});
