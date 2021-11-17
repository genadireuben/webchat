require('dotenv').config();
// const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, PORT);
const chatController = require('./controllers/chatController');
const ioChat = require('./socket/messages');


ioChat(io);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', chatController);

http.listen(PORT, () => console.log('servidor na porta 3000'));