const formJs = document.querySelectorAll("form")[0];
//JQUERY === $
//const formJquery = jQuery("form")[0];
const formJquery = $("form").eq(0);
const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const listJQ = $(".cities").eq(0);
console.log(formJs);
console.log(formJquery);
console.log(inputJQ);
console.log(msgJQ);
console.log(listJQ);

$(window).on("load", () => {
  console.log("window.load");
});
// document.addEventListener("DOMContentLoaded", ()=>{})

$(document).ready(() => {
  console.log("DOMContentLoaded");
  localStorage.setItem("apiKey", "f99986289bd3808525716c3ae0eac347");
});
// formJquery.on("submit", (e) => {
//   e.preventDefault();
//   getWeatherDataFromApi();
// });
formJquery.submit((e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});
const getWeatherDataFromApi = () => {
  //   console.log("AJAX Func. is called");
  const cityName = inputJQ.val();
  console.log(cityName);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f99986289bd3808525716c3ae0eac347&lang=tr&units=metric`;

  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {
      console.log(response);
      const { main, sys, name, weather } = response;
      const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
      //alternative iconUrl
      const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      const createdLi = $("<li></li>");
      createdLi.addClass("city");
      createdLi.html(`<h2 class="city-name" data-name="${name}, ${sys.country}">
      <span>${name}</span>
      <sup>${sys.country}</sup>
        </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
        <img class="city-icon" src="${iconUrl}">
        <figcaption>${weather[0].description}</figcaption>
        </figure>`);

      listJQ.prepend(createdLi);
    },
    beforeSend: (request) => {
      console.log("before ajax send");
    },
    complete: () => {
      console.log("after ajax send");
    },
    error: (XMLHttpRequest) => {},
  });
};
