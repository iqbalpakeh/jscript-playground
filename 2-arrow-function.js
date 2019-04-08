// ------------ Arrow function syntax --------------

// const square = function(x) {
//   return x * x;
// };

// const square = x => {
//   return x * x;
// };

// const square = x => x * x;

// console.log(square(3));

// ------------ Arrow function concept --------------

/**
 * Standard function definition will have access to this
 * context
 */
// const event = {
//   name: "Birthday Party",
//   printGuestList: function() {
//     console.log("Guest list for " + this.name);
//   }
// };

/**
 * !!! Arrow function DO NOT bind this context !!!
 */
// const event = {
//   name: "Birthday Party",
//   printGuestList: () => {
//     console.log("Guest list for " + this.name); // undefined
//   }
// };

/**
 * !!! Use of ES6 sintax for method property  !!!
 */
const event = {
  name: "Birthday Party",
  guestList: ["Iqbal", "Safiya", "Aziza"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name);
    });
  }
};

event.printGuestList();
