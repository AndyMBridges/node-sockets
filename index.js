var express = require('express'),
	app = express();

// This is needed if the app is run on heroku and other cloud providers:

var port = process.env.PORT || 8080;

// Initialize a new socket.io object. It is bound to
// the express app, which allows them to coexist.

var io = require('socket.io').listen(app.listen(port));


// App Configuration

// Make the files in the public folder available to the world
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/remote', function(req, res){
  res.sendFile(__dirname + '/public/remote.html');
});

io.on('connection', function(socket){
  // socket.on('chat message', function(msg){
  //   io.emit('chat message', msg);
  // });
  socket.on('video select', function(video){
    io.emit('video select', video)
    console.log('User selected ' + video);
  });
});

console.log('Your presentation is running on http://localhost:' + port);
