require('dotenv').config();
const express = require('express');
const router = require('./servers');
const app = express();
const db_Connect = require('./connection/db');
db_Connect.connect();


app.use(express.json());

app.use('/', router);


const Port = process.env.PORT || 3000;


// app.listen(Port, () => {
//     console.log(`server is working on ${Port}`);
// });

module.exports = app;