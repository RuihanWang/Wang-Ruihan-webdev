module.exports = function(app) {
    var pages = [


        { "_id": "321", "name": "Post 1", "websiteId": "543", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "543", "description": "Lorem" }

    ];

    app.get("/api/user/:uId/website/:wId/page", findAllPagesForWebsite);
    app.get("/api/user/:uId/website/:wId/page/:pId",findPageById);
    app.post("/api/user/:uId/website/:wId/page", createPage);
    app.delete("/api/user/:uId/website/:wId/page/:pId",detelePage);
    app.put("/api/user/:uId/website/:wid/page/:pId",updatePage);

    function createPage(req, res) {
        var page = req.body;
        pages.push(page);

        res.send(page);
    }

    function findAllPagesForWebsite(req, res) {
        var wid = req.params.wId;
        var result = [];
        for(var p in pages) {

            if(pages[p].websiteId == wid) {
                result.push(pages[p]);
                console.log(result);
            }
        }
        res.send(result);
    }
    function findPageById(req,res) {
        var id = req.params.pId;
        var page = null;
        for(p in pages) {

            page = pages[p];

            if(page._id == id){
                res.send(page);

                return;
            }else {
                res.send('0');
                return;
            }
        }
    }

    function updatePage(req, res) {
        var page = req.body;
        for(u in pages) {
            if( parseInt(page._id) === parseInt(pages[u]._id)) {
                pages[u] = page;
                res.send(page);
                return;
            } else {
                res.send('0');
                return;
            }


        }


    }



    function detelePage(req,res) {
        var id = parseInt(req.params.pId);
        for (u in pages) {
            var page = pages[u];
            if (page._id === id) {
                pages.splice(u, 1);
                res.send(page);
                return;


            }


        }
        res.send('0');


    }

};