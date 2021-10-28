const express = require("express");
const cheerio = require("cheerio");
const fs = require('fs');
const app = express();
const config = require("./config.json");
const port = config.port;

app.get("/", (req, res) => {
    const $ = cheerio.load(fs.readFileSync("./index.html"));
    $("body").append(`<object class="statuspage" data=${config.url}></object>`);
    res.send($.html());
});

app.listen(port);
console.log(`listening on ${port}`);