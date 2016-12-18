var mongoose = require("mongoose");

module.exports = function() {
    var websiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        name: {type:String, return: true},
        description: String,
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "website"});

    return websiteSchema;
};




