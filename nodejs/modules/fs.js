import fs from "fs"

// console.log(fs);

// fs.readFile("./readfile.txt","utf-8",(err,res)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     console.log(res);
// })

// const res=fs.readFileSync("./readfile.txt")
// const data=res.toString()
// console.log(data);


// fs.writeFile("./writefile.txt","hello",(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log("write file done");
// })


fs.writeFileSync("./write1.txt","hello")