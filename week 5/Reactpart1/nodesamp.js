var http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end("hello node")
}).listen(3000);
console.log("file is running on http://127.0.0.1:3000")