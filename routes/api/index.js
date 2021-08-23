const router = require("express").Router();

const {generateKey, validateKey} = require("../../models/utils");
const { secret, API_KEY } = require("../../secret");


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

    validateKey(key).then(() => {
        return res.json(secret);
    }).catch((err) => {
        console.error(err);
        const code = 403;
        res.statusCode = code;
        return res.json({code, message: "Invalid key"})
    })
})

router.post("/generatekey", (req, res) => {
    if (!("expiration" in req.body && "apiKey" in req.body)) {
        const code = 401;
        return res.json({code, message: "Invalid"})
    }

    let {expiration, apiKey} = req.body;
    if (apiKey !== API_KEY) {
        const code = 403;
        res.statusCode = code;
        return res.json({code, message: "Unathorized"});
    }
    expiration += Date.now();

    generateKey(expiration).then((key) => {
        return res.json({code: 200, message: "Done", key})
    }).catch((err) => {
        const code = 501;
        return res.json({code, message: err})
    })
     

})

module.exports = router;