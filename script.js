import config from './config.js';
let key = config.apiKey;
let url = 'http://api.weatherapi.com/v1';


let btn = document.querySelector("#submit-btn");
let temp = document.querySelector("#temperature");
let city = document.querySelector("#city");
let choice = document.querySelector("#choice");
let sunriseTime = document.querySelector("#sunrise");
let sunsetTime = document.querySelector("#sunset");

function getTemperature() {
    let cityValue = city.value;
    fetch(`${url}/current.json?key=${key}&q=${cityValue}`)
        .then((response) => response.json())
        .then((data) => {
            temp.innerHTML = `${data.current.temp_c}`;
            choice.innerHTML = `${data.location.name}`;
            console.log(choice.value);
            resetField();
        })
        .catch((error) => {
            console.log(error);
            resetField();
        });
}

function resetField(){
    city.value = "";
}

function getSunriseInfo(){
    let cityValue = city.value;
    fetch(`${url}/astronomy.json?key=${key}&q=${cityValue}`)
    .then((response) => response.json())
    .then((data) => {
        sunriseTime.innerHTML = `${data.astronomy.astro.sunrise}`;
        sunsetTime.innerHTML = `${data.astronomy.astro.sunset}`;
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
}

//getting temperature and sunrise info
btn.addEventListener("click", getTemperature);
btn.addEventListener("click", getSunriseInfo);