/*Get the Geo-Location of the city being searched*/
const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim(); /*Get user entered city name and remove extra spaces*/
}

searchButton.addEventListener("click, getCityCoordinates");