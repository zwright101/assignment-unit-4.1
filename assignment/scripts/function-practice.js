console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}

// Remember to call the function to test
helloName()

// 3. Function to add two numbers together & return the result
// let firstNumber = 4;
// let secondNumber = 5;
// let sumOfNumbers = firstNumber + secondNumber
// function addNumbers(){
//   return sumOfNumbers;
//   // return firstNumber + secondNumber;
// }  
// addNumbers();

function addNumbers(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}
console.log('4 + 8 =', addNumbers(4, 8));
console.log('10 + 5 =', addNumbers(10, 5));
console.log('22 + 22 =', addNumbers(22, 22));

// 4. Function to multiply three numbers & return the result
// let numOne = 2;
// let numTwo = 3;
// let numThree = 4;
// let numTotal = numOne * numTwo * numThree;
// function multiplyThree() {
//   return numTotal;
// }
// multiplyThree();

function multiplyThree(number1, number2, number3){
  return number1 * number2 * number3;
}
console.log('2 * 8 * 3 =', multiplyThree(2, 8, 3));
console.log('5 * 5 * 5 =', multiplyThree(5, 5, 5));
console.log('10 * 2 * 8 =', multiplyThree(10, 2, 8));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
// let number = 0;
function isPositive(number) {
  if (number >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log('isPositive - should say true', isPositive(22));
console.log('isPositive - should say false', isPositive(-9));
console.log('isPositive - should say false', isPositive(-3));
// isPositive(number); 

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome



// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1]
}
console.log('last item in array is:' , getLast([5, 11, -2]));
console.log('last item in array is:' , getLast(["Foo Fighters", "Electric Callboy", "Linkin Park"]));
console.log('last item in array should be undefined:' , getLast([]));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
   if (array[i] === value) {
     return true;
   }
 }
 return false;
}

console.log("Value Found:", find(5, [3, 5, -2, 9, 0])); // should return true
console.log("Value Found:", find('a', ['e', 'g', 'a', 'p', 'l'])); // should return true
console.log("Value Found:", find(2, [1, 3, 5, 7, 9])); // should return false



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}