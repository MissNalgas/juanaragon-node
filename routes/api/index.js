const router = require("express").Router();

router.get("/locale", (req, res) => {
    res.send("locale");
})

module.exports = router;