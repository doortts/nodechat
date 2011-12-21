/**
 * Created by SW.CHAE.
 * User: doortts (blog.doortts.com)
 * Date: 11. 12. 19
 * Time: 오후 6:36
 */

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);