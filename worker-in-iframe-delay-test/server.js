var http = require("http");
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect()
	.use(serveStatic("./", {
		'setHeaders': setHeaders
	}))
	.use(function (req, res) {
		res.end('hello world\n');
	});

function setHeaders(res, path) {
	console.log('setHeaders')
	res.setHeader('Access-Control-Allow-Origin', 'http://alpha:8080')
}

var server = http.createServer(app);

server.listen(8080, function () {
	console.log('server is listening');
});