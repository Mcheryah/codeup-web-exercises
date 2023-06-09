// "use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
// function analyzeColor(color) {
//     if (color.toLowerCase() === "red"){
//         return "Red means Danger ahead";
//     }
//     else if (color.toLowerCase() === "orange"){
//         return "Oranges are orange";
//     }
//     else if (color.toLowerCase() === "yellow"){
//         return "The sun is yellow";
//     }
//     else if (color.toLowerCase() === "blue"){
//         return "The sky is blue";
//     }
//     else if (color.toLowerCase() === "green"){
//         return "Grass is green";
//     }
//     else if (color.toLowerCase() === "pink"){
//         return "Pink is basic";
//     }
//     else {
//         return "I don't know anything about " + color;
//     }
// }
// console.log(analyzeColor('red'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
 var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color.toLowerCase()) {
        case "red":
            return "Red means danger!";
        case "orange":
            return "Oranges are orange";
        case "yellow":
            return "The sun is yellow";
        case "blue":
            return "The sky is blue";
        case "green":
            return "Grass is green";
        case "indigo":
            return "Fun people like indigo";
        case "violet":
            return "I like violet too";
        default:
            return "I dont know anything about " + color;
    }
}
console.log(randomColor)
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userInput = prompt("Please enter color;");
var message = analyzeColor(userInput);
alert(message);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 0:
            return totalAmount
        case 1:
            return totalAmount * 0.1
        case 2:
            return totalAmount * 0.25
        case 3:
            return totalAmount * 0.35
        case 4:
            return totalAmount * 0.5
        case 5:
            return totalAmount * 1
        default:
            return 0;
    }
}

console.log(calculateTotal(0,100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt('Please enter a total amount of your total bill?');
// var luckyNumber = Math.floor(6);
var priceBeforeDiscount = parseFloat(totalBill);
var priceAfterDiscount = calculateTotal(luckyNumber, priceBeforeDiscount);
alert ("Your lucky number is " + luckyNumber + "Your price before discount "+priceBeforeDiscount + "Your price after discount" +priceAfterDiscount)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var enterNumber = confirm("Would you like to enter a number?");
if (enterNumber) {
    var input = prompt("Enter a number");
    if (isNaN(input)) {
        alert('Invalid input. Please enter a number');
    }
    else {
        var number = parseInt(input)
        var isEven = number % 2 === 0
        var isNegative = number < 0

        alert('The number is ' + );
    }
}