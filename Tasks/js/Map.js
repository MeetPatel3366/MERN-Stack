// Create a map that stores five key-value pairs where keys are strings and values are numbers
// Add two new key-value pairs to the map
// Retrieve and print the value of a specific key
// Delete a key-value pair from the map
// Iterate through the map using a for...of loop and print each key-value pair

// Create a map with five key-value pairs
let stuMarks = new Map([
    ["meet", 85],
    ["ram", 90],
    ["vasu", 78],
    ["ravi", 92],
    ["yash", 88]
  ]);
  
  stuMarks.set("khus", 81);
  stuMarks.set("prince", 95);

  console.log("mark of meet:", stuMarks.get("meet"));  
  
  stuMarks.delete("ram");
  
  for (let [name, marks] of stuMarks) {
    console.log(name + " : " + marks);
  }
  