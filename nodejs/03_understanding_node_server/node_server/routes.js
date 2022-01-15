const fs = require('fs');
const { request } = require('http');

const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Add user</title></head>');
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users page</title></head>');
        res.write('<body><ul><li>user 1</li><li>user 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/create-user' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(`$$$$ added user: ${parsedBody.split('=')[1]}`);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assessment page</title></head>');
    res.write('<body><h1>Welcome to my assessment try</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;
