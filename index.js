import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./Router/user.js";

const app = express();
dotenv.config();
const port = process.env.PORT;
const hostname = process.env.HOST;
app.use('/user', userRouter)

const Atlas_Url = process.env.DBURL;

mongoose.connect(Atlas_Url)
    .then(response => {
        app.listen(port, hostname, () => {
            console.log(`server is runing on http://${hostname}:${port}`);
        })
    }).catch((error) => {
        console.log(error, "Error when connect with MongooDB not connected");
    })

