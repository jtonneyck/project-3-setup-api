var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const mongoose = require("mongoose");
require("dotenv").config();
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
mongoose.connect(process.env.mongodb_connection_string)
    .then(()=> {
        console.log("Connected to mongodb");
    })
    .catch((err)=> {
        console.log("not connected to mongodb: ", err)
    })

var app = express();

app.use(cors({
    credentials: true,
    origin: [process.env.client_origin_a, process.env.client_origin_b]
}));

app.use(session({
    cookie: { secure: "auto" },
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: (14 * 24 * 60 * 60), // = 14 days. Default
        autoRemove: 'native' // Default
    })
}));

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
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));

module.exports = app;
