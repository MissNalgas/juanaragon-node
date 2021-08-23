const router = require("express").Router();
const url = require("url");
const puppeteer = require("puppeteer");
const MAIN_URL = (process.env.NODE_ENV === "test") ? "http://localhost:3000/" : "https://juanaragon.co";

router.use("/api", require("./api"));

router.get("/", (req, res) => {
    res.render("index");
})

router.get("/curriculum", (req, res) => {
    res.render("curriculum");
})

async function generatePdf(key, locale) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = `${MAIN_URL}/curriculum?pdf=true&key=${key}`;
    await page.setCookie({name: "locale", value: locale, url});
    await page.goto(url, {waitUntil: "networkidle2"});

    const pdf = await page.pdf({format: "a4", printBackground: true});

    await browser.close();
    return pdf;
}

router.get("/pdf", (req, res) => {

    const key = req.query.key || "";

    const locale = req.getLocale() || "";

    generatePdf(key, locale).then((buff) => {
        res.setHeader("Content-Type", "application/pdf");
        return res.send(buff);
    }).catch((err) => {
        console.error(err);
        return res.send("Error generating PDF");
    });

})

module.exports = router;