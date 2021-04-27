const fs = require("fs");
//FS synchronus way
fs.writeFileSync('read.txt', "welcome to my Practice foro FYP");
fs.appendFileSync('read.txt', "This is first module File which I am using");
const buf_data = fs.readFileSync('read.txt');
console.log(buf_data.toString());
fs.renameSync('read.txt', 'myFile.txt');

//********FS  TASK */

fs.mkdirSync("AzkaNode");
fs.writeFileSync('AzkaNode/bio.txt', "This is dummy file");
fs.appendFileSync('AzkaNode/bio.txt', "This is second line");
const bio_data = fs.readFileSync('AzkaNode/bio.txt', "utf8");
console.log(bio_data);
fs.renameSync('AzkaNode/bio.txt', 'AzkaNode/Mybio.txt');
fs.unlinkSync('AzkaNode/Mybio.txt');
fs.rmdirSync('AzkaNode');

//FS Asynchronus way
fs.writeFile('myFile.txt', "file is created", (err) => {
    console.log("file is edited");
    console.log(err)
});

fs.appendFile('myFile.txt', "This is my file   ", (err) => {
    console.log("file is append");
    console.log(err)
});


//Asychronus way  jiska dtaa pahly milgya wo show krdyga
fs.readFile('myFile.txt', "UTF-8", (err, data) => {
    console.log("file is edited");
    console.log(data)
});
console.log("after data");

const bio_data = fs.readFileSync('myFile.txt', "utf8");
console.log(bio_data);
console.log("after data");

//Speerate export
const oper = require('./oper');
console.log(oper.add(3, 8));
console.log(oper.sub(30, 8));

//Multiple imports

const { add, sub } = require('./oper');
console.log(add(3, 8));
console.log(sub(30, 8));