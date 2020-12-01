var http = require('http'); // built-in modules

var converter = require('./converter');

var url = require('url');
// http://localhost:3000/add?x=10&y=20

var server = http.createServer( (req,res) => {
    let urlPath = url.parse(req.url, true);
    let pathname = urlPath.pathname;
    let query = urlPath.query;
    if(pathname === "/add") {
        res.end(""+ converter.add(parseInt(query['x']), parseInt(query['y']) ))
    } else {
        res.end("" + converter.sub(parseInt(query['x']), parseInt(query['y']) ))
    }
});

server.listen(3000, () => {
    console.log("server started on http://localhost:3000 ")
});