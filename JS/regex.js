// i - ignore case sensitive 
// g- global match 
// m - multi match 
// d- start to end match

let text1="Hello World. lerning javascript language";
console.log(text1.search("World"));

let regex1=text1.search(/world/i)
console.log(regex1);


let text2="Hello World"
let replacedText=text2.replace("World","Javascript")
console.log("text2: ",replacedText);

let replacedText1=text2.replace(/world/i,"js")
console.log("text2: ",replacedText1);


//--------------

let text3="Today is a friday. It is also windy today"
let result=text3.match(/is/g)
console.log("res: ",result);

//------

let text4="\nIs th\nis it?";
let result2=text4.match(/^is/m);

console.log("res2: ",result2);

//---

let text5="aaaabb"
let result3=text5.match(/(aaa)(bb)/d)

console.log("res3: ",result3);

//--

let textt="Is this all there is?"
let rest=textt.match(/[h]/g);
console.log("rest: ",rest);

//--

let text6="red,green,blue,yellow,orange"
let res4=text6.match(/(red|green)/g)
console.log("res4: ",res4);
