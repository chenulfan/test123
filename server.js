const express = require("express");

const app = express();

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

// Remove Later
app.get('/health', (req, res) => {
    console.log("here")
    res.send("health check")
})

