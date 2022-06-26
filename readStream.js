const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /></form></body>',
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            console.log('stream finished');
            const paredBody = Buffer.concat(body).toString();
            console.log(paredBody);
        });

        res.write('Thanks for submitting');
        res.end();
    } else {
        res.write('no page found');
        res.end();
    }
});

server.listen(3000);
console.log('listenint port 3000');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// // console.log(ourReadStream);
// ourReadStream.on('data', (data) => {
//     console.log(data.toString());
// });
// console.log('hello');
