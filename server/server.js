import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs"; // in-built node module 

const morgan = require("morgan"); // morgan does not support import 
require("dotenv").config(); // to access env variables

const app = express();

// db
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB connection error: ", err));

// middlewares
app.use(express.json({ limit: "5mb" })); 
app.use(cors({
    origin: [process.env.CLIENT_URL]
}))

// autoload routes:
// readdirSync reads through the folder then map through each files 'r' then apply that as a middleware and require each route
readdirSync("./routes").map((r) => app.use('/api', require(`./routes/${r}`))); 

// listen
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on ${port}`))
