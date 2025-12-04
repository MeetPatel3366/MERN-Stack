let text=""

for(let i=0;i<5;i++)
{
    text+=" The number is "+i+"<br>";
}

document.getElementById("for_loop").innerHTML=text

let text1=""
let j=1;
while(j<=10)
{
    text1+="<br> The num is: "+j;
    j++;
}

document.getElementById("while_loop").innerHTML=text1

let text2=""
let t=1;
do{
    text2+="<br> The num is: "+t;
    t++;
}while(t<=10);

document.getElementById("dowhile_loop").innerHTML=text2