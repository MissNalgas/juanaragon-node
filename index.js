const express = require("express");
const app = express();
const port = 3001;

const myengine = require("./templates");
const mainRouter = require("./routes");

const { I18n } = require("i18n");
const path = require("path");

app.engine("html", myengine);
app.set("views", "./views");
app.set("view engine", "html");

app.use(express.static("static"));
const i18n = new I18n({
    locales: ["en", "es", "ru"],
    directory: path.join(__dirname, "locales")
});
app.use(i18n.init);


app.use(mainRouter);

app.listen(port, () => {
    console.log(`Initialized on port ${port}`);
})