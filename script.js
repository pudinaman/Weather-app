const apikey = "8ee11cc5b0deae36a6af9d4edf3fb8db";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Indore";
async function checkWeather(){
    const response= await fetch(apiUrl+`&appid=${apikey}`);
    var data=await response.json();

    console.log(data);
}
checkWeather();