const router = require("express").Router();

router.use("/api", require("./api"));

router.get("/", (req, res) => {
    res.render("index");
})

router.get("/curriculum", (req, res) => {
    res.render("curriculum");
})

module.exports = router;