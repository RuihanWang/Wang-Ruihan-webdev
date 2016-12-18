module.exports = function() {

    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

    var api = {
        createWebsite: createWebsite,
        findAllWebsitesForUser: findAllWebsitesForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite,

    };

    return api;


    function findAllWebsitesForUser(userId) {
        return WebsiteModel.find({_user: userId});
    }

    function findWebsiteById(websiteId) {


        return WebsiteModel.findById(websiteId);
    }

    function updateWebsite(websiteId, website) {

        return WebsiteModel.update({_id: websiteId},
            {$set :
            {
                name: website.name,
                description: website.description
            }
            }
        );
    }

    function createWebsite(userId, website) {



        return WebsiteModel.create(website);


    }

    function deleteWebsite(websiteId) {
        return WebsiteModel.remove({_id: websiteId});
    }
};
