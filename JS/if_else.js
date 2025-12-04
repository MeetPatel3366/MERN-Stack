// let age=20
// if(age>18)
// {
//     console.log("You are an adult");
// }

// let age1=20
// if(age1>18)
// {
//     console.log("You are an adult");
// }
// else{
//     console.log("you are child");
// }

// let age2=20
// if(age2>18)
// {
//     console.log("You are an adult");
// }
// else if(age==10)
// {
//     console.log("your age is 10");
// }
// else{
//     console.log("you are child");
// }

//-----------------------------------------------------

// 1. check if number > 10
let num1 = 11;
if (num1 > 10) {
  console.log("Greater than 10");
} else {
  console.log("10 or less");
}

//2.check if a number is even or odd
let n = 20;
if (isNaN(n)) {
  console.log("please enter a valid integer.");
} else if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. Positive, negative, or zero
let n3 = 7;
if (n3 > 0) {
  console.log("Positive");
} else if (n3 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 4.password check
let pw = "admin123";
if (pw === "admin123.") {
  console.log("Login successful.");
} else {
  console.log("Incorrect password.");
}

// 5.grade from score
let score = 50;
if (isNaN(score) || score < 0 || score > 100) {
  console.log("Enter score between 0 and 100.");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// 6.Voter eligibility
let age = 20;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}

// 7.compare two numbers
let a = 20;
let b = 10;
if (a > b) {
  console.log("Larger number is:", a);
} else if (b > a) {
  console.log("Larger number is:", b);
} else {
  console.log("Both numbers are equal.");
}

// 8. leap year check
let year = 2005;
if (isNaN(year)) {
  console.log("Enter a valid year.");
} else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

// 9. vowel or consonant
let ch = "a";
if ("aeiou".includes(ch)) {
  console.log(ch + " is a vowel.");
} else {
  console.log(ch + " is a consonant.");
}

// 10. discount calculation
let bill = 500;
if (bill > 100) {
  let discount = bill * 0.1;
  let finalAmount = bill - discount;
  console.log("original bill: " + bill.toFixed(2));
  console.log("discount applied: " + discount.toFixed(2));
  console.log("final amount: " + finalAmount.toFixed(2));
} else {
  console.log("no discount applied.");
  console.log("final amount: " + bill.toFixed(2));
}



//switch
let day="monday"

switch(day)
{
    case "monday":
        console.log("monday");
        break;
    
    case "tuesday":
        console.log("tuesday");
        break;
    
    case "wednesday":
        console.log("wednesday");
        break;
    
    default:
        console.log("today is weekend");
}