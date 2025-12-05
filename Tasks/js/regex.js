// Create a string that contains a mix of letters and numbers
// Write a regular expression to find all numbers in the string
// Use the case-insensitive modifier to check if it affects number detection
// Extract and store all matched numbers in an array
// Print the extracted numbers

let text = "Abc123xyz45LMN789op";

let regEx = /\d+/g;

let regExinsensitive = /\d+/gi;

let numbers = text.match(regEx);
let numbersInsensitive = text.match(regExinsensitive);

console.log("extracted numbers:", numbers);
console.log("numbersInsensitive :", numbersInsensitive);
