const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('welcome to our home page');
    }
    if(req.url === '/about') {
        res.end('Welcome to our about page')
    }

    res.end(`
        <h1>OOPs!</h1>
        <p>we can not find you search site</p>
        <a href="/">Welcome back</a>
    `);
});


server.listen(5000);
console.log('server listening on port 5000');