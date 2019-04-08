const fs = require("fs");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday"
// };

// -- How to write
// ---------------------------------------
// const bookJSON = JSON.stringify(book, undefined, 2);
// console.log(bookJSON);
// console.log(bookJSON.author); // this is undefined!

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// -- How to read
// ---------------------------------------
// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

// -- Challenge
// ---------------------------------------
var dataBuffer = fs.readFileSync("1-json.json");
var dataJSON = dataBuffer.toString();
var data = JSON.parse(dataJSON);

console.log(data);

data.name = "Iqbal";
data.planet = "Earth";
data.age = 34;

console.log(data);

const dataString = JSON.stringify(data, undefined, 2);
fs.writeFileSync("1-json.json", dataString);
