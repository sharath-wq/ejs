const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

// app
const app = express();

// view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data = [];

const fetchData = (req, res, next) => {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const inputWord = req.body.input; // Corrected line

    axios
        .get(`${url}${inputWord}`)
        .then((response) => {
            const item = response.data;
            req.data = item;
            data = item;
            next();
        })
        .catch((error) => {
            console.error(error);
            next();
        });
};

// Home
app.get("/", (req, res) => {
    res.render("index", { title: "Dictionary", data });
});

app.post("/", fetchData, (req, res) => {
    res.redirect("/");
});

// 404 Page
app.use((req, res) => {
    res.status(404).render("404", { title: "Page not found" });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
