// 1. Explore Differences Between the var and let Keywords
// Update the code so it only uses the let keyword.


var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();



// 2.Scopes of the var and let Keywords

// Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

// This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.


function checkScope() {
    'use strict';
    var i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }


  // 3.Declare a Read-Only Variable with the const Keyword

  //example
//   "use strict";
// const FAV_PET = "Cats";
// FAV_PET = "Dogs"; //returns error

  function printManyTimes(str) {
    "use strict";

    // Only change code below this line

    var sentence = str + " is cool!";
    for (var i = 0; i < str.length; i+=2) {
      console.log(sentence);
    }

    // Only change code above this line

  }
  printManyTimes("freeCodeCamp");







  // 4.Mutate an Array Declared with const
  /*
  An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.
  */

//example 
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]



  //setup
  const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();



// 5. Prevent Object Mutation

/*
In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.
*/

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line


    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();



  // 6. Use Arrow Functions to Write Concise Anonymous Functions\
/*
Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.
*/
//setup
  var magic = function() {
    "use strict";
    return new Date();
  };


  // 7.Write Arrow Functions with Parameters
//Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

  var myConcat = function(arr1, arr2) {
    "use strict";
    return arr1.concat(arr2);
  };

  console.log(myConcat([1, 2], [3, 4, 5]));



// 8.Set Default Parameters for Your Functions
// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line




// 9. Use the Rest Parameter with Function Parameters
//example 
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
  console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.


  //setup

const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }



  // 10. Use the Spread Operator to Evaluate Arrays In-Place
//   Copy all contents of arr1 into another array arr2 using the spread operator.

//example 
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89


//setup
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);



//11.Use Destructuring Assignment to Extract Values from Objects

//example
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

const { name, age } = user;
// name = 'John Doe', age = 34

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  // Only change code below this line

  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;

  // Only change code above this line


  // Only change code below this line

  const {today, tomorrow} = HIGH_TEMPERATURES;

  // Only change code above this line




  // 12. Use Destructuring Assignment to Assign Variables from Objects

  //Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  // Only change code below this line

  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;

  // Only change code above this line





  //13. Use Destructuring Assignment to Assign Variables from Nested Objects

  //Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };

  // Only change code below this line

  const lowToday = LOCAL_FORECAST.today.low;
  const highToday = LOCAL_FORECAST.today.high;

  // Only change code above this line



  //14.Use Destructuring Assignment to Assign Variables from Arrays

  // Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

  //setup
  let a = 8, b = 6;
// Only change code below this line




//15. Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
//Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

//example
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]


//setup
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);





//16. Use Destructuring Assignment to Pass an Object as a Function's Parameters



//setup
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

  // Only change code below this line
  const half = (stats) => (stats.max + stats.min) / 2.0; 
  // Only change code above this line
