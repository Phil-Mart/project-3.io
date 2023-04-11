// Creating the map object
let myMap = L.map("map", {
    center: [42.878, -97.395],
    zoom: 5
  });

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let geoData = "https://api.covidactnow.org/v2/states.json?=dd72a0e3df1b4335aa98385505041054"

let geoJson;

// Getting our GeoJSON data
d3.json("https://api.covidactnow.org/v2/states.json?=dd72a0e3df1b4335aa98385505041054").then(function(data){
console.log(data)
}
);