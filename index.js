var app = require('express')();
var server = require('http').createServer(app)
   , WSS = require('ws').Server;

app.get('/.test', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.get('/*', function(request, response) {
  response.end(request.path.slice(1));
});
var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on ' + port);

var wss = new WSS({server: server});

wss.on('connection', function (socket) {
  console.log("new connection");
  socket.on('message', function (data) {
    socket.send(data);
    console.log(data);
  });
});
