// Create a JavaScript program that

// Declares and initializes variables of different data types including number string boolean object and array
// Uses typeof to display the data type of each variable in the console
// Creates a function that takes a number as input and returns its square value
// Stores user information in an object with keys for name age and email and logs it in the console
let num = 25;
let str = "Hello JavaScript";
let isActive = true;
let person = { name: "abc", age: 30 };
let colors = ["Red", "Green", "Blue"];

console.log(typeof num);
console.log(typeof str);
console.log(typeof isActive);
console.log(typeof person);
console.log(typeof colors);

function square(n) {
    return n*n;
}

console.log(square(7));

let user = {
    name: "abcd",
    age: 22,
    email: "abcd@gmail.com"
};

console.log(user);
