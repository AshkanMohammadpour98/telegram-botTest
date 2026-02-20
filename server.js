const fs = require('fs')
const http = require('http')

const server = http.createServer((req , res)=>{
   const users = [
    {
        id : 1,
        name : "ali",
        lastName : "bahrami"
    },
     {
        id : 2,
        name : "milad",
        lastName : "bahrami"
    }, {
        id : 3,
        name : "raha",
        lastName : "alizade"
    }
   ]
    
    if(req.method == "GET" && req.url == '/users'){
        res.writeHead(200 , 'ok', {
            'Content-Type' : 'application/json'
        })
        res.write(JSON.stringify(users))
        // res.write(req.url)
        // console.log(req.url);
    }else if(req.method == 'POST'){
        res.write('ashkan test post method')
    }else if(req.method == "PUT"){
        res.write('ashkan method PUT') 
    }else if(req.method == 'PATCH'){
        res.write('ashkan method PATCH')
    }else if (req.method =="DELET"){
        res.write('ashkan delet method')
    }
    
    res.end()
})
server.listen(4000 , ()=>{
    console.log('log run port 4000');
    
})
// // crate server 
// const server =  http.createServer((req , res)=>{
//     res.write('ashkan test Server res')
//     res.end()
// })
// server.listen(5000,()=>{
//     console.log('run port of 5000');
    
// })

// fs.readFile('./folder1/names.txt' , "utf-8" , (err , data)=>{
//     if(err){
//         console.log(err);
        
//     }
//     console.log(data);
//     fs.unlink('./folder1/names78.txt' , (err , data)=>{
//         if(err){
//             console.log(err.message);
//         } else{

//             console.log("file names78 delete");
//         }
//     })
    
// })
// console.log('i ashkan log...');


// fs.writeFileSync('./folder1/names.txt' , '\n 4.zahir' , {flag : "a"})

// const dataNames = fs.readFileSync('./folder1/names.txt' , 'utf-8')
// unlinkSync  برای حذف کردن فایل 
// fs.unlinkSync('./copyNames.txt')
//renameSync برای تغیر اسم فایل 
// fs.renameSync('names2.txt' , '/newnames.txt')
// fs.writeFileSync('./my-text.txt' , '\nali' , {flag :'a'})
// console.log(dataNames);
// console.log("copyNames " , dataNamesCopy);
// ساخت پوشه 
// fs.mkdirSync('max')
// تغیر اسم پوشه یا فایل
// fs.renameSync('max' , 'newMax')
// fs.rmdirSync('newMax')

// try{
//     fs.renameSync('./folder1/names1.txt' , './folder1/names78.txt')
//     // code
//     const textFile = fs.readFileSync('./folder1/names.txt', 'utf-8')
//     console.log(textFile);
    
// }catch(err){
    
//     fs.writeFileSync('./folder1/names.txt' , '\n1-rahim' , {flag : "a"})
//     console.log(err.name);
//     console.log(err.message);
// }
