const express = require("express");
const data = require("./data");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { data });
});

app.listen(3004);
