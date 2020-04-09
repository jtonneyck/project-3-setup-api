const Student = require("../models/Student");
const express = require("express");
const app = express();

app.get("/", (req,res)=> {
    console.log("hits")
    Student.find()
        .sort({date: -1})
        .then((students)=> {
            res.json(students);
        })
        .catch((err)=> {
            res.status(500).json({message: "err"});
        })
})

app.post("/add", (req,res)=> {
    Student.create(req.body)
        .then((student)=> {
            res.json(student);
        })
        .catch((err)=> {
            res.status(500).json({message: "err"});
        })
})

module.exports = app;