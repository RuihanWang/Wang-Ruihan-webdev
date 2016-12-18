module.exports = function(app, model) {
var websites = model.WebsiteModel;

    app.get("/api/user/:uId/website", findWebsitesByUser);
    app.get("/api/user/:uId/website/:wId",findWebsiteById);
    app.post("/api/user/:uId/website", createWebsite);
    app.delete("/api/user/:uId/website/:wId",deleteWebsite);
    app.put("/api/user/:uId/website/:wId",updateWebsite);

    function createWebsite(req, res) {
        var website = req.body;

       websites
           .createWebsite(website._user,website)
           .then(
               function(website) {
                   res.send(website);
               },
               function(error){
                   res.send(error);
               }
           );

    }

    function findWebsitesByUser(req, res) {

        var userId = req.params.uId;
        websites
            .findAllWebsitesForUser(userId)
            .then(
                function(websites) {
                    res.send(websites);
                },
                function(error) {
                    res.send(error);
                }
            );
    }
    function findWebsiteById(req,res) {
        websites
            .findWebsiteById(req.params.wId)
            .then(
                function (website) {
                res.send(website);
            },
                function(error) {
                res.send(error);
                });

        }


    function updateWebsite(req, res) {
        var userId = req.params.uid;
        var website = req.body;
        websites
            .updateWebsite(userId,website)
            .then(
                function (website) {
                    res.send(website);
                },
                function(error) {
                    res.send(error);
                }
            );


    }



    function deleteWebsite(req,res) {
        var websiteId = req.params.wId;
        websites
            .deleteWebsite(websiteId)
            .then(function(website) {
                res.sendStatus(200);
            },
                function(error) {
                res.status(404);
            }
            );


    }

};