/** server node.js */
var http = require('http');
var url = require('url');

console.log('http server start before');

function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		
		if(url.parse(request.url).pathname!=="/favicon.ico"){
			console.log('Request for '+ pathname +" received");
			route(handle,pathname);
		}

		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("hello world");
		response.end();
	}
	
	/** 使用回調函數 */
	http.createServer(onRequest).listen(8888);
	console.log('http server start');
}

exports.start = start;
