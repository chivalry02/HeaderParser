
require('http').createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	
	var tmp = request.headers['accept-language'].split(/[,;]/);
	var language = tmp[0];
	
	var tmp = request.headers['user-agent'].match(/.+?(\(.+?\)).+/);
	var software = tmp[1];
	software = software.slice(1, software.length-1);
	
	var out = {
		'ipaddress':request.headers.host,
		'language':language,
		'software':software
	};
	response.end(JSON.stringify(out));
}).listen(process.env.PORT || 5000);



