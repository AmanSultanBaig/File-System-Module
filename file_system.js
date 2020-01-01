//synchronous approach

const fs = require('fs');
let fileName = (__filename);

// this code will create the file with given content
let file = fs.writeFileSync('writeFile.txt','Aman Sultan Baig');
console.log('File Created!');

// this code will read the file content
let makeFile = fs.readFileSync('writeFile.txt','utf-8');
console.log(`'${makeFile}' is written in this File!`);

// according to this code, code will check the existence of file, 
// if there is any file so code will excute and remove the file 

let fileExist = fs.unlinkSync('writeFile.txt');
if(!makeFile) console.log(`File dosen't exists`);
else console.log(`File DELETED Successfully!`);

console.log('-------------------------------------------')

// asynchronous approach

// this code will execute asynchronously and create file 
let writefile = fs.writeFile('writeFile.txt','Aman Sultan Baig with asynchronous',(err) => {
  (err) ? console.log(err) : console.log('File created with Asynchronous Approach')
});

// this code will execute asynchronously and read file content
let FileRead = fs.readFile('writeFile.txt','utf-8',(err, content) => {
  (err) ? console.log(err) : console.log(content)
});

// this code will execute asynchronously and remove the file 
let deleteFile = fs.unlink('writeFile.txt',(err) => {
   (err) ? console.log(err) : console.log('File Deleted with asynchronous approach')
});

const createSpace = ' ';
fs.appendFile('writeFile.txt', createSpace+'Some other text with append method!', 
function (err) {
  if (!err) console.log('Saved!');
  else console.log('error occur while writing!');
});
