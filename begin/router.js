/**
 * Created by SW.CHAE.
 * User: doortts (blog.doortts.com)
 * Date: 11. 12. 19
 * Time: 오후 6:35
 */

function route(handle, pathname) {
    console.log("About to route a request >> " + pathname);
    if(typeof handle[pathname] === "function"){
        handle[pathname]();
    } else {
        console.log("No request handler found for" + pathname);
        return "404 Not found";
    }
}

exports.route = route;