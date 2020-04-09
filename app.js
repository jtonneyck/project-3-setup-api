var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/ironhack")
    .then(()=> {
        console.log("Connected to mongodb");
    })
    .catch((err)=> {
        console.log("not connected to mongodb: ", err)
    })

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

function protect(req,res,next){
    if(req.session.currentUser) next();
    else res.status(403).json({message: "Not logged in buddy"});
}

app.use('/', require('./routes/name'));
app.use('/students', require('./routes/students'));
app.use('/beers', protect, require('./routes/beers'));
app.use('/users', require('./routes/users'));

module.exports = app;
