const router = require("express").Router();

const { secret } = require("../../secret");

router.get("/locale", (req, res) => {
    res.json({locale: req.getLocale()});
})

router.get("/catalog", (req, res) => {
    res.json(req.getCatalog());
})

router.post("/secret", (req, res) => {
    if (!("key" in req.body)) {
        const code = 403;
        res.statusCode = code;
        res.json({code, message: "Invalid key"});
    }

    const {key} = req.body;

    if (key === "abc") {
        return res.json(secret);
    } else {
        const code = 403;
        res.statusCode = code;
        return res.json({code, message: "Invalid key"});
    }
})

module.exports = router;