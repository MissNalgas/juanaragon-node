const router = require("express").Router();

router.get("/locale", (req, res) => {
    res.json({locale: req.getLocale()});
})

router.get("/catalog", (req, res) => {
    res.json(req.getCatalog());
})

router.post("/secret", (req, res) => {
    res.send("locale");
})

module.exports = router;