// _____________ Weather output plugin script  https://openweathermap.org/ _____________ \\

// API key

let apiKey = // Write here yout api;

// City id wich it needed

let city = "293397";

// Forming url for GET request

let url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`;

// Send the request
axios.get (url) .then (res => {

    // Output the result to the browser console

    console.log (res.data);
});

// Send a GET request
axios.get(url).then(res => {

    // Display temperature max

    let maxTempGet = res.data.main.temp_max / 10,
        maxTempExist = maxTempGet.toFixed(1),
        maxTemp = '';

        for(i = 0; i < 9; i++){
            if(maxTempExist.includes(`${i}.`)) {
                maxTemp = maxTempExist.replace(`${i}.`, '');
            }
        }

    document.querySelector('.day-tmp').innerHTML = maxTemp;

    // Display temperature min

    let minTempGet = res.data.main.temp_min / 10,
        minTempExist = minTempGet.toFixed(1),
        minTemp = '';

        for(i = 0; i < 9; i++){
            if(minTempExist.includes(`${i}.`)) {
                minTemp = minTempExist.replace(`${i}.`, '');
            }
        }

    document.querySelector('.night-tmp').innerHTML = minTemp;

    //Display weather status

    document.querySelector('.weather-status .status').innerHTML = res.data.weather[0].main;

    let weatherStatus = res.data.weather[0].description;

    if(weatherStatus == "clear sky") {
        document.querySelector('.weather-image.clear').classList.add('active');
    }else if (weatherStatus == "few clouds"){
        document.querySelector('.weather-image.few_clouds').classList.add('active');
    }else if (weatherStatus == "clouds"){
        document.querySelector('.weather-image.clouds').classList.add('active');
    }else if (weatherStatus == "scattered clouds"){
        document.querySelector('.weather-image.scattered_clouds').classList.add('active');
    }else if (weatherStatus == "broken clouds"){
        document.querySelector('.weather-image.broken_clouds').classList.add('active');
    }else if (weatherStatus == "rain"){
        document.querySelector('.weather-image.rain').classList.add('active');
    }else if (weatherStatus == "thunderstorm"){
        document.querySelector('.weather-image.thunderstorm').classList.add('active');
    }else if (weatherStatus == "snow"){
        document.querySelector('.weather-image.snow').classList.add('active');
    }else if (weatherStatus == "mist"){
        document.querySelector('.weather-image.mist').classList.add('active');
    }else {
        //NO INFO !
    }

});

//Getting current day name

let arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dateObj = new Date();
let weekdayNumber = dateObj.getDay();
let weekdayName = arrayOfWeekdays[weekdayNumber];

document.querySelector('.day-out .day').innerHTML = weekdayName;

// _____________ End weather output plugin script _____________ \\
