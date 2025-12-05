// console.log("hello one");

// setTimeout(()=>{
//     console.log("Hello two");
// },1000)

// console.log("hello three");

// let myPromise=new Promise((resolve,reject)=>{
//     let x=1;

//     if(x==0)
//     {
//         resolve("OK");
//     }
//     else{
//         reject("error")
//     }
// })

// myPromise.then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// })

//---------------

let myPromise=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("success");
   },5000)
})

myPromise.then((value)=>{
    console.log(value);
})