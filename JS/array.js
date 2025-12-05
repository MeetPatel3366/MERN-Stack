const colors=["red","green","blue","orange"]
console.log("colors: ",colors);


console.log(colors[2]);

colors[0]="pink"
console.log("colors: ",colors);

console.log("array into string : ",colors.toString());


let length=colors.length
console.log("length: ",length);


console.log("access last element of the array : ",colors[colors.length-1]);


//loop
let fruits=["apple","mango","banana","kivi"]

let flen=fruits.length

let text="<ol>"
for(let i=0;i<flen;i++)
{
    text+="<li>"+fruits[i]+"</li>"
}
text+="</ol>"

document.getElementById("fruits").innerHTML=text;

//adding an item in array
fruits.push("watermeol")
document.getElementById("fruits1").innerHTML=fruits

//join
console.log(fruits.join(","));

//pop
fruits.pop()
console.log("after pop : ",fruits);

//shift
fruits.shift()
console.log("after shift : ",fruits);

//unshift
fruits.unshift()
console.log("after unshift : ",fruits);

//concat
let allArray=colors.concat(fruits)
console.log("all array : ",allArray);

//indexof()
let index=colors.indexOf("red")
console.log("red index: ",index);


//sort
console.log(fruits.sort());

//reverse
console.log(fruits.reverse());
