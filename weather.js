/*const apiKey='ed8f6a08bc66372bd3df7f903d3dfd6d';
const apiUrl='https://api.openweathermap.org/data/2.5/weather';
let location=document.getElementById("location").value;
//document.getElementById("name").innerHTML=location;
function weather_report(){
    if(location)
        fetchWeather(location);
    else
        alert("please provide input");
}
function fetchWeather(){
    const url=`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("name").textContent=data.name;
            document.getElementById("temp").textContent=`${Math.round(data.main.temp)}C`;
            document.getElementById("description").textContent=data.weather[0].description;
        })
        .catch(error =>{
            console.error('Error fetching weather data:',error);
        });
}*/
document.getElementById('location').value="";
const apiKey = 'ed8f6a08bc66372bd3df7f903d3dfd6d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const locationInput = document.getElementById('location');
const searchButton = document.getElementById('search');
const locationElement = document.getElementById('name1');
const temperatureElement = document.getElementById('temp1');
const descriptionElement = document.getElementById('description1');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
    else
    {
        locationElement.textContent="please provide input";
        locationElement.textContent.style.color="red";
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}


