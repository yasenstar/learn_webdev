var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Hello World from Yasen');
});
server.listen(80);