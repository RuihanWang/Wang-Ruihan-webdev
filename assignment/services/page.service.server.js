module.exports = function(app, model) {
    var pages = model.PageModel;

    app.get("/api/user/:uId/website/:wId/page", findAllPagesForWebsite);
    app.get("/api/user/:uId/website/:wId/page/:pId",findPageById);
    app.post("/api/user/:uId/website/:wId/page", createPage);
    app.delete("/api/user/:uId/website/:wId/page/:pId",detelePage);
    app.put("/api/user/:uId/website/:wid/page/:pId",updatePage);

    function createPage(req, res) {
        var page = req.body;
        pages
            .createPage(page)
            .then(
                function(newPage) {
                    res.send(newPage);
                },
                function(error) {
                    res.send(error);
                }
            );



    }

    function findAllPagesForWebsite(req, res) {
        var wid = req.params.wId;
        pages
            .findAllPagesForWebsite(wid)
            .then(
                function(page) {
                    res.send(page);
                },
                function(error){
                    res.send(error);
                }
            )

    }
    function findPageById(req,res) {
        var pageId = req.params.pId;
      pages
          .findPageById(pageId)
          .then(
          function(newPage) {
              res.send(newPage);
          },
          function(error) {
              res.send(error);
          }
      );
    }

    function updatePage(req, res) {
        var pageId = req.params.pId;
        var page = req.body;
        pages
            .updatePage(pageId, page)
            .then(
                function(newPage) {
                    res.send(newPage);
                },
                function(error) {
                    res.send(error);
                }
            );





    }



    function detelePage(req,res) {
      var pageId = req.params.pId;
        pages
            .deletePage(pageId)
            .then(
                function(newPage) {
                    res.send(newPage);
                },
                function(error) {
                    res.send(error);
                }
            );


    }

};