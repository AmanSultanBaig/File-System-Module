//synchronous approach

const fs = require('fs');
let fileName = (__filename);

let file = fs.writeFileSync('writeFile.txt','Aman Sultan Baig');
console.log('File Created!');

let makeFile = fs.readFileSync('writeFile.txt','utf-8');
console.log(`'${makeFile}' is written in this File!`);

let fileExist = fs.unlinkSync('writeFile.txt');
if(!makeFile) console.log(`File dosen't exists`);
else console.log(`File DELETED Successfully!`);

console.log('-------------------------------------------')

// asynchronous approach

let writefile = fs.writeFile('writeFile.txt','Aman Sultan Baig with asynchronous',(err) => {
  (err) ? console.log(err) : console.log('File created with Asynchronous Approach')
});

let FileRead = fs.readFile('writeFile.txt','utf-8',(err, content) => {
  (err) ? console.log(err) : console.log(content)
});

let deleteFile = fs.unlink('writeFile.txt',(err) => {
   (err) ? console.log(err) : console.log('File Deleted with asynchronous approach')
});
