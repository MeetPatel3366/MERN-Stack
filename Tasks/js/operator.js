// Create a JavaScript program that

// Declares three boolean variables and uses the logical AND operator to check if all conditions are true
// Uses the logical OR operator to check if at least one condition is true
// Uses the logical NOT operator to reverse a boolean value and logs the result
// Implements a login system where a user must enter both a valid username and password to gain access
let isLoggedIn = true;
let isAdmin = true;
let isVerified = true;

let allTrue = isLoggedIn && isAdmin && isVerified;
console.log("all conditions true:", allTrue);

let atLeastOneTrue = isLoggedIn || isAdmin || isVerified;
console.log("at least one condition true:", atLeastOneTrue);

let notLoggedIn = !isLoggedIn;
console.log("reversed value of isLoggedIn:", notLoggedIn);

let username = "abc";
let password = "12345";

let validUser = "admin";
let validPass = "12345";

if (username === validUser && password === validPass) {
  console.log("login successful");
} else {
  console.log("login Failed");
}
