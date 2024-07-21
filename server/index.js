const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
//converts data into json format
app.use(express.json());
//Port
const PORT = process.env.PORT || 5500;






//Adds port & connects to server
app.listen(PORT, ()=> console.log("Server connected") );