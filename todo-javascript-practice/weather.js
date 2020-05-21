const weather = document.querySelector(".js-weather");
const API_KEYS = "838c79226166ffc99145f3740d939dfe";

const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`)
        .then(function (response) {
            return response.json()
        }).then(function (json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `온도 : ${temperature} 현재 위치 : ${place}`;
            console.log(json)
        })
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords () { 
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null ){
        askForCoords();
    } else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}
function init(){
    askForCoords();
}init();