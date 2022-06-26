const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello programmers .');
        res.write(' how you doing?');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about us page');
        res.end();
    } else {
        res.write('page not found');
        res.end();
    }
});
server.listen(3000);

// server.on('connection', () => {
//     console.log('New Connection');
// });

console.log('listening port 3000');
