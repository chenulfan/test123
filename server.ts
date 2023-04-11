import express from "express";

const app = express();

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

// Remove Later
app.get('/health', (req: any, res: any) => {
    console.log("here")
    res.send("health check")
})

