var today = moment();
  $(".date").text(today.format('L'));

  let root = 'https://api.openweathermap.org/data/2.5/forecast?q='

  let searchB = document.getElementById('search-button');
  let cityName = document.getElementById("search-input");
  let apiKey = "699f44b239ac2b4ed6242e958b370589"
  let wholeUrl = root+ 'london' + '&' + apiKey;

  $('#search-button').on('click', function(event){
      event.preventDefault();
      console.log(cityName.value);
     
     $("#search-button").val('')
    
  
  
  })
  console.log(cityName);

fetch(wholeUrl).then(response => response.json()).then(data => console.log(data));

var todaysDate = moment().format("L");
localStorage.setItem("selectedCity", cityName);
$("#selected-city-heading").text(cityName + " " + "(" + todaysDate + ")");



var todaysTemp = (Math.floor((response.list[0].main.temp) -273.15));
localStorage.setItem("todaysTemp", todaysTemp);
$("#selected-city-temp").text("Temp: " + todaysTemp + "°C");


var todaysWind = response.list[0].wind.speed;
localStorage.setItem("todaysWind", todaysWind);
$("#selected-city-wind").text("Wind: " + todaysWind + " KPH");



var todaysHumidity = response.list[0].main.humidity;
localStorage.setItem("todaysHumidity", todaysHumidity);
$("#selected-city-humidity").text(" Humidity: " + todaysHumidity + " %");


  // $.ajax({
  //   url: wholeUrl,
  //   method: "GET"
  // }).then(function(response) {
  //   let cityOption = document.getElementById("form-input weather-search")
  //   let forcast = response.forcast;
  //   let cityOptionanswer = $("<p>").text(forcast)
  //   cityOption.append(cityOptionanswer)
  //   console.log(forcast);
  //  })



//   function variables (){
//     let cityName = document.getElementById("search-input");
//     let searchB = document.getElementById('search-button');
//     const clearEl = document.getElementById("clear-history");
//     let nameEl = document.getElementById("London");
//     let currentTempEl = document.getElementById("temperature");
//     let currentHumidityEl = document.getElementById("humidity");
//    let currentWindEl = document.getElementById("wind-speed");
//    let fivedayEl = document.getElementById("fiveday-header");
//    let todayweatherEl = document.getElementById("today-weather");
  


 
  
// // // // beginning of url
// let root = 'http://api.openweathermap.org/geo/1.0/direct?q='


// function getWeather (cityName){
//   // adding all variables together
//   let wholeUrl = root+cityName+ "&limit=5&appid=" + apiKey;
//   $.ajax({
//     url: wholeUrl,
//     method: "GET"
//   }).then(function(response) {
//     todayweatherEl.classlist.remove('done');

//    const today = moment();
//   $("#today forecast").text(today.format("dddd Do MMMM"));
//   let weatherPic = response.data.weather[0].icon;
//   console.log(cityName.value)
//   })
// }

//   }

//   console.log(cityName)









  
// // search button
// let searchB = document.getElementById('search-button');
 

// $('#search-button').on('click', function(event){
//     event.preventDefault();
//     console.log(cityName.value);
   
// console.log(cityName);

// })

// let todaysWeather = document.getElementById('today forecast');
// todaysWeather.classList


//  function getWeather (){
//   let place = $(this).attr('search-input')
//   const queryURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + place + "3M1VZ9NYFdkpcjDQgxUoGBwE0x7FILRI";


//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {

//   }
//  )}


