const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
require('dotenv').config();
const port = process.env.PORT;
const hostname = process.env.HOST;


const Atlas_Url = process.env.DBURL;

mongoose.connect(Atlas_Url,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(response => {
        app.listen(port, hostname, () => {
            console.log(`server is runing on http://${hostname}:${port}`);
        })
    }).catch((error) => {
        console.log(error, "Error when connect with MongooDB not connected");
    })

