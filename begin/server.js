/**
 * Created by SW.CHAE.
 * User: doortts (blog.doortts.com)
 * Date: 11. 12. 19
 * Time: 오후 5:54
 */

var http = require('http');
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname);

        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("Hello World~!");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;