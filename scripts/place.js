const temperature = 8;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
    windChill = "N/A";
}

const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("windSpeed");
const windChillElement = document.getElementById("windChill");
const currentYearElement = document.getElementById('currentYear');
const lastModifiedElement = document.getElementById('lastModified');

if (temperatureElement) temperatureElement.textContent = temperature;
if (windSpeedElement) windSpeedElement.textContent = windSpeed;
if (windChillElement) windChillElement.textContent = windChill;
if (currentYearElement) currentYearElement.textContent = new Date().getFullYear();

if (lastModifiedElement) {
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = lastModified;
}