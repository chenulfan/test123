import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config()

const app = express();

const PORT = process.env.PORT || 4040;

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string || "");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("DB Connected successfully");
    app.listen(PORT, () => console.log(`Server is running here http://localhost:${PORT}`));
});

// Remove Later

app.get('/', (req: any, res: any) => {
    console.log("here")
    res.send("HELLO WORLD CHECK")
})


app.get('/health', (req: any, res: any) => {
    console.log("here")
    res.send("health check")
})

