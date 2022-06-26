const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmmiter = require('events');

// path Module

const myPath = 'D:/Practise/Node Js/Learn with sumit/3/.eslintrc.json';
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));

// os module

console.log(os.platform());
console.log(os.freemem());
console.log(os.cpus());

// FS Module

fs.writeFileSync('myFile.txt', 'hello siam ');
fs.appendFileSync('myFile.txt', ' hello shorna');
// fs.readFile('myfile.txt', (err, data) => {
//     console.log(err);
//     console(data.toString());
// });

// event module

const emmiter = new EventEmmiter();
console.log(emmiter);

// register a listener for bellRing event
emmiter.on('bellRing', (period) => {
    console.log(`We need to learn because ${period}`);
});
// raise an event
setTimeout(() => {
    emmiter.emit('bellRing', 'second period ended');
}, 2000);
