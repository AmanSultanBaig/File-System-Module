const fs = require('fs');
let fileName = (__filename);

let file = fs.writeFileSync('writeFile.txt','Aman Sultan Baig');
console.log('File Created!');

let makeFile = fs.readFileSync('writeFile.txt','utf-8');
console.log(`'${makeFile}' is written in this File!`);

let fileExist = fs.unlinkSync('writeFile.txt');
if(!makeFile) console.log(`${fileName} dosen't exists`);
else console.log(`${fileName} DELETED Successfully!`)
