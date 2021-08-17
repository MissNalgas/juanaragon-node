const express = require("express");
const app = express();
const port = 3001;

const myengine = require("./templates");
const mainRouter = require("./routes");

app.engine("html", myengine);
app.set("views", "./views");
app.set("view engine", "html");

app.use(express.static("static"));
app.use(mainRouter);

app.listen(port, () => {
    console.log(`Initialized on port ${port}`);
})