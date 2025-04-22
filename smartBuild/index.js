const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const app = require('./app');
const db = require('./config/db');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

app.set('io', io);

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!!!!!1");
});

io.on('connection', (socket) => {
    console.log('User Connected', socket.id);

    socket.on('joinRoom', ({ senderId, receiverId }) => {
        const roomId = [senderId, receiverId].sort().join('_');
        socket.join(roomId);
        console.log(`${senderId} joined room ${roomId}`);
    });

    socket.on('sendMessage', ({ senderId, receiverId, message }) => {
        const roomId = [senderId, receiverId].sort().join('_');
        const msgObj = { senderId, receiverId, message, time: new Date() };

        io.to(roomId).emit('receiveMessage', msgObj);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(port, () => {
    console.log(`Server Listening on port http://localhost:${port}`);
});
