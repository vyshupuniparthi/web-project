require('dotenv').config();  // Make it first line
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbconnect = require('./backend/lib/connectLib');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var config = require('./backend/config/config');
var MongoStore = require('connect-mongo');
var mongoose = require('mongoose');
var db = mongoose.connection;
require('./backend/lib/dbUsersBootstrap').createUsers();

var app = express();
dbconnect.connect();
app.use(session({
    resave:false, 
    saveUninitialized:false, 
    secret:config.session_secret, 
    store: MongoStore.create({ mongoUrl: config.mongo_connection_string })
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.post("/register",(req,res)=>{
    // var response = {success: false, message: 'Login Failed', user: null };
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var data = {
        "username": username,
        "email" : email,
        "password" : password,
    }
  
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    // response.message = 'Login Successful';
    return res.redirect("/welcome");
})
app.get("/welcome", function(req,res){
    const fullFilePath = __dirname + "/public/welcome.html";
    res.sendFile(fullFilePath);
})
module.exports = app;
