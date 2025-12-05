// Create a JavaScript program that allows users to manage a to-do list using array methods

// Define an array to store tasks
// Create functions to
// Add a new task to the list
// Remove a task from the list based on its index
// Mark a task as completed and update its status
// Display all tasks along with their status
// Sort the tasks based on completion status so completed tasks appear at the bottom
let tasks = [];

function addTask(taskName) {
    tasks.push({ name: taskName, completed: false });
    displayTasks();
}

function removeTask(idx) {
    if (idx >= 0 && idx< tasks.length) {
        tasks.splice(idx, 1);
        displayTasks();
    }
}

function completeTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        displayTasks();
    }
}

function sortTasks() {
    tasks.sort((a, b) => a.completed - b.completed);
    displayTasks();
}

function displayTasks() {
    console.clear();
    console.log("TO-DO LIST:\n");
    tasks.forEach((task, i) => {
        console.log(`${i}. ${task.name} - ${task.completed ? "Completed" : "Pending"}`);
    });
    console.log("\n");
}


// Test operations
addTask("Learn JavaScript");
addTask("Complete Assignment");
addTask("Go for a Walk");
completeTask(1);
removeTask(2);
sortTasks();
