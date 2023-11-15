const apikey = "8ee11cc5b0deae36a6af9d4edf3fb8db";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response= await fetch(apiUrl+city+`&appid=${apikey}`);
    var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    //added condition
    if(data.weather[0].main=="clouds"){
       weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
searchBtn.addEventListener("keydown",function(event){
    if(event=="Enter"){
        checkWeather(searchBox.value);
    }
})

checkWeather();