/**
 * Created by SW.CHAE.
 * User: doortts (blog.doortts.com)
 * Date: 11. 12. 17
 * Time: 오후 11:07
 * To change this template use File | Settings | File Templates.
 */
var app = require('http').createServer(handler).listen(80)
    , io = require('socket.io').listen(app)
    , fs = require('fs')
    , nicknames = {};

function handler(req, res){
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data);
        console.log( __dirname);
    });
}

io.sockets.on('connection', function (socket) {
    console.log("== connected..");
    socket.on('join', function(nick){
        nicknames[nick] = socket.nickname = nick;

        socket.broadcast.emit('joinok', nick);
        io.sockets.emit('nicknames', nicknames);
        console.log(">> joined");
    });

    socket.on('disconnect', function(){
        delete nicknames[socket.nickname];
        socket.broadcast.emit('nicknames',nicknames);
        console.log("<< disconnected");
    });
});