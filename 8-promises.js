// Basic promise sample
//-----------------------------------------------------------
// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Success scenario
//     // resolve([7, 4, 1]);

//     // Error scenario
//     reject("Things went wrong!");
//   }, 2000);
// });

// doWorkPromise
//   .then(result => {
//     console.log("Success!", result);
//   })
//   .catch(error => {
//     console.log("Error!", error);
//   });

// Chaining promise sample
//-----------------------------------------------------------
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// // call another promise without proper chaining
// add(1, 2)
//   .then(sum => {
//     console.log(sum);
//     add(sum, 5)
//       .then(sum2 => {
//         console.log(sum2);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   })
//   .catch(e => {
//     console.log(e);
//   });

// call another promise with proper chaining
add(1, 1)
  .then(sum => {
    console.log(sum);
    return add(sum, 4);
  })
  .then(sum2 => {
    console.log(sum2);
  })
  .catch(e => {
    console.log(e);
  });
