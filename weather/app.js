const key = "f99986289bd3808525716c3ae0eac347";
const input = document.getElementById(".input");
const button = document.getElementById(".btn");
const explain = document.getElementById(".explain");
const ullist = document.getElementById(".ullist");

const getResult = (city) => {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`;
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { name, main, weather, sys } = data;
      ullist.innerHTML += `
      <div class="city">
      <span class="main"></span>
      </div>
      <div class="temp"></div>
      <div class="icon"></div>
      <div class="description"></div>
      `;
    });
  input.value;
};
console.log(getResult("van"));

let citiesArray = [];
