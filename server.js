// const express = require('express')
// const { Server } = require("socket.io");
// const app = express();

//imported server and express

// const http = require('http');
// const ACTIONS = require('./src/Action');
// const server = http.createServer(app);
// const io = new Server(server);
//created a server 

// const userSocketMap = {};
//socket id and user name will be stored

// function getAllConnectedClients(roomId) {
//    return Array.from(io.sockets.adaptor.rooms.get(roomId) || []).map((socketId) => {
//             return {
//                 socketId,
//                 username: userSocketMap[socketId]
//             }
//    })
// }
//allows multiple users in a room who are having same roomid

// io.on('connection' , (socket) => {
//     console.log('sockect connected', socket.id);
//     socket.on(ACTIONS.JOIN, ({roomId, username}) => {
//         userSocketMap[socket.id] = username;
//         socket.join(roomId); //single user

//         const clients = getAllConnectedClients(roomId)
//     })
// });

// edited json file script
// "server:dev": "nodemon server.js",
// "server:prod": "node server.js",


// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Listening on port ${PORT}`) );

