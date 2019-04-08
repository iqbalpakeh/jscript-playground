const https = require("https");

const baseUrl = "https://api.darksky.net/forecast";
const key = "/7be8d242628e88a181da27110e7ea8f0";
const query = "?units=si&lang=en";
const location = "/40, -75";
const url = `${baseUrl}${key}${location}${query}`;

const request = https.request(url, response => {
  let data = "";

  response.on("data", chunk => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", error => {
  console.log("An error", error);
});

request.end();
