const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Juan Aragon.co");
})

app.listen(port, () => {
    console.log(`Initialized on port ${port}`);
})