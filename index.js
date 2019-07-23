//===========================================================================================
// 透過http模此啟動web server服務
//===========================================================================================
var server,
    port = 3000,
    http = require('http'),
    url = require('url');

// 載入request模組
var request = require('request');

server = http.createServer(function (req, res) {
    path = url.parse(req.url);
    res.writeHead(200, { 'Content-Type': ' application/json' });
    switch (path.pathname) {
        case '/all':
            console.log('path:' + path.pathname);
            request({
                url: 'http://localhost:8090/channel/allUser',
            }, function (error, response, body) {
                res.end(body);
            });
            break;
        case '/index': res.end('index page');
            break;
        default: res.end('path.pathname=' + path.pathname);
            break;
    }
    //設定服務監聽localhost:3000(127.0.0.1/:3000)
}).listen(port);

console.log('Server is running');