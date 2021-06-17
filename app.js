const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
let server = http.createServer((request , response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(`<h2 style="color: limegreen">Welcome to Node JS</h2>`);
});

server.listen(port, hostname, () => {
    console.log(`Node JS Server is started at http://${hostname}:${port}`);
});
