

const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log("In the middleware");
    next();
});
app.use((req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Hello from Express!</h1>');
});


app.listen(3000);













/*
const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1><form method="POST" action="/create-user"><input type="text" name="input"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><ul><li>Servus</li><li>Meister</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user') {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        })
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })


    }})

server.listen(3000);


*/