const key = '7934d92cbc67d798bab6a7653b2822b8';
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");


let getWeather = () => {
  let cityValue = cityRef.value;

  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  } else {
    let url = `http://api.weatherstack.com/current?access_key=${key}&query=${cityValue}`;
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log(data.current.weather_icons[0]);
        console.log(data.current.weather_descriptions[0]);
        console.log(data.location.name);
        console.log(data.current.temperature);
        result.innerHTML = `
          <h2>${data.location.name}</h2>
          <h4 class="weather">${data.current.weather_descriptions[0]}</h4>
          <img src="${data.current.weather_icons[0]}" alt="" />
          <h1>${data.current.temperature} &#176;</h1>`;
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not Found</h3>`;
      });
  }
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
