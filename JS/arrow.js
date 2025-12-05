let hello=""

hello=function(){
    return "hello world"
}

document.getElementById("func").innerHTML=hello();

//arrow fn
let hello1=""

hello1=()=>{
    return "hello world with arrow function"
}
document.getElementById("func1").innerHTML=hello1();


let hel=""
hel=val=>"hello world"+val;
console.log(hel);
