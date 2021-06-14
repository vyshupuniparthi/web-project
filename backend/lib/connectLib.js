var mongoose = require('mongoose');
var config = require('../config/config');
var db = mongoose.connection;
module.exports = {
    connect : function(){
        mongoose.connect(config.mongo_connection_string, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true});
        db.on('connected', function(){
            console.log("Mongodb Connected");
        })
    }
}