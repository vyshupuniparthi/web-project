var mongoose = require('mongoose');
var config = require('../config/config');

module.exports = {
    connect : function(){
        mongoose.connect(config.mongo_connection_string, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true});
        mongoose.connection.on('connected', function(){
            console.log("Mongodb Connected");
        })
    }
}