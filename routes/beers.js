const Beer = require("../models/Beer");
const express = require("express");
const app = express();

app.get("/", (req,res)=> {
    Beer.find()
        .then((beers)=> {
            res.json(beers)
        })
})

module.exports = app;