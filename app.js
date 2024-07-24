const apikey ="be8179b845b0fef8352e005fce9f4076";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/Clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "img/Clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/Rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/Drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/Mist.png";
    }

    document.querySelector(".weather").style.display ="block"
    document.querySelector(".error").style.display = "none";

    
    }

    
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);

})