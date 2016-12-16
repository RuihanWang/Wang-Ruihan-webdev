module.exports = function() {
    var mongoose = require("mongoose");
    var userSchema  = mongoose.Schema({
        username: {type:String, return: true},
        password: {type:String, return: true},
        firstName: String,
        lastName: String,
        email:String,
        phone:String,
        dateCreated:{type:Date, default: Date.now() },
        facebook: {
            id: String,
            token: String
        }


        }, {collection: "user"});
    return  userSchema;
};





