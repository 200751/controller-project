const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('press', msg => {
    io.emit('sendFromServerKeyPressed', 'DIT KNOPJE IS INGEDRUKT: '+msg);
  });

  socket.on('touchJoy', position => {
    io.emit('joystickPosition', position);
  });

  socket.on('sliderValue', slider => {
    io.emit('InputRangeValue', slider);
  });

  socket.on('powerButtonPress', powerButtonStatus => {
    io.emit('powerButtonPressed', powerButtonStatus);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
