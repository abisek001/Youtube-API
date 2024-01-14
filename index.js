import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import userRouter from "./Router/user.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json())
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

