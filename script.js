console.log("Let's try out our JavaScript Skills!");


//1. Write code in the body of each function so that:
    // * `add` returns the result of `num1` plus `num2`.
    // * `subtract` returns the result of `num1` minus `num2`.
    // * `multiply` returns the result of `num1` times `num2`.
    // * `divide` returns the result of `num1` divided by `num2`.

    //Check all your work with console.log() so the answers are displayed in the browser!
    // ** BONUS ** convert all of these into Arrow Functions

function add(num1, num2) {
    return num1 + num2
};
console.log(add(1,2));

function subtract(num1, num2) {
    return num1 - num2 
};

console.log(subtract(4,2));

function multiply(num1, num2) {
    return num1 * num2
};

console.log(multiply(1,2));

function divide(num1, num2) {
    return num1 / num2
};

console.log(divide(4,2));

//2. Write a FUNCTION to print each item in the following array to the console

const fruits = ['Apple', 'Banana', 'Pear', 'Strawberry', 'Canteloupe'];

const printList = () => {
    return console.log(fruits)
}

printList();

//3. This one has three steps, use Javascript Array methods for each part (try w3Schools for help)

let planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];

// Use an array method to remove "Venus" from the planets array, then print the changed array to the console

planets.pop()
//console.log(planets)

// Use an array method to add "Mercury" to the beginning of the planets array, then print the changed array to the console
planets.unshift("Mercury")
//console.log(planets)

// Use an array method to join the following array with the planets array, then print the new array to the console
let morePlanets = ["Pluto", "Neptune"];

const allPlanets = planets.concat(morePlanets)
console.log(allPlanets)

//4. Write code within the body of the following function to print all positive numbers from 1 to `num`, and console.log the result. (Hint: when you call this function to test it, don't forget to pass in a positive number as an argument)

/* const logNums = num => {
console.log()
} */

var logNums = function(num) {

    for (var i = 1; i <= num; i++) {        
    console.log(i);
    }
  
  };
  logNums(2);

//5. Create a function that accepts two parameters, num1 and num2. If num1 is greater than num2 print "First one wins!", if num1 is equal to num 2 print "It's a draw!", if num1 is less than num2 print "Second number prevails!". Test the function three times so each condition is met successfully.

var whoWins = (num1, num2) => {
    if (num1 === num2) {winner = 'Its a draw!'} else if (num1 < num2) { winner = "Second number prevails!"} else {winner ='First one wins!'}
    return console.log(winner);
} 

whoWins(2,2);


//Bonus Challenge!
//Write code inside the following function that accepts a string and returns `true` is the string is a palindrome, and `false` if the string is not a palindrome.
// --- A Palindrome is a word that is spelled the same way forwards and backwards ---
//Examples of palindromes = mom, dad, level, radar
// Hint: you can use multiple javascript array methods chained together, check w3schools for ideas

const isPalindrome = (string) => {
//write code here
    
    
};

isPalindrome("racecar"); //expects true
isPalindrome("elephant"); //expects false
