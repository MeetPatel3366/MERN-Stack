//1.print numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
  console.log(i);
}


//2.iterate through an array of 5 student names
console.log("student names:");
let students = ["rahul", "sneha", "amit", "priya", "john"];
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}


//3.Generate first 10 Fibonacci numbers
console.log("fibonacci sequence:");
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
for (let i = 0; i < fib.length; i++) {
  console.log(fib[i]);
}


// 4.multiplication table using user input
let num = Number(prompt("enter number"));
console.log(`multiplication table of ${num}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}


//5.calculate sum of numbers in an array
console.log("sum of array values:");
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("sum =", sum);
