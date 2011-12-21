/**
 * Created by SW.CHAE.
 * User: doortts (blog.doortts.com)
 * Date: 11. 12. 19
 * Time: 오후 6:44
 */

function start(){
    console.log("Request handler 'start' was called");
    return "Hello Start";
}

function upload(){
    console.log("Request handler 'upload' was called");
    return "Hello Upload~";
}

exports.start = start;
exports.upload = upload;