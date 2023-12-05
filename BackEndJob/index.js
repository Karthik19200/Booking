require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./routes/router');

require('./DB/connection');

const server = express();

// Enable CORS for your server
server.use(cors({
    origin: 'http://localhost:4200'
}));

server.use(express.json());

server.use(router);

const port = 5000;

server.listen(port, () => {
    console.log("Server listening on", port);
});

server.get('/', (req, res) => {
    res.status(200).json('Navare server is started');
});
