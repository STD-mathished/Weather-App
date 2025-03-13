import config from './config.js';
let key = config.apiKey;
let url = 'http://api.weatherapi.com/v1';


let btn = document.querySelector("#submit-btn");
let temp = document.querySelector("#temperature");
let city = document.querySelector("#city");
let choice = document.querySelector("#choice");

function getTemperature() {
    let cityValue = city.value;
    fetch(`${url}/current.json?key=${key}&q=${cityValue}`)
        .then((response) => response.json())
        .then((data) => {
            temp.innerHTML = `${data.current.temp_c}`;
            choice.innerHTML = cityValue;
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

//getting temperature
//btn.addEventListener("click", getTemperature);
btn.addEventListener("click", getTemperature);