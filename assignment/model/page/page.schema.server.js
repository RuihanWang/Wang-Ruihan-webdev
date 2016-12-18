module.exports = function() {
    var mongoose = require("mongoose");
    var PageSchema = mongoose.Schema({
        _website: {type:mongoose.Schema.ObjectId,ref:"Website"},
        name: {type: String, required: true},
        title: String,
        description: String,
        dateCreated: {type: Date, default: Date.now},
        widgets:  [{_widget:{type:mongoose.Schema.ObjectId,ref:"Website"}}]
    }, {collection: "assignment.page"});

    return PageSchema;
};