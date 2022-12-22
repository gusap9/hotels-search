const cities = document.querySelectorAll("option")
const arr = [];
(function () {
    cities.forEach((city) => {arr.push(city.innerHTML)})
}());