var todaysDate = moment();
$(".date").text(todaysDate.format('L'));

let root = 'https://api.openweathermap.org/data/2.5/forecast?q='

let searchB = document.getElementById('search-button');
let cityName = document.getElementById("search-input");
let apiKey = "699f44b239ac2b4ed6242e958b370589"
let wholeUrl = root + 'london' + '&' + apiKey;

console.log(document.querySelector("#forecast"))
let selectedCity = document.querySelector("#selected-city-heading")
let cityTemp = document.querySelector('#selected-city-temp')
let cityWind = document.querySelector("#selected-city-wind")
let cityHumidity = document.querySelector('#selected-city-humidity')
let weatherIcon = document.querySelector('#todays-icon')
let dayWeather = document.querySelectorAll('.card-body')


$('#search-form').on('submit', function (event) {
  event.preventDefault();
  console.log(cityName.value);

  $("#search-button").val('')
  let todaysWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=${apiKey}`

  fetch(todaysWeather)
    .then(preJSON => {
      console.log(preJSON);
      return preJSON.json()
    })
    .then(currentWeather => {
      console.log("LINE 33", currentWeather)
      selectedCity.textContent = currentWeather.name
      cityTemp.textContent = currentWeather.main.temp
      cityWind.textContent = currentWeather.wind.speed
      cityHumidity.textContent = currentWeather.main.humidity
      weatherIcon.textContent = currentWeather.weather.icon
    })
    .catch(err => console.error(err));

  let day1 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&units=metric&appid=${apiKey}`

  fetch(day1)
    .then(beforeJson => {
      // console.log(beforeJson);
      return beforeJson.json()
    })
    .then(response => {
      // console.log("LINE 50", response)
      for (let i = 0; i < 6; i++) {
        console.log(response.list[i * 8])
        console.log(dayWeather[i].children)
        dayWeather[i].children[1].textContent = response.list[i * 8].main.temp + " C"
        dayWeather[i].children[2].textContent = response.list[i * 8].wind.speed
        dayWeather[i].children[3].textContent = response.list[i * 8].main.humidity
        dayWeather[i].children[0].setAttribute('src',`https://openweathermap.org/img/wn/${response.list[i*8].weather[0].icon}@2x.png`)
        // console.log(dayWeather[i].children)

      }
    })
    .catch(err => console.error(err));
})

// console.log(cityName)







