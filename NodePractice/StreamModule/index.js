const http = require("http");
const fs = require("fs");
const server = http.createServer();
const zlib = require("zlib");
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

// server.on('request',(req,res)=>{

//1 way

// fs.readFile('input.txt',(err,data)=>{
//     if(err) return console.error(err);
//     console.log(data.toString());
// });

//2nd way


// const rstream=fs.createReadStream('input.txt');
// rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata);
// });

// rstream.on("end",()=>{
//     res.end();
// });

// rstream.on("error",(err)=>{
//     console.log(err);
//     res.end("file not found");
// });

//pipes way

//const rst=fs.createReadStream('input.txt');


//source pipe destination
// rst.pipe(res);


// });



// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to port 8000")
//     });




//gzip************


// const rst=fs.createReadStream('input.txt');

// const wstream=fs.createWriteStream('test.txt.gz');


//compress

//rst.pipe(gzip).pipe(wstream);

//uncompress
// const zip = fs.createReadStream('test.txt.gz');
// const wrs = fs.createWriteStream('simple.txt');
// zip.pipe(gunzip).pipe(wrs);


