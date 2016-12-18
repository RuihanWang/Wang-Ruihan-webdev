module.exports = function() {

    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var PageModel = mongoose.model("Page", PageSchema);
    var api = {

        createPage: createPage,
        findAllPagesForWebsite : findAllPagesForWebsite,
        findPageById:findPageById,
        updatePage:updatePage,
        deletePage:deletePage,


    };
    return api;

    function createPage(page) {

        return PageModel.create(page);
    }
    function deletePage(pageId){
        return PageModel.remove({_id: pageId});
    }

    function findAllPagesForWebsite(websiteId) {
        return PageModel.find({"_website": websiteId});
    }


    function findPageById(pageId){
        return PageModel.findById(pageId);
    }

    function updatePage(pageId, page){
        return PageModel.update({_id: pageId},{
                $set: {
                    name: page.name,
                    title: page.title,
                    description:page.description
                }
            });
    }


};
