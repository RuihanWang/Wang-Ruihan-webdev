module.exports = function(app) {
    var websites = [
        {_id: 321, name: 'facebook.com', uid: 123},
        {_id: 432, name: 'wikipedia.org', uid: 123},
        {_id: 543, name: 'twitter.com', uid: 234}
    ];

    app.get("/api/user/:uId/website", findWebsitesByUser);
    app.get("/api/user/:uId/website/:wId",findWebsiteById);
    app.post("/api/user/:uId/website", createWebsite);
    app.delete("/api/user/:uId/website/:wId",deleteWebsite);
    app.put("/api/user/:uId/website/:wId",updateWebsite);

    function createWebsite(req, res) {
        var website = req.body;

        websites.push(website);

        res.send(websites);
    }

    function findWebsitesByUser(req, res) {
        var uid = req.params.uId;
        var result = [];
        for(var w in websites) {
            console.log(websites[w].uid +"webuid" +uid +"uid");
            console.log(websites[w].uid == uid);
            if(websites[w].uid == uid) {
                result.push(websites[w]);
            }
        }
        res.json(result);
    }
    function findWebsiteById(req,res) {

        var id = req.params.wId;
        var web = null;
        for(u in websites) {

            web = websites[u];

            if(web._id == id){
                res.send(web);

                return;
            }
            }
            res.send('0');
        }


    function updateWebsite(req, res) {
        var web = req.body;

        for(u in websites) {
            if( parseInt(web._id) === parseInt(websites[u]._id)) {
                websites[u] = web;
                res.send(web);
                return;
            }


        }
        res.send('0');


    }



    function deleteWebsite(req,res) {
        var id = parseInt(req.params.wId);
        console.log(id);
        for (u in websites) {
            var web = websites[u];
            if (web._id === id) {
                websites.splice(u, 1);
                res.send(websites);
                return;


            }


        }
        res.send('0');


    }

};