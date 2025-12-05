// Write a JavaScript program that:
// Logs Start to the console
// Uses setTimeout with a 3-second delay to print This message appears after 3 seconds
// Logs End to the console immediately after calling setTimeout
// Observe the order of execution and explain why the setTimeout message appears last

console.log("start");

setTimeout(function() {
    console.log("msg after 3 seconds");
}, 3000);

console.log("end");
