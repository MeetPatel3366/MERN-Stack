//1.primitive: number,string,boolean,undefined,null,bigInt,symbol
// 2. non-primitive: object,array,function

//number
let age=18
let avg=70.86383
let rating=-3

console.log("int : ",age);
console.log("avg : ",avg);
console.log("rating : ",rating);

//string
let name="abc";
let greetings='Good afternoon';
let message="today";
console.log(name,greetings,message);

//boolean
let isAdult=false;
console.log(isAdult);

//undefined
let x;
console.log(x);

//null
let y=null;
console.log(y);

//BigInt
let bigNumber=172651862582182512852656262n;
console.log(bigNumber);

console.log(typeof bigNumber);


//symbol
let sym=Symbol('id')
console.log(sym);

//object
let person={
    fname:"ram",
    lname:"sharma",
    age:22
}

console.log(person);


//array
let colors=["red","green","blue"]
console.log(colors);
console.log(typeof colors);


//function
function funcName()
{
    return "hello world"
}
console.log(funcName());


//type conversion:
//1.implicit
console.log("10"-2);

//2.explicit
console.log(Boolean("fahhsh"));

console.log(Number("123"));




