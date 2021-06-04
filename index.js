const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const socket = require('socket.io');
const io = require("socket.io")(httpServer, options);
const basicAuth = require('express-basic-auth')

app.use(basicAuth({
    users: require('./users.json'),
    challenge: true
}))

const broadcastTransmitterClients = () => {
    io.of("/").emit('transmitter_clients', io.of("/transmitter").sockets.size)
}

io.on("connection", socket => {
    broadcastTransmitterClients();

    socket.on('send_code', () => {
        console.log('someone requested to send code')
        io.of("/transmitter").emit('send_code')
    })
});

io.of("/transmitter").on("connection", (socket) => {
    broadcastTransmitterClients();

    socket.on('disconnect', () => {
        broadcastTransmitterClients();
    })
});

app.use(express.static('public'))

httpServer.listen(3030, '192.168.1.48');