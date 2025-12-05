const car={
    type:"EV",
    model:"700",
    color:"Black"
};
document.getElementById("obj").innerHTML="the color of the car is "+car.color;
document.getElementById("obj").innerHTML="the color of the car is "+car.model;

const person=new Object();
person.name="meet";
person.age=21;
person.contactnum=1234567891;
console.log(person);

document.getElementById("person").innerHTML="my name is : "+person.name+" my age is : "+person.age;

delete person["contactnum"]
// document.getElementById("person").innerHTML="my contact num is : "+person.contactnum

//nested obj
const myObj={
    name:'a',
    age:30,
    myCars:{
        car1:"Ford",
        car2:"BMW",
        car3:"KIA"
    }
}
console.log(myObj);
console.log(myObj.myCars.car1);


const person1={
    fname:"abc",
    lname:'xyz',
    id:12345,
    fullName:function(){
        return this.fname+" "+this.lname;
    }
}
console.log(person1.fullName());

//display all proprty using loop
let text=""
for(let x in person)
{
    text+=person[x]+" ";
}
console.log("text: ",text);


const fruits={
    banana:100,
    apple:300,
    graps:250
}
console.log("fruits: ",Object.entries(fruits));

let text1=""
for(let [fruit,amount] of Object.entries(fruits))
{
    text1+=fruit+" "+amount+". "
}
console.log(text1);


//constructor
function Student(first,last,age,color)
{
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.color=color
}

const student1=new Student("Ram","Sharma",54,"green")
console.log("student 1: ",student1);
