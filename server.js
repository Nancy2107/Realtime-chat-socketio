import express from 'express';
import http from 'http';
import { Server } from 'socket.io';


const app = express();              // creates express app
const server = http.createServer(app); // http server wraps express
const io = new Server(server);         // attach socket.io to same server
//we wraped express into http server → then pass to socket.io
const users = new Map(); // socket.id -> username

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('user:join', (username, ack) => {
  users.set(socket.id, username);
  socket.broadcast.emit('system:info', `${username} joined`);
  if (ack) ack({ ok: true });
});
    console.log('user connected', socket.id);
    socket.on('chat:message', (msg) => {
        const username = users.get(socket.id) || socket.id.substring(0,4);
        const payload = { username, message: msg };
        socket.broadcast.emit('chat:message', payload);
        });
        socket.on('disconnect', () => {
  const username = users.get(socket.id);
  users.delete(socket.id);
  if (username) {
    socket.broadcast.emit('system:info', `${username} left`);
  }
});
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
