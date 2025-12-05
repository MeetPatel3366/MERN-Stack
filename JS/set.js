const letters=new Set(["a","b","c","d","e"])
console.log(letters);

letters.add("g")
console.log(letters);

console.log("size: ",letters.size);
console.log(typeof letters);
console.log(letters instanceof Set);
