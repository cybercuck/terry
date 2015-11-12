var express = require("express");

var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(3000);

app.use(express.static("static"));

io.on("connection", function (socket) {
	console.log("lmao");
});
