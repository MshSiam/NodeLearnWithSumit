const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000);
console.log('listenint port 3000');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// // console.log(ourReadStream);
// ourReadStream.on('data', (data) => {
//     console.log(data.toString());
// });
// console.log('hello');
