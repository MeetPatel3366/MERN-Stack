let x=myFunction(4,3)
document.getElementById("func").innerHTML=x;

function myFunction(a,b)
{
    return a+b;
}

function toCel(f)
{
    return (5/9)*(f-32)
}
let text="The temperature is "+toCel(77)+"Celsius"
document.getElementById("convertor").innerHTML=text