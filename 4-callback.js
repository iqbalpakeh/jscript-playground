// Without callback
// -----------------------
// const geocode = (address, callback) => {
//   const data = {
//     latitude: 0,
//     longitude: 0
//   };
//   return data; // return data from function instead of from callback
// };

// const geocodeData = geocode("", undefined);
// console.log(geocodeData);

// With callback
// -----------------------
// const geocode = (address, callback) => {
//   const data = {
//     latitude: 0,
//     longitude: 0
//   };
//   callback(data); // export data with callback instead of return from the function
// };

// geocode("Singapore", data => {
//   console.log(data);
// });

// Asynchronous function with callback
// -----------------------
// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = { lati: 10, lang: 20 };
//     callback(address, data);
//   }, 2000);
// };

// geocode("Singapore", (address, data) => {
//   console.log(`${address} is located at ${data.lati}, ${data.lang}`);
// });

// Challenge
// -----------------------
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// add(1, 4, sum => {
//   console.log(sum); // Should print: 5
// });

const doWorkCallback = callback => {
  setTimeout(() => {
    // Error scenario
    // callback("This is my error!", undefined);

    // Success scenario
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
