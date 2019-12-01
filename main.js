var http= require("http");
var fs = require("fs");

http.createServer(function (req,res) {
	app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
	res.writeHead(200, {"Conten-Type":"text/html"});
	var data = fs.readFileSync(__dirname + "/tao.html");
	res.end(data);
	// body...
}).listen(3000);
